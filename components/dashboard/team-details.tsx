import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function TeamDetails() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Development",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
      isCurrentUser: true,
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Backend Development",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SC",
      isCurrentUser: false,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "UI/UX Design",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MJ",
      isCurrentUser: false,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Social Media Marketing",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "ED",
      isCurrentUser: false,
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      role: "Project Management",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AR",
      isCurrentUser: false,
    },
  ]

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Frontend Development":
        return "bg-blue-100 text-blue-700"
      case "Backend Development":
        return "bg-green-100 text-green-700"
      case "UI/UX Design":
        return "bg-purple-100 text-purple-700"
      case "Social Media Marketing":
        return "bg-pink-100 text-pink-700"
      case "Project Management":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <CardTitle className="font-heading">Team Members</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors hover-pop-subtle cursor-pointer"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback className="text-sm">{member.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                {member.isCurrentUser && (
                  <Badge variant="outline" className="text-xs">
                    You
                  </Badge>
                )}
              </div>
              <Badge variant="secondary" className={`text-xs mt-1 ${getRoleBadgeColor(member.role)}`}>
                {member.role}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
