import React from "react"
import { ChildFunc } from "./chanel"

type Props = {
    nom: string,
    prenoms?:string
}

const func: ChildFunc = {
       
}

const EnfantComponent = (entant : Props) => {
    const [counter, setCounter] = React.useState(0)
    

    const Incrementer = () => {
        setCounter(prev => prev + 1)
    }

    func.exec = Incrementer
    
    console.log("chargement de enfant");
    return (
        <div>
            je suis l'enfant {entant.nom} {entant.prenoms} et j'ai {counter} ans
        </div>
    )
}

export const Enfant = {
    component: EnfantComponent,
    incrementer() {func.exec && func.exec()}
}