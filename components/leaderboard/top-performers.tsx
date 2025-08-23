import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Medal, Award, Crown } from "lucide-react"

export function TopPerformers() {
  const topThree = [
    {
      rank: 1,
      name: "Alice Johnson",
      team: "Team Delta",
      role: "Full Stack Development",
      points: 3250,
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "AJ",
      achievements: ["Project Leader", "Code Excellence", "Innovation"],
    },
    {
      rank: 2,
      name: "David Kim",
      team: "Team Epsilon",
      role: "Backend Development",
      points: 3100,
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "DK",
      achievements: ["Technical Excellence", "Mentorship", "Team Player"],
    },
    {
      rank: 3,
      name: "Emma Wilson",
      team: "Team Zeta",
      role: "UI/UX Design",
      points: 2950,
      avatar: "/placeholder.svg?height=80&width=80",
      initials: "EW",
      achievements: ["Design Innovation", "User Focus", "Creativity"],
    },
  ]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-8 h-8 text-yellow-500" />
      case 2:
        return <Medal className="w-8 h-8 text-gray-400" />
      case 3:
        return <Award className="w-8 h-8 text-amber-600" />
      default:
        return null
    }
  }

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">🥇 Champion</Badge>
      case 2:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-300">🥈 Runner-up</Badge>
      case 3:
        return <Badge className="bg-amber-100 text-amber-800 border-amber-300">🥉 Third Place</Badge>
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {topThree.map((student) => (
        <Card
          key={student.rank}
          className={`border-border bg-card relative overflow-hidden cursor-pointer ${
            student.rank === 1 ? "ring-2 ring-yellow-500/20 hover-glow" : "hover-pop"
          }`}
        >
          {student.rank === 1 && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600" />
          )}

          <CardContent className="p-6 text-center space-y-4">
            <div className="flex items-center justify-center">{getRankIcon(student.rank)}</div>

            <Avatar className="h-20 w-20 mx-auto hover-pop-subtle cursor-pointer">
              <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
              <AvatarFallback className="text-lg">{student.initials}</AvatarFallback>
            </Avatar>

            <div>
              <h3 className="text-xl font-heading font-bold text-foreground">{student.name}</h3>
              <p className="text-sm text-muted-foreground">{student.team}</p>
              <p className="text-sm text-muted-foreground">{student.role}</p>
            </div>

            <div className="space-y-2">
              {getRankBadge(student.rank)}
              <div className="text-2xl font-heading font-bold text-primary">{student.points.toLocaleString()} pts</div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Top Achievements</h4>
              <div className="flex flex-wrap gap-1 justify-center">
                {student.achievements.slice(0, 2).map((achievement, index) => (
                  <Badge key={index} variant="outline" className="text-xs hover-pop-subtle cursor-pointer">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
