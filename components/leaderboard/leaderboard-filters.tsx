"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

export function LeaderboardFilters() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Card className="border-border bg-card">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-input"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filter by:</span>
            </div>

            <Select defaultValue="all-teams">
              <SelectTrigger className="w-40 bg-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-teams">All Teams</SelectItem>
                <SelectItem value="team-alpha">Team Alpha</SelectItem>
                <SelectItem value="team-beta">Team Beta</SelectItem>
                <SelectItem value="team-gamma">Team Gamma</SelectItem>
                <SelectItem value="team-delta">Team Delta</SelectItem>
                <SelectItem value="team-epsilon">Team Epsilon</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-roles">
              <SelectTrigger className="w-48 bg-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-roles">All Specializations</SelectItem>
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="design">UI/UX Design</SelectItem>
                <SelectItem value="marketing">Social Media Marketing</SelectItem>
                <SelectItem value="pm">Project Management</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="points-desc">
              <SelectTrigger className="w-40 bg-input">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="points-desc">Highest Points</SelectItem>
                <SelectItem value="points-asc">Lowest Points</SelectItem>
                <SelectItem value="name-asc">Name A-Z</SelectItem>
                <SelectItem value="name-desc">Name Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
