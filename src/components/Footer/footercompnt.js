import React from 'react'
import Footer from '../UI/footer'
import Data from './components/data'
import Links from './components/Links'
import Tools from './components/Tools'
import Connect from './components/Connect'

export default function Footercompnt() {
  return (
    <div className="mt-2">
        <Footer>
            <div className="mt-8 flex justify-evenly">
              <Data />
               <Links />
                <Tools />
                <Connect />
            </div>
        </Footer>
        <div className="border border-slate-400 w-full"></div>
    </div>
  )
}
