import { SidebarTrigger } from "@/components/ui/sidebar"
import { AuthButton } from "./header/AuthButton"
import { cn } from "@/lib/utils"
import { Pages } from "./resources/Pages"

export function DashHeader({ currentPage, isAuthenticated, isLoginLoading, setIsLoginLoading }: { currentPage: string, isAuthenticated: boolean, isLoginLoading: boolean, setIsLoginLoading: (isLoginLoading: boolean) => void }) {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black text-white">
      {isAuthenticated ? (
        <SidebarTrigger className="cursor-pointer" />
      ) : ( <div></div> )}
      {/* the blank div is used to keep the layout consistent */}
      <h1 className={cn("text-2xl font-bold italic", !isAuthenticated && "fixed left-1/2 -translate-x-1/2")}>
        {Pages[currentPage as keyof typeof Pages].title}
      </h1>
      <nav>
        <ul className="flex space-x-4 text-black">
          <AuthButton isAuthenticated={isAuthenticated} isLoginLoading={isLoginLoading} setIsLoginLoading={setIsLoginLoading} />
        </ul>
      </nav>
    </header>
  )
}