function Parent() {
    return (<div></div>)
}

export const Parent2 = () =>{

}

export const Parent3 = ():JSX.Element => {
    return (<div></div>)    
}

export const Parent4: React.FC = () => {
    return (<div></div>)    
}

export default Parent

//mieux vaut utiliser export et non export default: question d'habitude
//on peut tout exporter object type ect...