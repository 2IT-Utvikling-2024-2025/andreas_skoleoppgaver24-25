import Student from "./Student";
import { useState } from "react";
import jsonListe from "./Section.json"


export default function Section(){


    return(
        <>
        
        <div className="Section-parent">
            {Object.entries(jsonListe).map(([sectionName, sectionItems]) => (
                <div key={sectionName} className="Section">
                    {sectionItems.map((item) => (
                    <Student key = {item.id} name={item.name} age={item.age}/>
                    ))}
                </div>
            ))}
        </div>
        
        

        </>
    )
}










//dette fungerer, men skal prøve å gjøre det bedre

/* export default function Section(){

    const [classList1,setClassList1] = useState([
        {id: 1, name: "Wonjoong", age: 18},
        {id: 2, name: "Marcus", age: 17},
    ])
    const [classList2,setClassList2] = useState([
        {id: 1, name: "Jørgen", age: 19},
        {id: 2, name: "Felix", age: 16},
        {id: 3, name: "Noah", age: 17},
    ])
    const [classList3,setClassList3] = useState([
        {id: 1, name: "Svein", age: 17},
        {id: 2, name: "Theo", age: 17},
    ])
    const [classList4,setClassList4] = useState([
        {id: 1, name: "Kevin", age: 18},
        {id: 2, name: "Andreas", age: 17},
        {id: 3, name: "Nahuel", age: 20},
    ])
    const [classList5,setClassList5] = useState([
        {id: 1, name: "Odin", age: 16},
        {id: 2, name: "Håkon", age: 17},
    ])
    const [classList6,setClassList6] = useState([
        {id: 1, name: "Filip", age: 17},
        {id: 2, name: "Luz", age: 20},
        {id: 3, name: "Frithjof", age: 20},
    ])

    return(
        <div>
            <div className="Section-parent">
                <div className="Section">
                {classList1.map(student => (
                    <Student key={student.id} name={student.name} age={student.age} />
                ))}
                </div>
                <div className="Section">
                    {classList2.map(student => (
                        <Student key={student.id} name={student.name} age={student.age} />
                    ))}
                </div>
            </div>

            <div className="Section-parent">
                <div className="Section">
                    {classList3.map(student => (
                        <Student key={student.id} name={student.name} age={student.age} />
                    ))}
                </div>
                <div className="Section">
                    {classList4.map(student => (
                        <Student key={student.id} name={student.name} age={student.age} />
                    ))}
                </div>
            </div>
            <div className="Section-parent">
                <div className="Section">
                    {classList5.map(student => (
                        <Student key={student.id} name={student.name} age={student.age} />
                    ))}
                </div>
                <div className="Section">
                    {classList6.map(student => (
                        <Student key={student.id} name={student.name} age={student.age} />
                    ))}
                </div>
            </div>
        </div>
    )
} */