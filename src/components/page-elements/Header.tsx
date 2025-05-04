import { SidebarTrigger } from "@/components/ui/sidebar"

export function DashHeader() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-black text-white">
      <SidebarTrigger className="cursor-pointer" />
      <h1 className="text-2xl font-bold italic">home</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">option</a></li>
          <li><a href="#" className="hover:underline">option</a></li>
          <li><a href="#" className="hover:underline">option</a></li>
        </ul>
      </nav>
    </header>
  )
}