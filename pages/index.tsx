import Image from "next/image";
import { Inter } from "next/font/google";
import FetchUsers from "@/components/fetchUsers";
import SignIn from "../components/signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <FetchUsers />
      </div>
    </main>
  );
}
