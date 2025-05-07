import { signInGithub } from "@/utils/account-client"
import { Button } from "../ui/button"
import { SiGithub } from "react-icons/si"
import { Loader } from "lucide-react"

export function GithubSignin({ isLoginLoading, setIsLoginLoading }: { isLoginLoading: boolean, setIsLoginLoading: (isLoginLoading: boolean) => void }) {
  return (
    <Button size="lg" className="w-full cursor-pointer" disabled={isLoginLoading} onClick={() => {
      setIsLoginLoading(true)
      signInGithub()
    }}>
      {isLoginLoading ? <Loader className="animate-spin" /> : <SiGithub />}
      {isLoginLoading ? "Redirecting to GitHub..." : "Continue with GitHub"}
    </Button>
  )
}