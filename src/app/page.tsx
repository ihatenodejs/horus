"use client"

import { DashHeader } from "@/components/Header"
import { AppSidebar } from "@/components/Sidebar"
import { authClient } from "@/lib/auth-client"
import { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Loader } from "lucide-react"
import { GithubSignin } from "@/components/auth/SignInButtons"
import { Router } from "@/components/Router"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [currentPage] = useState("home")

  useEffect(() => {
    authClient.getSession()
      .then(({ data }) => {
        if (data?.session?.userId) {
          setIsAuthenticated(true)
        }
        setIsLoading(false)
      })
      .catch(error => {
        console.error('[!] Error while fetching session:', error)
      })
  }, [])

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="text-4xl font-bold mb-8 italic">horus</h1>
        <Loader className="animate-spin" />
      </div>
    )
  }

  return (
    <>
      {isAuthenticated && <AppSidebar />}
      <main className="flex min-h-screen w-full flex-col">
        {isAuthenticated ? (
          <DashHeader
            title="home"
            isAuthenticated={isAuthenticated}
            isLoginLoading={isLoginLoading}
            setIsLoginLoading={setIsLoginLoading}
          />
        ) : (
          <DashHeader
            title="authentication"
            isAuthenticated={isAuthenticated}
            isLoginLoading={isLoginLoading}
            setIsLoginLoading={setIsLoginLoading}
          />
        )}
        <div id="mainContent" className="flex flex-row w-full h-full">
          <div id="content" className="flex flex-col w-full bg-white py-6 px-8">
            {isAuthenticated ? (
              <Router currentPage={currentPage} />
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
                    <GithubSignin
                      isLoginLoading={isLoginLoading}
                      setIsLoginLoading={setIsLoginLoading}
                    />
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
