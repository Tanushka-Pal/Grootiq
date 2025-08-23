import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock } from "lucide-react"

export function ProgressTracker() {
  const tasks = [
    {
      id: 1,
      title: "Set up project repository",
      status: "completed",
      dueDate: "Jan 20, 2024",
      project: "Data Analytics Dashboard",
    },
    {
      id: 2,
      title: "Design database schema",
      status: "completed",
      dueDate: "Jan 25, 2024",
      project: "Data Analytics Dashboard",
    },
    {
      id: 3,
      title: "Implement user authentication",
      status: "in-progress",
      dueDate: "Feb 5, 2024",
      project: "Data Analytics Dashboard",
    },
    {
      id: 4,
      title: "Create data visualization components",
      status: "pending",
      dueDate: "Feb 15, 2024",
      project: "Data Analytics Dashboard",
    },
    {
      id: 5,
      title: "Write unit tests",
      status: "pending",
      dueDate: "Feb 20, 2024",
      project: "Data Analytics Dashboard",
    },
  ]

  const completedTasks = tasks.filter((task) => task.status === "completed").length
  const totalTasks = tasks.length
  const progressPercentage = (completedTasks / totalTasks) * 100

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-primary" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-accent" />
      default:
        return <Circle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-primary/10 text-primary text-xs">Done</Badge>
      case "in-progress":
        return <Badge className="bg-accent/10 text-accent text-xs">Active</Badge>
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            Pending
          </Badge>
        )
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Current Tasks</CardTitle>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Overall Progress</span>
            <span className="text-sm font-medium">
              {completedTasks}/{totalTasks} completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
            {getStatusIcon(task.status)}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className="text-sm font-medium text-foreground">{task.title}</h4>
                {getStatusBadge(task.status)}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{task.project}</p>
              <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
