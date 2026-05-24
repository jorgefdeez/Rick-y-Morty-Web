import Link from "next/link"

import "./style.css"

const Navigator=()=>{
    type Rutas={
        name:string,
        rutas:string 
    }

    const rutas:Rutas[]=[ 
        {
            name: "home",
            rutas: "/"
        },
        {
            name : "character",
            rutas: "/character"
        },
        {
            name : "episode",
            rutas: "/episode"
        },
        {
            name: "location",
            rutas: "/location"
        },
        {
            name : "favoritos",
            rutas: "/favoritos"
        }
    ]
    
    return(

        <div className="containerNavigator">
            {rutas.map((e) =>(
                
                    <Link className = "botones" key={e.rutas} href={e.rutas}>
                            {e.name}
                    </Link>

            ))}
        </div>
    )
}

export default Navigator