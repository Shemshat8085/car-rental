import { useEffect, useRef, useState, type FC } from "react"
import { fetchCars } from "../../../utils/service"
import type { Car } from "../../../types"
import Card from "./card"
import Warning from "./warning"
import Loader from "../../../components/loader"
import { useSearchParams } from "react-router-dom"
import ReactPaginate from 'react-paginate';


const List:FC = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState<Car[] | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [totalCount, setTotalCount] = useState<number | null>(null)
    const firstCard = useRef<HTMLDivElement>(null)
    

    //url deki arama parametreleri
    const make = searchParams.get("make") || ""
    const model = searchParams.get("model") || ""
    const year = searchParams.get("year") || ""
    const page =  searchParams.get("page") || "1"

    useEffect(()=>{
        setLoading(true)

        fetchCars(make,model,year,page).then((data)=>{
            setTotalCount(data.total_count)
            setCars(data.results)})
        .catch((err) => setError(err.message))
        .finally(()=> setLoading(false))
    },[make,model,year,page])

    if (loading) return <Warning><Loader/></Warning>
    if (error) return <Warning>Error: {error}</Warning>
    if (!cars || cars.length<1) return <Warning>No cars found</Warning>

  return (
    <div className="padding-x max-width">
        <section ref={firstCard}className="home-cars-wrapper">
            
            {cars.map((car)=><Card key={car.id} car={car}/>)}
        </section>

        {totalCount && 
            <ReactPaginate
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(e)=>{
                searchParams.set("page", String(e.selected + 1))
                setSearchParams(searchParams)
                if (firstCard.current && page !== "1"){
                    firstCard.current?.scrollIntoView({behavior: "smooth"})
                }
            }}
            pageRangeDisplayed={10}
            pageCount={Math.ceil(totalCount/10)}
            previousLabel="< "
            renderOnZeroPageCount={null}
            className="pagination"
            initialPage={Number(page) - 1}
            />
      }
      
    </div>
  )
}

export default List
