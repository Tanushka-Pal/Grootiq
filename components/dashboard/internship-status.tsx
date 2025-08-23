import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export function InternshipStatus() {
  const startDate = "Jan 15, 2024"
  const endDate = "Apr 15, 2024"
  const currentProgress = 65 // 65% through the internship
  const daysRemaining = 32

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Internship Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Duration</span>
          </div>
          <span className="text-sm font-medium">
            {startDate} - {endDate}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Time Remaining</span>
          </div>
          <Badge variant="secondary">{daysRemaining} days</Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{currentProgress}%</span>
          </div>
          <Progress value={currentProgress} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-primary">2</div>
            <div className="text-xs text-muted-foreground">Completed Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-accent">1</div>
            <div className="text-xs text-muted-foreground">Active Project</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-heading font-bold text-muted-foreground">3</div>
            <div className="text-xs text-muted-foreground">Total Projects</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
