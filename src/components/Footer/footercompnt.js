import React from 'react'
import Footer from '../UI/footer'
import Data from './components/data'
import Links from './components/Links'
import Tools from './components/Tools'
import Connect from './components/Connect'

export default function Footercompnt() {
  return (
    <div className="mt-2 mb-4">
        <Footer>
            <div className="mt-8 flex justify-evenly">
              <Data />
               <Links />
                <Tools />
                <Connect />
            </div>
        </Footer>
        <div className="mx-auto mt-8 w-1/2">
        <div className="border border-slate-300 w-full"></div>
        <span className="mt-2 flex justify-center text-[15px] text-slate-400">© 2024 Rafsume</span>
        </div>
    </div>
  )
}
