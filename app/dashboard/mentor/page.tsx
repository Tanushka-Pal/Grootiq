import { MentorProfile } from "@/components/dashboard/mentor-profile"
import { MenteeTeams } from "@/components/dashboard/mentee-teams"
import { TaskAssignment } from "@/components/dashboard/task-assignment"
import { StudentEvaluation } from "@/components/dashboard/student-evaluation"
import { TopStudentsSelection } from "@/components/dashboard/top-students-selection"
import { MentorStats } from "@/components/dashboard/mentor-stats"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function MentorDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userType="mentor" />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <MentorProfile />
            <MenteeTeams />
            <TaskAssignment />
            <StudentEvaluation />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <MentorStats />
            <TopStudentsSelection />
          </div>
        </div>
      </main>
    </div>
  )
}
