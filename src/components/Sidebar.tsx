import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Pages } from "@/components/resources/Pages"

export function AppSidebar({ currentPage, setCurrentPage }: { currentPage: string, setCurrentPage: (page: string) => void }) {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center">
        <h1 className="text-2xl font-bold italic mt-4">horus</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Main
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {Object.values(Pages).map((page) => (
              <SidebarMenuButton key={page.name} className={cn("cursor-pointer", currentPage === page.name && "bg-gray-100")} onClick={() => setCurrentPage(page.name)}>
                {page.icon}
                <span>{page.title}</span>
              </SidebarMenuButton>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}