import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Eye, MessageSquare } from "lucide-react"

export function MenteeTeams() {
  const teams = [
    {
      id: 1,
      name: "Team Alpha",
      project: "E-commerce Platform",
      progress: 85,
      members: [
        { name: "John Doe", role: "Frontend", initials: "JD", points: 2850 },
        { name: "Sarah Chen", role: "Backend", initials: "SC", points: 2920 },
        { name: "Mike Johnson", role: "Design", initials: "MJ", points: 2750 },
        { name: "Emily Davis", role: "Marketing", initials: "ED", points: 2680 },
        { name: "Alex Rodriguez", role: "PM", initials: "AR", points: 2800 },
      ],
      dueDate: "Apr 15, 2024",
      status: "on-track",
    },
    {
      id: 2,
      name: "Team Beta",
      project: "Mobile Banking App",
      progress: 65,
      members: [
        { name: "Lisa Wang", role: "Frontend", initials: "LW", points: 2450 },
        { name: "Tom Wilson", role: "Backend", initials: "TW", points: 2380 },
        { name: "Anna Garcia", role: "Design", initials: "AG", points: 2520 },
        { name: "Chris Lee", role: "Marketing", initials: "CL", points: 2300 },
        { name: "Ryan Taylor", role: "PM", initials: "RT", points: 2400 },
      ],
      dueDate: "Apr 20, 2024",
      status: "at-risk",
    },
    {
      id: 3,
      name: "Team Gamma",
      project: "Analytics Dashboard",
      progress: 92,
      members: [
        { name: "Maya Patel", role: "Frontend", initials: "MP", points: 3100 },
        { name: "James Brown", role: "Backend", initials: "JB", points: 3050 },
        { name: "Sophie Turner", role: "Design", initials: "ST", points: 2980 },
        { name: "David Kim", role: "Marketing", initials: "DK", points: 2850 },
        { name: "Rachel Green", role: "PM", initials: "RG", points: 3020 },
      ],
      dueDate: "Apr 10, 2024",
      status: "ahead",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ahead":
        return <Badge className="bg-primary/10 text-primary">Ahead of Schedule</Badge>
      case "on-track":
        return <Badge className="bg-accent/10 text-accent">On Track</Badge>
      case "at-risk":
        return <Badge variant="destructive">At Risk</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <CardTitle className="font-heading">Mentee Teams</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {teams.map((team) => (
          <div key={team.id} className="border border-border rounded-lg p-4 space-y-4 hover-pop-subtle cursor-pointer">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-foreground text-lg">{team.name}</h4>
                <p className="text-sm text-muted-foreground">{team.project}</p>
                <p className="text-xs text-muted-foreground mt-1">Due: {team.dueDate}</p>
              </div>
              <div className="flex items-center gap-2">{getStatusBadge(team.status)}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Project Progress</span>
                <span className="text-sm text-muted-foreground">{team.progress}%</span>
              </div>
              <Progress value={team.progress} className="h-2" />
            </div>

            <div className="space-y-3">
              <h5 className="text-sm font-medium text-foreground">Team Members</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {team.members.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-muted/30 rounded-lg hover-pop-subtle cursor-pointer"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt={member.name} />
                      <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {member.role}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{member.points} pts</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <Button variant="outline" size="sm" className="hover-pop-subtle bg-transparent">
                <Eye className="w-4 h-4 mr-2" />
                View Details
              </Button>
              <Button variant="outline" size="sm" className="hover-pop-subtle bg-transparent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message Team
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
