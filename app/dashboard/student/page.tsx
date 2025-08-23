import { StudentProfile } from "@/components/dashboard/student-profile"
import { InternshipStatus } from "@/components/dashboard/internship-status"
import { ProjectsList } from "@/components/dashboard/projects-list"
import { TeamDetails } from "@/components/dashboard/team-details"
import { ProgressTracker } from "@/components/dashboard/progress-tracker"
import { PointsOverview } from "@/components/dashboard/points-overview"
import { LeaderboardWidget } from "@/components/dashboard/leaderboard-widget"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userType="student" />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <StudentProfile />
            <InternshipStatus />
            <ProjectsList />
            <ProgressTracker />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <PointsOverview />
            <TeamDetails />
            <LeaderboardWidget />
          </div>
        </div>
      </main>
    </div>
  )
}
