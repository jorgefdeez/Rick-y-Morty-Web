'use client'

import{Episode} from "@/app/types/type"
import{useRouter} from "next/navigation"

const EpisodeComponente = ({epi}:{epi:Episode}) =>{

    return(
        <div className="EpisodeContainer">
            <p>Nombre: {epi.name}</p>
            <p>ID: {epi.id}</p>
            <p>Fecha: {epi.air_date}</p>
            <p>URL: {epi.url}</p>
            <p>Personajes que aparecen: </p>
            {epi?.characters.map((e)=>{
                return(
                    <p key ={e} className="caracteres">{e}</p>
                )
            })}
        </div>
       
    )
}

export default EpisodeComponente