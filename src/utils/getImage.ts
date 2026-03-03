import type { Car } from "../types"

const getImage = (car: Car, angle?: string, surrounding?: boolean): string =>{
    const url = new URL("https://cdn.imagin.studio/getImage")

    url.searchParams.append("customer", "hrjavascript-mastery")
    url.searchParams.append("make", car.make)
    url.searchParams.append("modelFamily", car.model)
    url.searchParams.append("modelYear", car.year.toString())
    url.searchParams.append("zoomType", "fullscreen")
    url.searchParams.append("randomPaint", "true")
    url.searchParams.append("angle", angle || "23")
    if(surrounding){
        url.searchParams.append("surrounding", "sur33")
        url.searchParams.append("viewPoint", "3")
        url.searchParams.append("aspectRatio", "16:10")
        url.searchParams.append("overlayArea", "none")
    }
    

    // ?&customer=hrjavascript-mastery&make=bmw&modelFamily=x6&modelRange=x6&modelVariant=od&modelYear=2024&powerTrain=hybrid&transmission=0&bodySize=5&trim=eu&paintId=pspc0007&angle=23&zoomtype=fullscreen&position=bottom

    return url.href
}

export default getImage