'use client'

import{Episode} from "@/app/types/type"

const EpisodeComponente = ({epi}:{epi:Episode}) =>{

    return(
        <div className="EpisodeContainer">
            <h1>{epi.name}</h1>
            <p>ID: {epi.id}</p>
            <p>Fecha: {epi.air_date}</p>
            <p>URL: {epi.url}</p>
            <h2>Personajes que aparecen: </h2>
            {epi?.characters.map((e)=>{
                return(
                    <p key ={e} className="caracteres">{e}</p>
                )
            })}
        </div>
       
    )
}

export default EpisodeComponente