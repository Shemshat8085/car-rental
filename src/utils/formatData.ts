import type { Car } from "../types"

const formatData = (data: Car):[string, string | number | null][] =>{
    //car nesnesinin ichinden sadece istedigimiz degerleri belirliyoruz 
    const accepted = [
        "make",
        "model",
        "cylinders",
        "drive",
        "fueltype",
        "trany",
        "vclass",
        "year",
        "tcharger",
        "startstop",
        "co2",
        "displ",
        "atvtype",
    ]

    //api dan gelen car bilgisi nesne onu bir diziye chevirerek sadce yukardaki bilgileri aliyoruz
    const arr = Object.entries(data).filter((i)=>accepted.includes(i[0]))

    //diziyi dondur
    return arr
}

export default formatData