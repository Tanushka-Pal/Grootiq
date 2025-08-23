"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MessageSquare, Award } from "lucide-react"
import { useState } from "react"

export function StudentEvaluation() {
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null)

  const studentsForReview = [
    {
      id: 1,
      name: "John Doe",
      team: "Team Alpha",
      role: "Frontend Development",
      currentPoints: 2850,
      recentWork: "Completed user authentication module",
      initials: "JD",
      needsReview: true,
    },
    {
      id: 2,
      name: "Maya Patel",
      team: "Team Gamma",
      role: "Frontend Development",
      currentPoints: 3100,
      recentWork: "Implemented responsive dashboard design",
      initials: "MP",
      needsReview: true,
    },
    {
      id: 3,
      name: "Sarah Chen",
      team: "Team Alpha",
      role: "Backend Development",
      currentPoints: 2920,
      recentWork: "Built REST API endpoints",
      initials: "SC",
      needsReview: false,
    },
  ]

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="font-heading">Student Evaluation & Feedback</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {studentsForReview.map((student) => (
            <div key={student.id} className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt={student.name} />
                    <AvatarFallback>{student.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-foreground">{student.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {student.team} • {student.role}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{student.recentWork}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{student.currentPoints} pts</Badge>
                  {student.needsReview && <Badge className="bg-accent/10 text-accent">Needs Review</Badge>}
                </div>
              </div>

              {selectedStudent === student.id.toString() ? (
                <div className="space-y-4 pt-3 border-t border-border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="performance-rating">Performance Rating</Label>
                      <Select>
                        <SelectTrigger className="bg-input">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent (5/5)</SelectItem>
                          <SelectItem value="good">Good (4/5)</SelectItem>
                          <SelectItem value="average">Average (3/5)</SelectItem>
                          <SelectItem value="below-average">Below Average (2/5)</SelectItem>
                          <SelectItem value="poor">Poor (1/5)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="points-award">Points to Award</Label>
                      <Select>
                        <SelectTrigger className="bg-input">
                          <SelectValue placeholder="Select points" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="200">200 points</SelectItem>
                          <SelectItem value="150">150 points</SelectItem>
                          <SelectItem value="100">100 points</SelectItem>
                          <SelectItem value="50">50 points</SelectItem>
                          <SelectItem value="0">0 points</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Provide detailed feedback on the student's performance..."
                      className="bg-input"
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm">
                      <Award className="w-4 h-4 mr-2" />
                      Submit Review
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setSelectedStudent(null)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={() => setSelectedStudent(student.id.toString())}>
                    <Star className="w-4 h-4 mr-2" />
                    Review & Rate
                  </Button>
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
