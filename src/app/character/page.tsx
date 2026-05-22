'use client'
import { useEffect, useState } from "react"
import { ResultsCharacter } from "../types/type"
import api from "@/api/axios"
import Paginador from "../components/Paginador"
import CharacterComponente from "../components/Character"
import "../components/Character/style.css"

const CharacterPage = () => {
    const [characteresss, setCharacter] = useState<ResultsCharacter>()
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)

    const getCharacter = async () => {
        try{
            await api.get(`/character?page=${page}`).then((e)=>{
                setCharacter(e.data)
            }).finally(()=>{
                
                setLoading(false)
            })

            } catch (e) {
                throw new Error(String(e))
            }
        }

    useEffect(() => {
        getCharacter()
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="characterContainer">
            {characteresss?.results.map((e) => (
                <CharacterComponente key={e.id} personaje={e} />
                
            ))}

            <Paginador
                next={!!characteresss?.info.next}
                prev={!!characteresss?.info.prev}
                page={page}
                setPage={(e) => {
                    setPage(e)
                }}
            />

            
        </div>
    )
}

export default CharacterPage