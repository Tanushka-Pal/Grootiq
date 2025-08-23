import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Trophy, Target } from "lucide-react"

export function LeaderboardStats() {
  const currentUserStats = {
    rank: 12,
    points: 2850,
    percentile: 92, // Top 8%
    weeklyGain: 45,
    monthlyGain: 180,
    nextRankPoints: 2875,
    pointsToNext: 25,
  }

  const achievements = [
    { name: "First Project", earned: true, rarity: "Common" },
    { name: "Team Player", earned: true, rarity: "Uncommon" },
    { name: "Code Quality", earned: true, rarity: "Rare" },
    { name: "Innovation", earned: false, rarity: "Epic" },
    { name: "Leadership", earned: false, rarity: "Legendary" },
  ]

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common":
        return "bg-gray-100 text-gray-700"
      case "Uncommon":
        return "bg-green-100 text-green-700"
      case "Rare":
        return "bg-blue-100 text-blue-700"
      case "Epic":
        return "bg-purple-100 text-purple-700"
      case "Legendary":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Your Performance */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="font-heading">Your Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-primary/5 rounded-lg">
            <div className="text-3xl font-heading font-bold text-primary">#{currentUserStats.rank}</div>
            <div className="text-sm text-muted-foreground">Current Rank</div>
            <Badge variant="secondary" className="mt-2">
              Top {100 - currentUserStats.percentile}%
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progress to Rank #11</span>
              <span className="text-sm font-medium">{currentUserStats.pointsToNext} points needed</span>
            </div>
            <Progress value={(currentUserStats.points / currentUserStats.nextRankPoints) * 100} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-lg font-heading font-bold text-accent">+{currentUserStats.weeklyGain}</span>
              </div>
              <div className="text-xs text-muted-foreground">This Week</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-lg font-heading font-bold text-primary">+{currentUserStats.monthlyGain}</span>
              </div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="font-heading">Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg ${
                achievement.earned ? "bg-muted/30" : "bg-muted/10 opacity-60"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  achievement.earned ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                <Trophy className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground">{achievement.name}</div>
                <Badge variant="outline" className={`text-xs mt-1 ${getRarityColor(achievement.rarity)}`}>
                  {achievement.rarity}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="font-heading">Platform Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Active Students</span>
            </div>
            <span className="text-sm font-medium">156</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Avg Points</span>
            </div>
            <span className="text-sm font-medium">2,245</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Top Score</span>
            </div>
            <span className="text-sm font-medium">3,250</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
