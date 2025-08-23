# Grootiq - Internship Management Platform

A modern, full-stack internship management platform built with Next.js 15, React 19, and Tailwind CSS. Grootiq provides comprehensive tools for managing internships, tracking student progress, and facilitating mentor-student interactions.

## 🚀 Features

### Core Functionality
- **Dual Dashboard System**: Separate interfaces for mentors and students
- **Internship Management**: Track internship status, progress, and evaluations
- **Team Management**: Organize students into mentee teams with mentor oversight
- **Progress Tracking**: Monitor student performance and project completion
- **Leaderboard System**: Gamified ranking system to motivate students
- **Task Assignment**: Streamlined task distribution and tracking

### User Roles
- **Students**: Access to internship dashboard, progress tracking, and team collaboration
- **Mentors**: Comprehensive oversight tools, student evaluation, and team management
- **Administrators**: System-wide management and analytics

### Technical Features
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Real-time Updates**: Dynamic data updates and notifications
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Theme Support**: Light/dark mode with next-themes

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Forms**: React Hook Form, Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
Grootiq/
├── app/                    # Next.js app router pages
│   ├── dashboard/         # Dashboard routes (mentor/student)
│   ├── leaderboard/       # Leaderboard functionality
│   ├── login/            # Authentication pages
│   └── signup/           # User registration
├── components/            # Reusable UI components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   ├── leaderboard/      # Leaderboard components
│   └── ui/               # Base UI components (shadcn/ui)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- pnpm 9.12.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Grootiq
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Other Platforms
- **Netlify**: `netlify deploy --prod --dir=out`
- **Railway**: `railway up`
- **Docker**: Build and deploy containerized version

## 🎯 Key Components

### Dashboard Components
- **Dashboard Header**: Navigation and user controls
- **Internship Status**: Current internship progress
- **Progress Tracker**: Visual progress indicators
- **Points Overview**: Gamification system
- **Team Details**: Student team management
- **Task Assignment**: Project and task distribution

### Leaderboard System
- **Leaderboard Table**: Student rankings and scores
- **Top Performers**: Highlighted achievements
- **Filters**: Customizable ranking views
- **Statistics**: Performance analytics

### Authentication
- **Login Form**: Secure user authentication
- **Signup Form**: New user registration
- **Form Validation**: Input validation and error handling

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:
```env
# Database
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# API Keys
NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind CSS
The project uses Tailwind CSS 4 with custom animations and components from shadcn/ui.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔮 Roadmap

- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Integration with external LMS platforms
- [ ] Advanced reporting features
- [ ] Multi-language support

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
