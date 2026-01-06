# Marhaba Haji - Umrah & Hajj Packages

A modern travel platform for booking Umrah and Hajj pilgrimage packages, built with **Next.js 15**, **React 19**, and **Tailwind CSS**.

## Features

- 🕌 **Umrah Packages** - Group, Independent, and Build Your Own options
- 🕋 **Hajj Packages** - Comprehensive Hajj travel services
- 🏨 **Hotel Booking** - Premium accommodations near Masjid al-Haram
- ✈️ **Visa Services** - Fast, secure visa processing with 99% approval rate
- 📱 **Responsive Design** - Mobile-first, works on all devices

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/supercx.git
   cd supercx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
supercx/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page (Umrah packages)
│   ├── hajj/page.tsx      # Hajj packages page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── PackageSelection.tsx
│   └── ...
├── constants.ts           # Data and configuration
├── types.ts              # TypeScript interfaces
├── tailwind.config.ts    # Tailwind configuration
└── vercel.json           # Vercel deployment config
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Build

```bash
npm run build
npm start
```

## License

MIT License - feel free to use this project for your own purposes.

---

**Powered by SuperCX Technologies**
