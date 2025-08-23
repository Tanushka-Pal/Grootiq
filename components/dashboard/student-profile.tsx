import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin } from "lucide-react"

export function StudentProfile() {
  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <CardTitle className="font-heading">Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 hover-pop-subtle cursor-pointer">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="John Doe" />
            <AvatarFallback className="text-lg">JD</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground">John Doe</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <GraduationCap className="w-4 h-4" />
              <span className="text-sm">University of Technology</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary hover-pop-subtle cursor-pointer">
                Frontend Development
              </Badge>
              <Badge variant="outline" className="hover-pop-subtle cursor-pointer">
                3rd Year
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
