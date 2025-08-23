import { Trophy } from "lucide-react"

export function LeaderboardHeader() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <Trophy className="w-6 h-6 text-primary" />
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Global Leaderboard</h1>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Discover the top-performing students across all teams and specializations. Compete, learn, and celebrate
        achievements together.
      </p>

      <div className="flex items-center justify-center gap-8 pt-4">
        <div className="text-center">
          <div className="text-2xl font-heading font-bold text-primary">156</div>
          <div className="text-sm text-muted-foreground">Total Students</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-heading font-bold text-accent">12</div>
          <div className="text-sm text-muted-foreground">Active Teams</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-heading font-bold text-foreground">36</div>
          <div className="text-sm text-muted-foreground">Projects</div>
        </div>
      </div>
    </div>
  )
}
