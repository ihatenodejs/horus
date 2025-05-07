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
import { HomeIcon, CalendarIcon } from "lucide-react"

export function AppSidebar() {
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
            <SidebarMenuButton className="cursor-pointer">
              <HomeIcon />
              <span>Home</span>
            </SidebarMenuButton>
            <SidebarMenuButton className="cursor-pointer">
              <CalendarIcon />
              <span>Life at a Glance</span>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}