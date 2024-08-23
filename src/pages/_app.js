import ReactQueryProv from "@/provider/ReactQueryProv";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {

 
  return (
    <>
         <ReactQueryProv>
            <Component {...pageProps} />
         </ReactQueryProv>
    </>

  )
}
