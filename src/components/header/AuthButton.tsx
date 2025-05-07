"use client"

import { signInGithub } from "@/utils/account-client"
import { SiGithub } from "react-icons/si"
import { Button } from "../ui/button"
import { authClient } from "@/lib/auth-client"
import { IoExitOutline } from "react-icons/io5"
import { useState } from "react"
import { Loader } from "lucide-react"

export function AuthButton({ isAuthenticated, isLoginLoading, setIsLoginLoading }: { isAuthenticated: boolean, isLoginLoading: boolean, setIsLoginLoading: (isLoginLoading: boolean) => void }) {
  const [isLogoutLoading, setIsLogoutLoading] = useState(false)

  if (isAuthenticated) {
    return (
      <Button variant="secondary" className="cursor-pointer" disabled={isLogoutLoading} onClick={async () => {
        setIsLogoutLoading(true)
        await authClient.signOut()
        window.location.reload()
      }}>
        {isLogoutLoading ? <Loader className="animate-spin" /> : <IoExitOutline />}
        {isLogoutLoading ? "Logging out..." : "Logout"}
      </Button>
    )
  } else {
    return (
      <Button variant="secondary" className="cursor-pointer" disabled={isLoginLoading} onClick={() => {
        setIsLoginLoading(true)
        signInGithub()
      }}>
        {isLoginLoading ? <Loader className="animate-spin" /> : <SiGithub />}
        {isLoginLoading ? "Redirecting..." : "Login"}
      </Button>
    )
  }
}