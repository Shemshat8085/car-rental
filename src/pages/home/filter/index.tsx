import type { FC } from "react"
import SearchBar from "./searchbar"
import Year from "./year"


const Filter:FC = () => {
  return (
    <div className="mt-20 padding-x padding-y max-width">
      <div className="home-text-container">
        <h1 className="text-5xl font-bold text-gradient mb-2 pb-2">Araba Katalogu</h1>
        <p className="text-xl text-grey-light">Begenebilecegin arabaları keşfet</p>
      </div>

      <div className="home-filters">
        <SearchBar/>
        <div className="home-filter-container">
            <Year/>
        </div>
      </div>
    </div>
  )
}

export default Filter
