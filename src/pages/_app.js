import Dashboard from "@/layouts/Dashboard/Dashboard";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Dashboard/> 
    <Component {...pageProps} />;
    </>

  )
}
