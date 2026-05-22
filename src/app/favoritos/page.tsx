'use client'
import "./favorito.css"
import{useLista} from "@/context/Provider"
import Episode from "@/app/components/Episode"

const page =()=>{
    const {episode,deleteFromList}= useLista()

    return(
        <div className="containerFavoritos">
        {episode.map((e)=>(
            <div key ={e.id}>
                <Episode epi ={e}></Episode>
                    <button 
                        className="botonEliminar"
                        onClick={()=>
                            deleteFromList(e.id)
                        }>
                        Eliminar Favorito
                    </button>
            </div>
        ))}

        </div>
    )
}
export default page