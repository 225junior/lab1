import React from "react"

type Props = {
    nom: string,
    prenoms?:string,
    updateParent: ()=>void
}
export const Enfant = (entant : Props) => {
    const [counter, setCounter] = React.useState(0)

    const Incrementer = () => {
        entant.updateParent()
    }
    
    console.log("chargement de enfant");
    return (
        <div>
            <button className="btn btn-outline-warning me-2" onClick={Incrementer}>Incrementer</button>
            je suis l'enfant {entant.nom} {entant.prenoms} et j'ai {counter} ans
        </div>
    )
} 