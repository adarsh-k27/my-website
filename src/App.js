import { useState, useContext } from "react";
import { ColorPicker, MoodChanger, PageDecider, SideBar } from "./components";
import { AnimatePresence } from "framer-motion";
import Portfolio_Context from "./context";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  const [openNavSmallDevice, setOpen] = useState(false);
  const { mode, color_change, setMode,setNavigation } = useContext(Portfolio_Context);
  const [show,setShow]=useState(false)
  const [selectTag,setSelect]=useState("Home")
  return (
    <AnimatePresence>
      < div className = {
        `App ${mode}`
      } 
      onClick={()=>{
        
        if(openNavSmallDevice){
          
          setOpen(false)
        }
      }}
      >
        {/* Menu section small device setUp */}
        <div className="bg-lightBgColor dark:bg-darkBgColor fixed flex justify-between w-screen z-50 h-6 top-2">
          < AiOutlineMenu
          className = 'text-gray-400 text-3xl'
          onClick = {
            () => {
              setOpen(true)
            }
          }
          />
          <p className='text-2xl font-[Dancing Script] font-extralight dark:text-white/50 text-black/50  w-auto ml-[.8rem] cursor-pointer' onClick={(e)=>{
            e.preventDefault()
            setNavigation('Home')
            setSelect('Home')
          }}>
          <span
            className={`text-${color_change} font-thin text-2xl font-[Oswald]`}
          >
            A
          </span>
          darsh
        </p>
        </div>
        {/* end small devce NavBar */}
        {/* color picker and theme color change buttons  */}
        <div className='relative flex flex-col'>
          <div div className = {
            `absolute top-14 md:top-10 z-50 ${show ? "-right-[6.3rem]":"-right-[11rem]"}`
          } >
            <ColorPicker setShow={setShow} show={show} />
          </div>
          < div className="absolute z-50 top-[5.9rem] md:top-[4.6rem] right-[1.3rem]" >
            <MoodChanger setMode={setMode} mode={mode} setSelect={setSelect} />{" "}
          </div>
        </div>
        {/* end Color Change Button */}

        {/* start Whole Web Section Here */}
        < div className = 'w-screen h:screen md:h-screen grid grid-cols-[20%,80%] gap-2 dark:bg-darkBgColor bg-lightBgColor' >
          <SideBar open={openNavSmallDevice} setOpen={setOpen} setSelect={setSelect} selectTag={selectTag} />{" "}
          <PageDecider open={openNavSmallDevice} setOpen={setOpen} setSelect={setSelect}/>
        </div>
        {/* End Whole Web Section Here */}
      </div>
    </AnimatePresence>
  );
}

export default App;
