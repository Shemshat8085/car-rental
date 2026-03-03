import { useMemo, useState, type FC } from "react"
import ReactSelect from "react-select"
import { selectStyles, makes } from "../../../utils/constants"
import { useSearchParams } from "react-router-dom"



const SearchBar:FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [make, setMake] = useState<string | null>(searchParams.get("make") || null);
  const [model, setModel] = useState<string | null>(searchParams.get("model") || null);


  //markalar dizisini react-select'in istedigi formata chevir
  //useMemo ile yapiyoruz chunku diziyi her render oldugunda yeniden olushturmasini onluyoruz
  const options =useMemo(()=>(makes.map((make)=>({value: make, label: make}))),[]) 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
      
    if(make){
      searchParams.set("make", make)
    } else {
      searchParams.delete("make")
    }

    if(model) {
      searchParams.set("model", model)
    }else{
      searchParams.delete("model")
    }

    setSearchParams(searchParams)
  }

  return (
    <form onSubmit={handleSubmit} className="searchbar flex gap-4 items-end justify-center">
{/* Marka */}
      <div className="searchbar-item items-end">
          <div className="w-full flex flex-col">
            <label className="text-white font-semibold mb-2 text-sm">Marka</label>
            <ReactSelect
            value={make ? {value: make, label:make} : null}
              options={options}
              placeholder="Marka Seçiniz"
              isSearchable={true}
              className="w-full min-w-50 z-11"
              styles={selectStyles}
              onChange={(option)=>setMake(option?.value as string)}
            />
          </div>

          <button className="ml-4 p-2 glass-effect rounded-2xl hover:bg-white/200 transition-all duration-300 hover:scale-105">
            <img src="/search.svg" alt="search" className="size-6"/>
          </button>
      </div>

{/* Model */}
      <div className="searchbar-item items-start flex flex-col">
          <label className="text-white font-semibold mb-2 text-sm">Model</label>

          <div className="w-full flex items-center">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
                <img src="/model-icon.png" alt="" className="size-6"/>
              </div>

              <input 
                value={model || ""}
                type="text"
                className="searchbar-input w-full"
                placeholder="Model Yazınız.."
                onChange={(e)=>setModel(e.target.value)} />
            </div>
          
            <button className="ml-4 p-2 glass-effect rounded-2xl hover:bg-white/200 transition-all duration-300 hover:scale-105">
            <img src="/search.svg" alt="search" className="size-6"/>
          </button>   
        </div>
      </div>
    </form>
  )
}

export default SearchBar
