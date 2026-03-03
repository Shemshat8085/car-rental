import type { CarsResponse } from "../types"

export const fetchCars = async (make:string, model: string, year: string, page: string): Promise<CarsResponse> => {
    let url: string = `${import.meta.env.VITE_API_URL}/explore/v2.1/catalog/datasets/all-vehicles-model/records?`

    if(make){
        url += `refine=make:"${make}"`
    }

    if(model){
        url += `&refine=model:"${model}"`
    }

    if(year){
        url += `&refine=year:"${year}"`
    }

    const limit = 12
    const offset = limit * (Number(page)-1)

    url += `&limit=${limit}`
    url += `&offset=${offset}`

    const res= await fetch(url)

    const data = await res.json()

    return data
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     