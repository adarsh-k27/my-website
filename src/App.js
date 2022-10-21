import { useState, useContext } from "react";
import { ColorPicker, MoodChanger, PageDecider, SideBar } from "./components";
import { LandingPage,AboutPage, ServicePage, ContactPage } from "./pages";
import { AnimatePresence } from "framer-motion";
import Portfolio_Context from "./context";

function App() {
  const [openNavSmallDevice, setOpen] = useState(false);
  const { mode, color_change, setMode } = useContext(Portfolio_Context);
  const [show,setShow]=useState(false)
  return (
    <AnimatePresence>
      < div className = {
        `App ${mode}`
      } >
        {/* color picker and theme color change buttons  */}
        <div className='relative flex flex-col gap-3'>
          <div div className = {
            `absolute top-3 z-50 ${show ? "-right-[6rem]":"-right-[9rem]"}`
          } >
            <ColorPicker setShow={setShow} show={show} />
          </div>
          < div className="absolute z-50 top-14 right-[3.5rem]" >
            <MoodChanger setMode={setMode} mode={mode} />{" "}
          </div>
        </div>
        {/* end Color Change Button */}

        {/* start Whole Web Section Here */}
        < div className = 'w-screen h:screen md:h-screen grid grid-cols-[20%,80%] gap-2 dark:bg-darkBgColor bg-lightBgColor' >
          <SideBar open={openNavSmallDevice} setOpen={setOpen} />{" "}
          <PageDecider open={openNavSmallDevice} setOpen={setOpen} />
        </div>
        {/* End Whole Web Section Here */}
      </div>
    </AnimatePresence>
  );
}

export default App;
