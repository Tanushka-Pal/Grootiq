import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Brain, Bell, Settings, LogOut } from "lucide-react"
import Link from "next/link"

interface DashboardHeaderProps {
  userType: "student" | "mentor"
}

export function DashboardHeader({ userType }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 navbar-animate">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-heading font-bold text-foreground">GrootIQ</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={`/dashboard/${userType}`}
              className="text-foreground hover:text-primary transition-all duration-300 navbar-animate"
            >
              Dashboard
            </Link>
            <Link
              href="/leaderboard"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 navbar-animate"
            >
              Leaderboard
            </Link>
            {userType === "student" && (
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 navbar-animate"
              >
                Projects
              </Link>
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="navbar-animate">
              <Bell className="w-4 h-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full navbar-animate">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
