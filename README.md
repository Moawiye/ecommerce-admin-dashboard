# E-commerce Admin Dashboard

A comprehensive, production-ready admin dashboard for e-commerce management built with Next.js 14, featuring modern UI components, real-time analytics, and complete CRUD operations.

## 🚀 Features

### Core Functionality
- **Authentication System** - Secure login with NextAuth.js and JWT
- **Dashboard Overview** - Real-time statistics and key metrics
- **Customer Management** - Complete customer database with search and filtering
- **Product Inventory** - Product catalog with stock management
- **Order Management** - Order tracking and status management
- **Analytics Dashboard** - Comprehensive charts and performance metrics
- **User Settings** - Profile management and preferences

### Technical Features
- **Modern Tech Stack** - Next.js 14 with App Router
- **Type Safety** - Full TypeScript implementation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **State Management** - Zustand for lightweight state management
- **Data Visualization** - ApexCharts for interactive charts
- **Form Validation** - React Hook Form with Zod schemas
- **Database** - Prisma ORM with SQLite (easily switchable to PostgreSQL)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Authentication**: NextAuth.js v4
- **Database**: Prisma + SQLite (dev) / PostgreSQL (prod)
- **Charts**: ApexCharts.js
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   NEXTAUTH_SECRET=your-secret-key-here-change-in-production
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL="file:./dev.db"
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with initial data
   npm run db:seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Default Login Credentials

- **Email**: admin@example.com
- **Password**: password123

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   └── login/         # Login page
│   ├── (dashboard)/       # Protected dashboard routes
│   │   ├── dashboard/     # Main dashboard
│   │   ├── analytics/     # Analytics page
│   │   ├── customers/     # Customer management
│   │   ├── products/      # Product management
│   │   ├── orders/        # Order management
│   │   └── settings/      # User settings
│   ├── api/               # API routes
│   │   └── auth/          # NextAuth API
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── charts/            # Chart components
│   ├── layout/            # Layout components
│   └── forms/             # Form components
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   ├── db.ts              # Database configuration
│   └── utils.ts           # Utility functions
├── store/                 # Zustand stores
│   └── index.ts           # State management
└── types/                 # TypeScript type definitions
    └── index.ts           # Main types
```

## 🎯 Key Components

### Authentication
- Secure login system with NextAuth.js
- JWT-based session management
- Protected routes and middleware

### Dashboard
- Real-time statistics cards
- Revenue trends chart
- Sales by category visualization
- Recent activity feed

### Data Management
- Customer database with search and filtering
- Product inventory with stock tracking
- Order management with status updates
- Bulk operations and export functionality

### Analytics
- Revenue trends over time
- Category performance analysis
- Customer growth metrics
- Performance indicators

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🔧 Configuration

### Database
The project uses SQLite for development and can easily be switched to PostgreSQL for production by updating the `DATABASE_URL` in your environment variables.

### Authentication
NextAuth.js is configured with a credentials provider. You can easily add Google OAuth or other providers by updating the `auth.ts` configuration file.

### Styling
The project uses Tailwind CSS with a custom design system. Colors and components are defined in the `globals.css` file and can be customized to match your brand.

## 📱 Responsive Design

The dashboard is fully responsive and works seamlessly on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Customization

### Themes
- Light and dark mode support
- Customizable color scheme
- Component variants

### Components
- All UI components are built with shadcn/ui
- Easily customizable and extendable
- Consistent design system

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔮 Roadmap

- [ ] Real-time notifications
- [ ] Advanced reporting
- [ ] Multi-language support
- [ ] API rate limiting
- [ ] Advanced analytics
- [ ] Mobile app
- [ ] Integration with popular e-commerce platforms

---

Built with ❤️ using Next.js 14 and modern web technologies.
