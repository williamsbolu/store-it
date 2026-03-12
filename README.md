# StoreIt - Storage Management System

StoreIt is a comprehensive file storage and management application built with **Next.js 15**, **Appwrite**, and **Tailwind CSS**. It provides users with a modern interface to upload, organize, and share documents, images, and media files efficiently.

![StoreIt](/public/readme-featured-image.png)

## 🚀 Overview

StoreIt is designed to simplify how users store and manage their digital assets. With a focus on speed and ease of use, it features a dashboard for usage visualization, categorized file views, and seamless file operations.

### Key Features
- **Modern Dashboard**: Visualize storage usage by category (Documents, Images, Media, Others).
- **File Management**: Upload, rename, download, share, and delete files.
- **Categorization**: Automatically categorize files based on their extensions.
- **50MB File Limit**: Support for large file uploads up to 50MB.
- **Responsive Design**: Built with Tailwind CSS and Shadcn UI for a seamless experience across all devices.
- **Authentication**: Secure user login and registration powered by Appwrite.
- **OTP Verification**: Enhanced security for user registration.
- **Sorting & Search**: Quickly find and organize files by name, date, or size.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Backend-as-a-Service**: [Appwrite](https://appwrite.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Forms**: React Hook Form & Zod
- **Icons**: Lucide React

---

## 📋 Requirements

- **Node.js**: v20.x or higher
- **Package Manager**: npm (recommended), yarn, pnpm, or bun
- **Appwrite Project**: An active Appwrite project with database, storage buckets, and collections set up.

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd store-it
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # Appwrite Configuration
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR_PROJECT_ID>
   NEXT_PUBLIC_APPWRITE_DATABASE=<YOUR_DATABASE_ID>
   NEXT_PUBLIC_APPWRITE_USERS_COLLECTION=<YOUR_USERS_COLLECTION_ID>
   NEXT_PUBLIC_APPWRITE_FILES_COLLECTION=<YOUR_FILES_COLLECTION_ID>
   NEXT_PUBLIC_APPWRITE_BUCKET=<YOUR_BUCKET_ID>
   NEXT_APPWRITE_KEY=<YOUR_SECRET_API_KEY>
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Runs the built application in production mode.
- `npm run lint`: Runs ESLint to identify and fix code quality issues.

---

## 📁 Project Structure

```text
store-it/
├── app/                  # Next.js App Router (pages & layouts)
│   ├── (auth)/           # Authentication routes (Sign-in, Sign-up)
│   ├── (root)/           # Main application routes
│   │   └── [type]/       # Dynamic routes for file types
│   └── globals.css       # Global styles
├── components/           # React components
│   └── ui/               # Shadcn UI base components
├── constants/            # Configuration and constant values
├── lib/                  # Business logic and utilities
│   ├── actions/          # Server actions for Appwrite
│   └── appwrite/         # Appwrite SDK configuration
├── public/               # Static assets (icons, images)
├── types/                # TypeScript definitions
├── components.json       # Shadcn UI configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

