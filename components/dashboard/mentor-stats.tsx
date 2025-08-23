import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, Target, TrendingUp } from "lucide-react"

export function MentorStats() {
  const stats = [
    {
      title: "Active Students",
      value: "15",
      icon: Users,
      change: "+2 this month",
      changeType: "positive",
    },
    {
      title: "Teams Managed",
      value: "3",
      icon: Target,
      change: "All active",
      changeType: "neutral",
    },
    {
      title: "Avg Team Progress",
      value: "81%",
      icon: TrendingUp,
      change: "+5% this week",
      changeType: "positive",
    },
    {
      title: "Students Recommended",
      value: "8",
      icon: Trophy,
      change: "2 hired",
      changeType: "positive",
    },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Mentorship Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <IconComponent className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-2xl font-heading font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
                <div
                  className={`text-xs mt-1 ${stat.changeType === "positive" ? "text-accent" : "text-muted-foreground"}`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
