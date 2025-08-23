import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, AlertCircle } from "lucide-react"

export function ProjectsList() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Build a responsive e-commerce platform with React and Node.js",
      status: "completed",
      progress: 100,
      dueDate: "Feb 15, 2024",
      tasks: { completed: 12, total: 12 },
    },
    {
      id: 2,
      title: "Mobile App UI/UX",
      description: "Design and prototype a mobile banking application",
      status: "completed",
      progress: 100,
      dueDate: "Mar 10, 2024",
      tasks: { completed: 8, total: 8 },
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Create an interactive dashboard for business analytics",
      status: "in-progress",
      progress: 75,
      dueDate: "Apr 12, 2024",
      tasks: { completed: 9, total: 12 },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-primary" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-accent" />
      default:
        return <AlertCircle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-primary/10 text-primary">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-accent/10 text-accent">In Progress</Badge>
      default:
        return <Badge variant="secondary">Pending</Badge>
    }
  }

  return (
    <Card className="border-border bg-card hover-pop">
      <CardHeader>
        <CardTitle className="font-heading">Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-border rounded-lg p-4 space-y-3 hover-pop-subtle cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                {getStatusIcon(project.status)}
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                </div>
              </div>
              {getStatusBadge(project.status)}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Due: {project.dueDate}</span>
              <span className="text-muted-foreground">
                {project.tasks.completed}/{project.tasks.total} tasks
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
