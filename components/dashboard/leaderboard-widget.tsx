import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award } from "lucide-react"
import Link from "next/link"

export function LeaderboardWidget() {
  const topStudents = [
    {
      rank: 1,
      name: "Alice Johnson",
      points: 3250,
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
      badge: "gold",
    },
    {
      rank: 2,
      name: "David Kim",
      points: 3100,
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DK",
      badge: "silver",
    },
    {
      rank: 3,
      name: "Emma Wilson",
      points: 2950,
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EW",
      badge: "bronze",
    },
    {
      rank: 4,
      name: "Michael Brown",
      points: 2900,
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
      badge: null,
    },
    {
      rank: 5,
      name: "Sarah Davis",
      points: 2875,
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SD",
      badge: null,
    },
  ]

  const getBadgeIcon = (badge: string | null, rank: number) => {
    switch (badge) {
      case "gold":
        return <Trophy className="w-4 h-4 text-yellow-500" />
      case "silver":
        return <Medal className="w-4 h-4 text-gray-400" />
      case "bronze":
        return <Award className="w-4 h-4 text-amber-600" />
      default:
        return <span className="text-sm font-semibold text-muted-foreground">#{rank}</span>
    }
  }

  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading">Top Students</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/leaderboard">View All</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {topStudents.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer ${
              student.badge ? "hover-glow" : "hover-pop-subtle"
            }`}
          >
            <div className="w-6 flex items-center justify-center">{getBadgeIcon(student.badge, student.rank)}</div>

            <Avatar className="h-8 w-8">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback className="text-xs">{student.initials}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{student.name}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {student.points.toLocaleString()} pts
                </Badge>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-2 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 hover-pop-subtle cursor-pointer">
            <div className="w-6 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">#12</span>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
              <AvatarFallback className="text-xs">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground">You</p>
              <Badge variant="secondary" className="text-xs">
                2,850 pts
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
