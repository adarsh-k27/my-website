import { useState } from 'react';
import {SideBar} from './components'
import {LandingPage} from './pages'
import {AnimatePresence} from 'framer-motion'
import {} from 'framer-motion'
function App() {
  const [openNavSmallDevice, setOpen] = useState(false)
  return (
    <AnimatePresence >
    <div className='App'>
      <div className='w-screen h-screen dark:bg-darkBgColor bg-lightBgColor'>
        <div div className = 'w-full h-full grid grid-cols-[20%,80%] gap-2' >
          {/* Sidebar */}
          <SideBar open={openNavSmallDevice} setOpen={setOpen}/>
          <LandingPage open={openNavSmallDevice} setOpen={setOpen} />
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
}

export default App;
