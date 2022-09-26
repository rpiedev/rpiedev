//define the token variables for iterating
var token; var tokens=[]; var token_nr = 0;
//The tokenation regex
var reg = /(?:(\d+(\.\d+)?(\e(\+|\-)?\d+)?)|(.))/g;
//error code  and prev answer holder
var er; var answer;

//defailt symbol and holder
var symbol_table = {};
var original_symbol = {
    nud: function () {
        //this.error("undefined");
    },
    led: function(left) {
        //this.error("missing operator");
    }
}

//define any operator a priority and a type
function symbol(id, bp) {
    var sym = symbol_table[id];
    bp = bp || 0;
    if (sym) {
        if (bp >= sym.lbp) {
            sym.lbp = bp;
        }
    } else {
        sym = Object.create(original_symbol);
        sym.id = sym.value = id;
        sym.lbp = bp;
        symbol_table[id] = sym;
    }
    return sym;
}
//DEFINE OPERATORS AND ELSE
symbol("(else)");
symbol("(end)");
//THE OPERAND METHODS
var addi = symbol('+', 10); //addition
    addi.nud = function () { //if in front of expression
        return expression(100);
    }
    addi.led = function (left) { //if before expression
        var right = expression(10);
        return left*1+right*1;
    }
var si = symbol("s", 0); //sine
    si.nud = function () {
        return (Math.sin(expression(100)).toFixed(7));
    }
var co = symbol("c", 0); //cosine
    co.nud = function () {
        return (Math.cos(expression(100)).toFixed(7));
    }
var ta = symbol("t", 0); //tangent
    ta.nud = function () {
        return (Math.tan(expression(100)).toFixed(7));
    }
var ln = symbol("l", 0); //natural log
    ln.nud = function () {
        return (Math.log(expression(100)).toFixed(7));
    }
var subtr = symbol("-", 10); //subtraction
    subtr.nud = function () {
        return -expression(100);
    }
    subtr.led = function (left) {
        return left-expression(10);
    }
var multi = symbol("*", 20); //multiplication
    multi.led = function (left) {
        return left*expression(20);
    }
var divi = symbol("/", 20); //division
    divi.led = function (left) {
        return left/expression(20);
    }
var expon = symbol("^", 30); //exponent
    expon.led = function (left) {
        return Math.pow(left, expression(30-1));
    }
var lparen = symbol("(", 0); //left parenthesis
    lparen.nud = function () {
        var e = expression(0);
        advance(")");
        return e;
    }
var rparen = symbol(")", 0); //right parenthesis
//Number methods
var numb = symbol("(literal)"); //Digits and floats
    numb.nud = function () {return this.value;}
var pi = symbol("p"); //pi
    pi.nud = function () {return Math.PI};
var an = symbol("a"); //ans
    an.nud = function () {
        return answer;
    };

//Turns the input string into an iterable array of tokens
function tokenize(str) {
    for (var match of str.replace(/\s/g,'').matchAll(reg)) {
        var obje = {value:match[0],type:""}
        if (!isNaN(match[0])) {
            obje.type = "number"
        } else {obje.type = "operator"}
        tokens.push(obje);
    }
} 
//advances through the token array one at a time
function advance() {
    var a, o, t, v;
    if (token_nr >= tokens.length) {
        token= symbol_table["(end)"];
        return;
    }
    t = tokens[token_nr];
    token_nr +=1;
    v= t.value;
    a = t.type;
    if (a === "operator") {
        o = symbol_table[v];
        if (!o) {
            er = ("Unknown Operator "+v)
            return;
        }
    } else if (a === "number") {
        a = "literal";
        o = symbol_table["(literal)"];
    } else {
        er = ("Unexpected token "+a)
        return;
    }
    token = Object.create(o);
    token.value = v; token.arity = a;
    return token;
}

//uses assigned priority to perform calculations in order
function expression(rbp) {
    var left;
    var t = token;
    if (t===null) {return NaN}
    advance();
    try {
        left = t.nud();
    } catch {/*These hands*/}
    while (rbp < token.lbp) {
        t = token;
        advance();
        left = t.led(left);
    }
    return left;
}

export function solve(inp, ans) {
    answer = ans;
    er=0; token = null; tokens=[]; token_nr = 0; //Default everything
    tokenize(inp); advance(); //Turns the input into tokens and get to the first one
    var resu = expression(0); //Find the result
    var outp = resu == 0 ? 0 : resu; //If its 0 with decimals just make it 0
    var poserr = er===0 ? null : er; //If there is an error code, \/
    return [outp, poserr]
}

//the end
//I pledge my honor that I have abided by the Stevens Honor System - Ryan Piedrahita