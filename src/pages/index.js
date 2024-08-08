
import { Inter } from "next/font/google";
import Dashboard from "@/layouts/Dashboard/Dashboard";
import Mainbar from "@/layouts/Mainbar/Mainbar";
import Footercompnt from "@/components/Footer/footercompnt";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className="">
          <Dashboard />
          <Mainbar />
          <Footercompnt />
      </div>
  );
}
