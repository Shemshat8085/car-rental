import  { type FC } from 'react'
import type { Car } from '../../../types'
import { motion } from 'motion/react'



interface Props{
    car: Car
}

const Info:FC<Props> = ({car}) => {
    
    const arr = [
        {
            icon: "/steering-wheel.svg",
            text: car?.trany || "Bilinmiyor",
        },
        {
            icon: "/tire.svg",
            text: car?.drive || "Bilinmiyor",
        },
        {
            icon: "/calendar.svg",
            text: car?.year || "Bilinmiyor",
        }
    ]

    const variants = {
        hidden: {opacity:0, y:50},
        visible: (index: number) => ({
            opacity:1,
            y:0,
            transition: {delay: index*0.3},
        })
    }


  return (
    <div className='flex justify-between items-start gap-4'>
      {
        arr.map((item, index)=>(
            <motion.div 
            custom={index}
            variants={variants}
            initial="hidden"
            key={index}
            whileInView="visible"
            className='flex-center flex-col'
            >
                <img src={item.icon} alt={item.text} width={25} height={25}/>
                <p >{item.text}</p>
            </motion.div>
            
        ))
      }
    </div>
  )
}

export default Info
