import type { FC } from "react"
import formatData from "../../utils/formatData"
import type { Car } from "../../types"

interface Props{
    car: Car
}

const Info:FC<Props> = ({car}) => {
   
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-gradient mb-4"> 
        {car.make} {car.model}
      </h3>

      {formatData(car).map(([key, value])=>(
        <div className="flex justify-between items-center py-3 px-4 glass-dark rounded-xl border border-white/10">
            <span className="capitalize text-grey-light font-medium">{key}</span>
            <span className="font-semibold capitalize text-white">{value === "Y" || value === "T" ? "Var" : value === "N" ? "Yok" : value || "-"}</span>
        </div>
      ))}
    </div>
  )
}

export default Info
