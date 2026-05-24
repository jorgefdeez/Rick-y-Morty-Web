'use client'

import{ResultsLocations} from "@/app/types/type"
import { useEffect, useState } from "react"
import api from "@/api/axios"
import LocationComponent from "@/app/components/Location/page"
import Paginador from "../components/Paginador"

const LocationPagee = ()=>{

    const [LocationData, setLocationData] = useState<ResultsLocations>()
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)

    const getLocation =async()=>{
        try{
            await api.get(`/location?page=${page}`).then((e)=>{
                setLocationData(e.data)
            }).finally(()=>{
                setLoading(false)
            })
        }catch(e){
            throw new Error(String(e))
        }

    }

    useEffect(()=>{
        getLocation()
    },[page])

    if(loading){
        return <h1>loading...</h1>
    }

    return(
        <div>
            {LocationData?.results.map((e)=>(
                <LocationComponent key={e.id} localizacion={e}/>
            ))}
            <Paginador
                next={!!LocationData?.info.next}
                prev={!!LocationData?.info.prev}
                page={page}
                setPage={((e)=>{
                    setPage(e)
                })}
            />
            

        </div>
    )
}


export default LocationPagee