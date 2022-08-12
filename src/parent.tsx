import React from "react"
import { Enfant } from "./enfant"

export const Parent = () => {
    const [counter, setCounter] = React.useState(0)

    const Incrementer = () => {
        setCounter(prev => prev + 1)
        console.log("chargement du parent");
    }
    return (
        <div>
            <button className="btn btn-outline-light me-5" onClick={Incrementer}>Incrementer</button>
            je suis le parent jai {counter} ans
            <Enfant />
        </div>
    )
}
