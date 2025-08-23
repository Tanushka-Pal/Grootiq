"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, User } from "lucide-react"
import { useState } from "react"

export function TaskAssignment() {
  const [showForm, setShowForm] = useState(false)

  const recentTasks = [
    {
      id: 1,
      title: "Implement user authentication",
      assignedTo: "Team Alpha",
      dueDate: "Feb 10, 2024",
      priority: "high",
      status: "in-progress",
    },
    {
      id: 2,
      title: "Design mobile responsive layout",
      assignedTo: "Team Beta",
      dueDate: "Feb 15, 2024",
      priority: "medium",
      status: "pending",
    },
    {
      id: 3,
      title: "Write API documentation",
      assignedTo: "Team Gamma",
      dueDate: "Feb 8, 2024",
      priority: "low",
      status: "completed",
    },
  ]

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="text-xs">
            High
          </Badge>
        )
      case "medium":
        return <Badge className="bg-accent/10 text-accent text-xs">Medium</Badge>
      case "low":
        return (
          <Badge variant="secondary" className="text-xs">
            Low
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            Unknown
          </Badge>
        )
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-primary/10 text-primary text-xs">Completed</Badge>
      case "in-progress":
        return <Badge className="bg-accent/10 text-accent text-xs">In Progress</Badge>
      case "pending":
        return (
          <Badge variant="secondary" className="text-xs">
            Pending
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            Unknown
          </Badge>
        )
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading">Task Assignment</CardTitle>
          <Button size="sm" onClick={() => setShowForm(!showForm)}>
            <Plus className="w-4 h-4 mr-2" />
            Assign Task
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {showForm && (
          <div className="border border-border rounded-lg p-4 space-y-4 bg-muted/20">
            <h4 className="font-semibold text-foreground">Create New Task</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="task-title">Task Title</Label>
                <Input id="task-title" placeholder="Enter task title" className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="assign-to">Assign To</Label>
                <Select>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Select team or student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team-alpha">Team Alpha</SelectItem>
                    <SelectItem value="team-beta">Team Beta</SelectItem>
                    <SelectItem value="team-gamma">Team Gamma</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="task-description">Description</Label>
              <Textarea
                id="task-description"
                placeholder="Describe the task requirements..."
                className="bg-input"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input id="due-date" type="date" className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="points">Points Reward</Label>
                <Input id="points" type="number" placeholder="100" className="bg-input" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button size="sm">Create Task</Button>
              <Button variant="outline" size="sm" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Recent Tasks</h4>
          {recentTasks.map((task) => (
            <div key={task.id} className="flex items-start gap-3 p-3 border border-border rounded-lg">
              <div className="flex-1">
                <h5 className="font-medium text-foreground">{task.title}</h5>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{task.assignedTo}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{task.dueDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getPriorityBadge(task.priority)}
                {getStatusBadge(task.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
