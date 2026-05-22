'use client'

import { useEffect, useState } from "react"
import {ResultsEpisodes} from "@/app/types/type"
import api from  "@/api/axios"
import EpisodeComponente from "../components/Episode"
import Paginador from "../components/Paginador"
import { useRouter } from "next/navigation";
import "../components/Episode/styles.css"

const EpisodePage=()=>{
    const[episodeData, setEpisode] = useState<ResultsEpisodes|null>(null)
    const[page, setPage] = useState(1)
    const[loading, setLoading] = useState<boolean>(true)
   
    const router = useRouter()

    const getEpisode = async() =>{
        try{
            await api.get(`/episode?page=${page}`).then((e)=>{
                setEpisode(e.data)
            }).finally(()=>{
                setLoading(false)
            })

        }catch(e){
            throw new Error(String(e))
        }
    }
    useEffect(()=>{
        getEpisode()
    },[page])


    return(
        <div className ="EpisodiosContainer">
            {loading && <p>loading...</p>}

            {episodeData?.results.map((e)=>{
                return(
                    <EpisodeComponente key={e.id} epi={e}></EpisodeComponente>
                )
            })}

            <Paginador
                next={!!episodeData?.info.next}
                prev={!!episodeData?.info.prev}
                page={page}
                setPage={(e) => {
                    setPage(e)
                }}
            />

        </div>
    )
}

export default EpisodePage