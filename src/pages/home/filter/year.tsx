import { useState, type FC } from "react"
import { useSearchParams } from "react-router-dom"
import type { FormEvent } from "react"


const Year:FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [year, setYear] = useState<string | null>(searchParams.get("year") || null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(year){
      searchParams.set("year", year)
    }else {
      searchParams.delete("year")
    }

    setSearchParams(searchParams)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label className="text-white font-semibold mb-2 text-sm" >Yıl</label>

      <div className="flex items-center">
        <input 
        type="number" 
        name="year" className="w-32 h-13 px-4 glass-effect rounded-l-2xl border border-white/20 text-white placeholder-grey-light outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all duration-300" 
        placeholder="örn: 2025"
        onChange={(e)=>setYear(e.target.value)}
        value={year || ""}
        />

        <button type="submit" className="h-13 px-4 glass-effect rounded-r-2xl border border-white/20 text-white placeholder-grey-light outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all duration-300 cursor-pointer hover:bg-primary-blue/20 hover:scale-101" >
          <img src="/search.svg" className="size-5" />
        </button>
      </div>
    </form>
  )
}

export default Year
