'use client'

import { Location } from "@/app/types/type"
import { useEffect, useState } from "react"
import api from "@/api/axios"
import { useParams } from "next/navigation";
import{useRouter} from "next/navigation"
import "@/app/components/Location/location.css"

const LocationDetalle =()=>{
    const [LocationData, setLocationData] = useState<Location | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const {id }= useParams()

    const router = useRouter()

    const getDetallitos= async()=>{
        try{
            api.get(`/location/${id}`).then((e)=>{
                setLocationData(e.data)

            }).finally(()=>{
                setLoading(false)
            })
        }catch(e){
            throw new Error(String(e))
        }
    }

    useEffect(()=>{
        getDetallitos()
    },[])

    if(loading){
        return <h1>loading...</h1>
    }

    return(
        <div className="LocationDetalleContainer">
            <h1>{LocationData?.name}</h1>
            <p>Tipo: {LocationData?.type}</p>
            <p>Dimension: {LocationData?.dimension}</p>
            <h2>Residentes</h2>
            {LocationData?.residents.map((e)=>{
                return(
                    <p key={e} className="residentesLink">{e}</p>
                )
            })}
            <p>Url: {LocationData?.url}</p>
            <p>Created: {LocationData?.created}</p>
            <button
                className="boton" 
                onClick={()=>{
                    router.push("/location")
                }}  
            >
                volver
            </button>
        </div>
    )
}
export default LocationDetalle