import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { IoCalendarOutline } from "react-icons/io5"

export default function LifeAtAGlance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      <Card>
        <CardHeader className="-mb-3">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <IoCalendarOutline />
            Today
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Card className="py-3">
            <CardContent>
              <p className="text-lg font-bold">Event 1</p>
              <p className="text-sm text-gray-500">Description of event 1</p>
              <p className="text-sm text-gray-500 font-bold">10:00 AM - 11:00 AM</p>
            </CardContent>
          </Card>
          <Card className="mt-2 py-3">
            <CardContent>
              <p className="text-lg font-bold">Event 2</p>
              <p className="text-sm text-gray-500">Description of event 2</p>
              <p className="text-sm text-gray-500 font-bold">11:00 AM - 12:00 PM</p>
            </CardContent>
          </Card>
          <Card className="mt-2 py-3">
            <CardContent>
              <p className="text-lg font-bold">Event 3</p>
              <p className="text-sm text-gray-500">Description of event 3</p>
              <p className="text-sm text-gray-500 font-bold">12:00 PM - 1:00 PM</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}