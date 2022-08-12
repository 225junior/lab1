import React from "react"
import { ChildFunc } from "./chanel"
import { Enfant } from "./enfant"

export const Parent = () => {

    const func: ChildFunc = {
       
    }


    const Incrementer = () => {
        func.exec && func.exec()
        console.log("chargement du parent");
    }
    return (
        <div>
            <button className="btn btn-outline-warning me-2" onClick={Incrementer}>Incrementer chez l'enfant</button>
            <Enfant nom={"Dagobert"} prenoms={"Fulbert Lambertin"} func={func} />
        </div>
    )
}
