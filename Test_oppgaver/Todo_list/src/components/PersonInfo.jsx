import { useParams } from "react-router-dom"
import jsonListe from "./Section.json"
import Student from "./Student";

export default function PersonInfo(){

    const {name} = useParams()

    
    return(
        <>
        
            <h1>{name}</h1>
            {/* <h1>{age}</h1> */}

        </>
    )
}