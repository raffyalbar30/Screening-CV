import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="">
          <Navbar></Navbar>
      </div>
  );
}
