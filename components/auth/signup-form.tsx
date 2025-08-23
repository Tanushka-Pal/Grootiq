"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { GraduationCap, Users } from "lucide-react"

export function SignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("student")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect based on role
    if (activeTab === "student") {
      window.location.href = "/dashboard/student"
    } else {
      window.location.href = "/dashboard/mentor"
    }

    setIsLoading(false)
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="student" className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Student
        </TabsTrigger>
        <TabsTrigger value="mentor" className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          Mentor
        </TabsTrigger>
      </TabsList>

      <TabsContent value="student">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="student-first-name">First Name</Label>
                  <Input id="student-first-name" placeholder="John" required className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="student-last-name">Last Name</Label>
                  <Input id="student-last-name" placeholder="Doe" required className="bg-input" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-email">Email</Label>
                <Input
                  id="student-email"
                  type="email"
                  placeholder="student@university.edu"
                  required
                  className="bg-input"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-college">College/University</Label>
                <Input id="student-college" placeholder="University of Technology" required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-role">Specialization</Label>
                <Select required>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Choose your specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Development</SelectItem>
                    <SelectItem value="backend">Backend Development</SelectItem>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-password">Password</Label>
                <Input id="student-password" type="password" required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="student-confirm-password">Confirm Password</Label>
                <Input id="student-confirm-password" type="password" required className="bg-input" />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Student Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="mentor">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mentor-first-name">First Name</Label>
                  <Input id="mentor-first-name" placeholder="Jane" required className="bg-input" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mentor-last-name">Last Name</Label>
                  <Input id="mentor-last-name" placeholder="Smith" required className="bg-input" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-email">Email</Label>
                <Input id="mentor-email" type="email" placeholder="mentor@company.com" required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-company">Company</Label>
                <Input id="mentor-company" placeholder="Tech Company Inc." required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-position">Position</Label>
                <Input id="mentor-position" placeholder="Senior Software Engineer" required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-experience">Years of Experience</Label>
                <Select required>
                  <SelectTrigger className="bg-input">
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3-5">3-5 years</SelectItem>
                    <SelectItem value="5-10">5-10 years</SelectItem>
                    <SelectItem value="10+">10+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-password">Password</Label>
                <Input id="mentor-password" type="password" required className="bg-input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mentor-confirm-password">Confirm Password</Label>
                <Input id="mentor-confirm-password" type="password" required className="bg-input" />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Mentor Account"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
