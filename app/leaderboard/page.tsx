import { LeaderboardHeader } from "@/components/leaderboard/leaderboard-header"
import { LeaderboardFilters } from "@/components/leaderboard/leaderboard-filters"
import { LeaderboardTable } from "@/components/leaderboard/leaderboard-table"
import { TopPerformers } from "@/components/leaderboard/top-performers"
import { LeaderboardStats } from "@/components/leaderboard/leaderboard-stats"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader userType="student" />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="space-y-6">
          <LeaderboardHeader />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <TopPerformers />
              <LeaderboardFilters />
              <LeaderboardTable />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <LeaderboardStats />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
