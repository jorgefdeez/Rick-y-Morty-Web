'use client'
import { Episode } from "@/app/types/type";
import { createContext, ReactNode, useContext, useEffect, useState} from "react";


type ListaContextTipao={
    episode:Episode[]
    addToList:(item: Episode)=>void
    deleteFromList:(id:number)=>void
}

const ListContext= createContext<ListaContextTipao|null>(null)

export const ListProvider=({children}:{children:ReactNode})=>{
    const[episode, setEpisode]=useState<Episode[]>([])

    const addToList=(item:Episode)=>{
        if(!episode.some((episode)=>episode.id === item.id)){
            setEpisode([...episode, item])
        }
    }

    const deleteFromList=(id: number)=>{
        setEpisode(episode.filter(c=>c.id!==id))
    }

    return(
        <ListContext.Provider value={{episode, addToList, deleteFromList}}>
            {children}
        </ListContext.Provider>
    )
}

export const useLista=()=>{
    const context = useContext(ListContext)
    if(!context){
        throw new Error(String("tsx out of provider"))
    }
    return context
}