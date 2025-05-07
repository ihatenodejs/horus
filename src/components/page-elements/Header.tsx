import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { SiGithub } from "react-icons/si"
import { signInGithub } from "@/utils/account-client"
import { authClient } from "@/lib/auth-client"

export function DashHeader({ title, isAuthenticated }: { title: string, isAuthenticated: boolean }) {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black text-white">
      {isAuthenticated ? (
        <SidebarTrigger className="cursor-pointer" />
      ) : ( <div></div> )}
      {/* the blank div is used to keep the layout consistent */}
      <h1 className="text-2xl font-bold italic">{title}</h1>
      <nav>
        <ul className="flex space-x-4 text-black">
          {!isAuthenticated ? (
            <Button variant="secondary" className="cursor-pointer" onClick={signInGithub}>
              <SiGithub />
              Login
            </Button>
          ) : (
            <Button variant="secondary" className="cursor-pointer" onClick={async () => {
              await authClient.signOut()
              window.location.reload()
            }}>
              Logout
            </Button>
          )}
        </ul>
      </nav>
    </header>
  )
}