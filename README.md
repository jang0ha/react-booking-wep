# 🏨 Hotel Booking System

A modern hotel booking application built with React, allowing users to browse hotels, make bookings, and hotel owners to manage their properties.

## 🚀 Features

### For Guests

- **Browse Hotels** - Explore all available hotels and rooms with detailed information
- **Room Details** - View comprehensive room information, amenities, and pricing
- **Booking Management** - Track and manage your bookings
- **Authentication** - Secure login with Clerk authentication

### For Hotel Owners

- **Dashboard** - Overview of your hotel operations
- **Room Management** - Add, edit, and manage your hotel rooms
- **Listings** - View and organize your available rooms
- **Room Registration** - Register new rooms with detailed information

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2
- **Build Tool**: Vite 7.0
- **Routing**: React Router 7.13
- **Authentication**: Clerk 6.1
- **Styling**: TailwindCSS 4.2
- **Language**: JavaScript (ES Modules)
- **Linting**: ESLint 9.39

## 📁 Project Structure

```
client/
├── src/
│   ├── pages/
│   │   ├── Home.jsx                 # Landing page
│   │   ├── AllRooms.jsx            # Browse all rooms
│   │   ├── RoomDetail.jsx          # Room details and booking
│   │   ├── MyBookings.jsx          # User's bookings
│   │   └── hotelOwner/
│   │       ├── Layout.jsx          # Owner layout wrapper
│   │       ├── Dashboard.jsx       # Owner dashboard
│   │       ├── AddRoom.jsx         # Add new room
│   │       └── ListRoom.jsx        # Manage rooms
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Footer.jsx              # Footer
│   │   ├── HotelCards.jsx          # Hotel card component
│   │   ├── RoomList.jsx            # Room listing
│   │   ├── HotelReg.jsx            # Hotel registration
│   │   ├── Hero.jsx                # Hero section
│   │   ├── FeatureDestination.jsx  # Featured destinations
│   │   ├── ExclusiveOffers.jsx     # Offers section
│   │   ├── Newsletter.jsx          # Newsletter signup
│   │   ├── Testimonial.jsx         # Customer testimonials
│   │   └── HotelOwner/
│   │       ├── Navbar.jsx          # Owner navigation
│   │       └── Sidebar.jsx         # Owner sidebar menu
│   ├── assets/
│   │   └── assets.js               # Asset imports
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── vercel.json                     # Deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the client directory with required variables
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview
```

## 🔧 Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot module replacement |
| `npm run build`   | Create optimized production build                 |
| `npm run lint`    | Run ESLint to check code quality                  |
| `npm run preview` | Preview the production build locally              |

## 🔐 Authentication

The application uses **Clerk** for secure authentication. Users can:

- Sign up with email
- Login with existing credentials
- Access protected routes based on authentication status

## 🎨 Styling

TailwindCSS is configured for utility-first styling. The project uses the TailwindCSS Vite plugin for optimal performance.

## 📱 Key Routes

| Route              | Description           |
| ------------------ | --------------------- |
| `/`                | Home page             |
| `/rooms`           | All available rooms   |
| `/rooms/:id`       | Room details page     |
| `/my-bookings`     | User's bookings       |
| `/owner`           | Hotel owner dashboard |
| `/owner/add-room`  | Add new room          |
| `/owner/list-room` | Manage hotel rooms    |

## 🧹 Code Quality

The project uses ESLint for code quality:

```bash
npm run lint
```

## 🌐 Deployment

The project includes `vercel.json` configuration for easy deployment to Vercel.

## 📝 Notes

- The HotelReg component is currently disabled (see `App.jsx` line 19)
- Hotel owner routes are in a separate namespace (`/owner`)
- Navigation bar is hidden on owner routes to maintain separate UI

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is created for educational and development purposes.
