"use client";
import api from "@/api/axios";
import type { CharacterS } from "@/app/types/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Paginador from "@/app/components/Paginador"
import "./detalle.css"

const getPersonajeById=()=>{

    const{id} = useParams()
    const[personaje, setCharacter] = useState<CharacterS | null>(null)


    const router = useRouter()

    useEffect(()=>{
        api.get(`/character/${id}`).then((e) =>{
            setCharacter(e.data)
        })
    }, [])

    return(
        <div className = "containterDetalle">
            <h1>{personaje?.name}</h1>
            <img src ={personaje?.image} alt ={personaje?.name}></img>
            <p>Id: {personaje?.id}</p>
            <p>Genero: {personaje?.gender}</p>
            <p>Especie: {personaje?.species}</p>
            <p>Estado: {personaje?.status}</p>

            <p>Episodes: </p>
            {personaje?.episode.map((e)=>{
                return(
                    <p key={e} className="link">{e}</p>
                )
            })}

            <button
                className="botonVolver"
                onClick ={()=>{
                    router.push(`/character`)
                }}>
                volver
            </button>

        </div>
    )
}

export default getPersonajeById;

