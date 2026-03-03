import type { FC } from "react"
import Button from "../../../components/button"
import { motion } from "motion/react"


const Hero:FC = () => {
  return (
    <div className="hero padding-x padding-y">
      <div className="pt-20 flex-1 max-h-230">
        <motion.h1 
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}} 
        transition={{duration:0.8}}
        className="hero-title">
            Özgürlügü Hisset, Yolculuga Başla
        </motion.h1>

        <motion.p 
        initial={{opacity:0, y:30}}
        animate={{opacity:1, y:0}} 
        transition={{duration:0.8, delay:0.2}}
        className="hero-subtitle">
            Altın standartta hizmetle unutulmaz bir yolculuga hazır mısın? Araç kiralama deneyimini Altın Seçenekleri ile taçlandırarak her anını özel kılabilirsin.

        </motion.p>

        <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}} 
        transition={{duration:0.8, delay:0.4}}>
            <Button text="Arabaları Keşfet" designs="mt-12"/>
        </motion.div>
      </div>

      <div className="flex justify-center items-center">
        <motion.div 
            initial={{translateX: 200, scale: 0.7, opacity:0}}
            animate={{translateX: 0, scale: 1, opacity:1}}
            transition={{duration:0.8, delay: 0.4}}
            className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary-blue/30 to-accent/30 rounded-full blur-3xl -z-10 "/>
                <img src="/hero.png" className="object-contain xl:w-[600px] xl:h-[477.5px] drop-shadow-2xl" />
        </motion.div>
    </div>  
      
    </div>
  )
}

export default Hero
