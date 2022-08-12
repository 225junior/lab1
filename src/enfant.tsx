type Props = {
    nom: string,
    prenoms?:string
}
export const Enfant = (entant : Props) => {
    console.log("chargement du parent");
    return (
        <div>
            je suis l'enfant {entant.nom} {entant.prenoms}
        </div>
    )
} 