# MyPizza 🍕 | Full-Stack Pizza Ordering App

![Banner](./public/pizza.png)

## Overview
Welcome to MyPizza — a full-featured pizza ordering platform designed to streamline the user experience from browsing to checkout. Built with a modern tech stack, this project showcases cutting-edge web development tools and technologies while solving real-world challenges such as user authentication, item filtering, and seamless payment processing.

## Features
- 🔒 **User Authentication**: Sign up or log in using Google or GitHub authentication through NextAuth.
- 🛒 **Shopping Cart**: Add and customize pizza variations (size, ingredients) and proceed to checkout.
- 🔍 **Product Filtering & Search**: Easily search and filter pizzas based on ingredients and size.
- 🌍 **Google Maps API**: Allows users to pick their delivery location directly from a cities list.
- 💳 **Payment Integration**: Integrated with Stripe API for secure payment processing.
- 📧 **Email Notifications**: Order status notifications sent via Resend.
- 💾 **Data Storage**: All data is stored securely in PostgreSQL using Prisma ORM.

## Tech Stack

### Frontend:
- Next.js (Parallel Routes, Group Routes, Server Actions, API)
- TypeScript
- TailwindCSS + ShadCN

### Backend:
- Prisma + PostgreSQL
- NextAuth for authentication
- Stripe API for payment processing
- Resend for email notifications

### Libraries & Utilities:
- React Hook Form + Zod for form handling and validation
- Zustand for state management
- react-use for hooks
- nextjs-toploader for loading indicators
- react-hot-toast for notifications
- react-insta-stories for story-based UI
- lucide-react for icons

## Demo

See MyPizza in action!

## Installation & Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/mypizza.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables: Create a `.env` file at the root of the project with the following variables:
    ```bash
    POSTGRES_URL - URL for connecting to the PostgreSQL database.
    POSTGRES_URL_NON_POOLING - URL for connecting to the PostgreSQL database without pooling.
    NEXT_PUBLIC_API_URL - Base URL for the API.
    NEXT_PUBLIC_BASE_URL - Base URL for the frontend.
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY - API key for Google Maps.
    EMAIL_API_KEY - API key for the email sending service.
    STRIPE_SECRET_KEY - Secret key for Stripe.
    STRIPE_WEBHOOK_SECRET - Secret key for Stripe webhooks.
    GITHUB_ID - ID for GitHub OAuth.
    GITHUB_SECRET - Secret key for GitHub OAuth.
    GOOGLE_ID - ID for Google OAuth.
    GOOGLE_SECRET - Secret key for Google OAuth.
    NEXTAUTH_SECRET - Secret key for NextAuth.
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Access the app at [http://localhost:3000](http://localhost:3000).

