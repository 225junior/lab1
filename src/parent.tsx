import React from "react"
import { Enfant } from "./enfant"

export const Parent = () => {

    console.log("chargement du parent");

    const Incrementer = () => {
        Enfant.incrementer()
    }
    return (
        <div>
            <button className="btn btn-outline-warning me-2" onClick={Incrementer}>Incrementer chez le parent</button>
            <Enfant.component nom={"Dagobert"} prenoms={"Fulbert Lambertin"} />
        </div>
    )
}
