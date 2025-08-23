import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus, Eye } from "lucide-react"

export function LeaderboardTable() {
  const students = [
    {
      rank: 1,
      name: "Alice Johnson",
      team: "Team Delta",
      role: "Full Stack Development",
      points: 3250,
      weeklyChange: 150,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AJ",
      badge: "gold",
      completedProjects: 3,
      isCurrentUser: false,
    },
    {
      rank: 2,
      name: "David Kim",
      team: "Team Epsilon",
      role: "Backend Development",
      points: 3100,
      weeklyChange: 120,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "DK",
      badge: "silver",
      completedProjects: 3,
      isCurrentUser: false,
    },
    {
      rank: 3,
      name: "Emma Wilson",
      team: "Team Zeta",
      role: "UI/UX Design",
      points: 2950,
      weeklyChange: 80,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "EW",
      badge: "bronze",
      completedProjects: 2,
      isCurrentUser: false,
    },
    {
      rank: 4,
      name: "Michael Brown",
      team: "Team Theta",
      role: "Frontend Development",
      points: 2900,
      weeklyChange: -20,
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MB",
      badge: null,
      completedProjects: 2,
      isCurrentUser: false,
    },
    {
      rank: 5,
      name: "Sarah Davis",
      team: "Team Iota",
      role: "Social Media Marketing",
      points: 2875,
      weeklyChange: 60,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SD",
      badge: null,
      completedProjects: 2,
      isCurrentUser: false,
    },
    // Add more students...
    {
      rank: 12,
      name: "John Doe",
      team: "Team Alpha",
      role: "Frontend Development",
      points: 2850,
      weeklyChange: 0,
      trend: "stable",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JD",
      badge: null,
      completedProjects: 2,
      isCurrentUser: true,
    },
    // Continue with more students...
    {
      rank: 13,
      name: "Lisa Wang",
      team: "Team Beta",
      role: "Frontend Development",
      points: 2820,
      weeklyChange: 40,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "LW",
      badge: null,
      completedProjects: 2,
      isCurrentUser: false,
    },
    {
      rank: 14,
      name: "Tom Wilson",
      team: "Team Beta",
      role: "Backend Development",
      points: 2800,
      weeklyChange: -10,
      trend: "down",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "TW",
      badge: null,
      completedProjects: 2,
      isCurrentUser: false,
    },
    {
      rank: 15,
      name: "Anna Garcia",
      team: "Team Beta",
      role: "UI/UX Design",
      points: 2780,
      weeklyChange: 30,
      trend: "up",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "AG",
      badge: null,
      completedProjects: 2,
      isCurrentUser: false,
    },
  ]

  const getRankIcon = (rank: number, badge: string | null) => {
    if (badge === "gold") return <Trophy className="w-5 h-5 text-yellow-500" />
    if (badge === "silver") return <Medal className="w-5 h-5 text-gray-400" />
    if (badge === "bronze") return <Award className="w-5 h-5 text-amber-600" />
    return <span className="text-sm font-semibold text-muted-foreground">#{rank}</span>
  }

  const getTrendIcon = (trend: string, change: number) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-green-500" />
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-red-500" />
    return <Minus className="w-4 h-4 text-muted-foreground" />
  }

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
      case "Full Stack Development":
        return "bg-indigo-100 text-indigo-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <CardTitle className="font-heading">All Students Rankings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {students.map((student) => (
            <div
              key={student.rank}
              className={`flex items-center gap-4 p-4 rounded-lg border transition-colors hover:bg-muted/50 cursor-pointer ${
                student.isCurrentUser ? "bg-primary/5 border-primary/20 hover-glow" : "border-border hover-pop-subtle"
              } ${student.badge ? "hover-glow" : ""}`}
            >
              {/* Rank */}
              <div className="w-8 flex items-center justify-center">{getRankIcon(student.rank, student.badge)}</div>

              {/* Avatar & Info */}
              <Avatar className="h-10 w-10">
                <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                <AvatarFallback>{student.initials}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground truncate">{student.name}</h4>
                  {student.isCurrentUser && (
                    <Badge variant="outline" className="text-xs">
                      You
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-muted-foreground">{student.team}</span>
                  <Badge variant="secondary" className={`text-xs ${getRoleBadgeColor(student.role)}`}>
                    {student.role}
                  </Badge>
                </div>
              </div>

              {/* Points */}
              <div className="text-right">
                <div className="text-lg font-heading font-bold text-foreground">{student.points.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">points</div>
              </div>

              {/* Weekly Change */}
              <div className="flex items-center gap-1 min-w-0">
                {getTrendIcon(student.trend, student.weeklyChange)}
                <span
                  className={`text-sm font-medium ${
                    student.trend === "up"
                      ? "text-green-600"
                      : student.trend === "down"
                        ? "text-red-600"
                        : "text-muted-foreground"
                  }`}
                >
                  {student.weeklyChange > 0 ? "+" : ""}
                  {student.weeklyChange}
                </span>
              </div>

              {/* Projects */}
              <div className="text-center min-w-0">
                <div className="text-sm font-medium text-foreground">{student.completedProjects}</div>
                <div className="text-xs text-muted-foreground">projects</div>
              </div>

              {/* Actions */}
              <Button variant="ghost" size="sm" className="hover-pop-subtle">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center pt-6">
          <Button variant="outline" className="hover-pop-subtle bg-transparent">
            Load More Students
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
