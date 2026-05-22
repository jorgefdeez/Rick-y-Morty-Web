'use client'
import { CharacterS } from "@/app/types/type"
import {useRouter} from "next/navigation"

const CharacterComponente =({personaje}:{personaje: CharacterS}) =>{
    const router = useRouter()

    return(
        <div className="characterComponent">
            <h1>{personaje.name}</h1>
            <p className="personaje">{personaje.status}</p>
            <p className="personaje">{personaje.species}</p>
            <img src={personaje.image} alt={personaje.name}></img>
             <button
                className="boton"
                onClick={() => {
                    router.push(`/character/${personaje.id}`);
                }}>
              detalle
            </button>
        </div>
    )
}

export default CharacterComponente;