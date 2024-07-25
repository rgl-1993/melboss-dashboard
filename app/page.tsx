import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link href="/dashboard">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-red-500 to-yellow-500">
          Melboss Dashboard
        </h1>
      </Link>
    </div>
  );
}
