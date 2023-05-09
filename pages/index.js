import { useEffect } from "react"
import { useRouter } from "next/router"

export default function RedirectToMain() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/Ryan_Piedrahita_Resume.pdf")
  })
  return null
}
