import { motion, AnimatePresence } from "motion/react"
import type { FC } from "react"
import Images from "./images"
import Info from "./info"
import type { Car } from "../../types"



 interface Props{
    isOpen: boolean
    close: ()=>void
    car: Car
}

const Modal:FC<Props> = ({isOpen, close, car}) => {
  return (
    <AnimatePresence>
    {isOpen && 
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md grid place-items-center z-50 p-4">
      <motion.div
      initial={{
        opacity: 0,
        scale: 0.1,
        y:50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y:0,
      }}
      transition={{
        duration: 0.1,
      }}
      exit={{
        scale: 0.1,
        opacity: 1, 
        y:0,
      }}
      className="car-details-dialog-panel w-[95%] sm:min-w-150 min-h-[70vh]">
        <button onClick={close} className="car-details-close-btn cursor-pointer">X</button>

        <Images car={car}/>
        <Info car={car}/>
      </motion.div>

      
      
    </div>}
    </AnimatePresence>
  )
}

export default Modal
