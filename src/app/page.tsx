import { DashHeader } from "@/components/page-elements/Header"
import { SubSidebar } from "@/components/page-elements/Sidebar"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col p-4">
      <DashHeader />
      <div id="mainContent" className="flex flex-row w-full h-full">
        <SubSidebar />
        <div id="content" className="flex flex-col w-3/4 bg-white py-6 px-8">
          <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold italic">life at a glance</h1>
          </div>
        </div>
      </div>
    </main>
  )
}
