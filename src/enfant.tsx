import React from "react"

type Props = {
    nom: string,
    prenoms?:string
}
export const Enfant = (entant : Props) => {
    const [counter, setCounter] = React.useState(0)

    
    console.log("chargement du parent");
    return (
        <div>
            <button className="btn btn-outline-warning me-2" onClick={()=>setCounter(prev => prev + 1)}>Incrementer</button>
            je suis l'enfant {entant.nom} {entant.prenoms} et j'ai {counter} ans
        </div>
    )
} 