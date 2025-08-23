"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Send } from "lucide-react"
import { useState } from "react"

export function TopStudentsSelection() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])

  const topStudents = [
    {
      id: "1",
      name: "Maya Patel",
      team: "Team Gamma",
      role: "Frontend Development",
      points: 3100,
      performance: "Excellent",
      initials: "MP",
      achievements: ["Project Leader", "Code Quality"],
    },
    {
      id: "2",
      name: "James Brown",
      team: "Team Gamma",
      role: "Backend Development",
      points: 3050,
      performance: "Excellent",
      initials: "JB",
      achievements: ["Technical Excellence", "Mentorship"],
    },
    {
      id: "3",
      name: "Sarah Chen",
      team: "Team Alpha",
      role: "Backend Development",
      points: 2920,
      performance: "Very Good",
      initials: "SC",
      achievements: ["Innovation", "Team Player"],
    },
    {
      id: "4",
      name: "John Doe",
      team: "Team Alpha",
      role: "Frontend Development",
      points: 2850,
      performance: "Good",
      initials: "JD",
      achievements: ["Consistent Performance"],
    },
  ]

  const handleStudentSelection = (studentId: string, checked: boolean) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId])
    } else {
      setSelectedStudents(selectedStudents.filter((id) => id !== studentId))
    }
  }

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "Excellent":
        return <Badge className="bg-primary/10 text-primary text-xs">Excellent</Badge>
      case "Very Good":
        return <Badge className="bg-accent/10 text-accent text-xs">Very Good</Badge>
      case "Good":
        return (
          <Badge variant="secondary" className="text-xs">
            Good
          </Badge>
        )
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            Average
          </Badge>
        )
    }
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-heading">Top Students</CardTitle>
          <Button size="sm" disabled={selectedStudents.length === 0}>
            <Send className="w-4 h-4 mr-2" />
            Recommend ({selectedStudents.length})
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Select students to recommend for real internship opportunities</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {topStudents.map((student) => (
          <div key={student.id} className="border border-border rounded-lg p-3 space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id={`student-${student.id}`}
                checked={selectedStudents.includes(student.id)}
                onCheckedChange={(checked) => handleStudentSelection(student.id, checked as boolean)}
                className="mt-1"
              />

              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt={student.name} />
                <AvatarFallback>{student.initials}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {student.team} • {student.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{student.points}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">{getPerformanceBadge(student.performance)}</div>

                <div className="flex flex-wrap gap-1 mt-2">
                  {student.achievements.map((achievement, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {selectedStudents.length > 0 && (
          <div className="pt-3 border-t border-border">
            <div className="bg-primary/5 rounded-lg p-3">
              <h4 className="font-semibold text-foreground text-sm mb-2">Recommendation Details</h4>
              <p className="text-sm text-muted-foreground">
                Selected students will be recommended to partner companies for real internship opportunities. This
                includes their portfolio, performance metrics, and your mentor endorsement.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
