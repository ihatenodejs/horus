"use client"

import { DashHeader } from "@/components/page-elements/Header"
import { AppSidebar } from "@/components/page-elements/Sidebar"
import { authClient } from "@/lib/auth-client"
import { signInGithub } from "@/utils/account-client"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SiGithub } from "react-icons/si"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    authClient.getSession()
      .then(({ data }) => {
        if (data?.session?.userId) {
          setIsAuthenticated(true)
        }
      })
      .catch(error => {
        console.error('[!] Error while fetching session:', error)
      })
  }, [])

  return (
    <>
      {isAuthenticated && <AppSidebar />}
      <main className="flex min-h-screen w-full flex-col p-4">
        {isAuthenticated ? (
          <DashHeader
            title="home"
            isAuthenticated={isAuthenticated}
          />
        ) : (
          <DashHeader
            title="authentication"
            isAuthenticated={isAuthenticated}
          />
        )}
        <div id="mainContent" className="flex flex-row w-full h-full">
          <div id="content" className={cn(
            "flex flex-col w-3/4 bg-white py-6 px-8",
            isAuthenticated ? "w-3/4" : "w-full"
          )}>
            {isAuthenticated ? (
              <div className="flex flex-col">
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center content-center w-full h-full">
                <Card className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold">Login</CardTitle>
                    <CardDescription>
                      Choose your preferred authentication method to continue
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full cursor-pointer" onClick={signInGithub}>
                      <SiGithub />
                      Continue with GitHub
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
