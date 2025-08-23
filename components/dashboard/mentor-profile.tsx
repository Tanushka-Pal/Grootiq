import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Building, MapPin, Users } from "lucide-react"

export function MentorProfile() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Mentor Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Jane Smith" />
            <AvatarFallback className="text-lg">JS</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h3 className="text-xl font-heading font-semibold text-foreground">Jane Smith</h3>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Building className="w-4 h-4" />
              <span className="text-sm">Senior Software Engineer at TechCorp</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">Mentoring 15 students across 3 teams</span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                8+ Years Experience
              </Badge>
              <Badge variant="outline">Full Stack Development</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
