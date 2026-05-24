'use client'
import{Location} from "@/app/types/type"
import{useRouter} from "next/navigation"
import "./location.css"

const LocationComponent=({localizacion}:{localizacion: Location})=>{
    const router = useRouter()
    return(
        <div className="LocalizacionContainer">
            <h1>{localizacion.name}</h1>
            <p>{localizacion.type}</p>
            <button
                className="boton"
                onClick={()=>{
                    router.push(`/location/${localizacion.id}`)
                }}
            >
                detalle
            </button>
        </div>
        
    )
}
export default LocationComponent