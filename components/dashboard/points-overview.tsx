import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, TrendingUp } from "lucide-react"

export function PointsOverview() {
  const currentPoints = 2850
  const monthlyPoints = 450
  const rank = 12
  const totalStudents = 156

  const achievements = [
    { name: "Project Completion", points: 500, icon: Target },
    { name: "Code Quality", points: 200, icon: Star },
    { name: "Team Collaboration", points: 150, icon: Trophy },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Points & Achievements</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-primary/5 rounded-lg">
          <div className="text-3xl font-heading font-bold text-primary">{currentPoints.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">Total Points</div>
          <div className="flex items-center justify-center gap-1 mt-2">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">+{monthlyPoints} this month</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
          <div>
            <div className="text-lg font-heading font-semibold text-foreground">#{rank}</div>
            <div className="text-xs text-muted-foreground">Current Rank</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">Top {Math.round((rank / totalStudents) * 100)}%</div>
            <div className="text-xs text-muted-foreground">of {totalStudents} students</div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-foreground">Recent Achievements</h4>
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-muted/20">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">{achievement.name}</div>
                  <Badge variant="secondary" className="text-xs mt-1">
                    +{achievement.points} pts
                  </Badge>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
