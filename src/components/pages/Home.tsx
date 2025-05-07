"use client"

import {
  Card,
  CardContent,
} from "../ui/card"
import { useState, useEffect } from "react"
import {
  IoCalendarOutline,
  IoMailOpenOutline,
  IoGitPullRequestOutline,
  IoMailOutline,
  IoPencilOutline,
} from "react-icons/io5"
import { GoIssueOpened } from "react-icons/go"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
      {/*
      Hidden by default (will only show on larger devices)
        - Mobile devices typically have a clock always showing
        - It takes up valuable screen space
      */}
      <Card className="hidden sm:block">
        <CardContent>
          <h1 className="text-4xl font-bold text-center my-6">{currentTime}</h1>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="flex items-center gap-1 mb-6">
            <IoCalendarOutline />
            <p className="font-bold">NEXT UP</p>
          </div>
          <p className="text-lg">Placeholder</p>
          <p className="text-xs text-gray-500 italic">in X minutes</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="min-h-full items-center">
          <div className="flex items-center gap-1 mb-1.5">
            <IoMailOutline />
            <p className="font-bold">GIT</p>
          </div>
          <div className="flex gap-8 justify-center mt-3.5">
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">X</h1>
              <div className="flex items-center gap-1">
                <GoIssueOpened size={12} />
                <p className="text-xs text-muted-foreground">ISSUES</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">X</h1>
              <div className="flex items-center gap-1">
                <IoGitPullRequestOutline size={12} />
                <p className="text-xs text-muted-foreground">PULL REQS</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="min-h-full items-center">
          <div className="flex items-center gap-1 mb-1.5">
            <IoMailOutline />
            <p className="font-bold">EMAIL</p>
          </div>
          <div className="flex gap-8 justify-center mt-3.5">
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">X</h1>
              <div className="flex items-center gap-1">
                <IoMailOpenOutline size={12} />
                <p className="text-xs text-muted-foreground">UNREAD</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-bold">X</h1>
              <div className="flex items-center gap-1">
                <IoPencilOutline size={12} />
                <p className="text-xs text-muted-foreground">DRAFTS</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}