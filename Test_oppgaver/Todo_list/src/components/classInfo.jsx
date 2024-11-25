import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';

export default function ClassInfo(){


    const [Sclass, setSClass] = useState({});
    const { id } = useParams();

    const [nyElevNavn, setNyElevNavn] = useState("");
    const [nyElevAlder, setNyElevAlder] = useState(0);

    useEffect(() => async () => {
        try {
            const response = await fetch(`http://localhost:3600/api/v1/classes/${id}`);
            const data = await response.json();
            setSClass(data);
        } catch (error) {
            console.error('Error fetching class:', error);
        }
    }, [id]);


    async function newStudent(event){
        event.preventDefault();
        
        console.log(nyElevNavn,nyElevAlder)

        await fetch(`http://localhost:3600/api/v1/students`,{method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(
            { 
                name: nyElevNavn, age: nyElevAlder
            }
        )});
        


    }

    return (
        <div>
            <h1>Class Info</h1>
            <p>Klasse navn: {Sclass.name}</p>
            <p>Liste med elever</p>
            <p>Legg til flere elever</p>

            <form onSubmit={newStudent}>
                <input type="text" 
                placeholder="Navn"
                value={nyElevNavn}
                onChange={(i) => setNyElevNavn(i.target.value)}
                />

                <input type="number" 
                placeholder="Alder"
                value={nyElevAlder}
                onChange={(i) => setNyElevAlder(i.target.value)}
                />

                <input type="submit" />
            </form>
            
            <div key={Sclass.id} className="Section">
            {Sclass.students && Sclass.students.map((student) => (
                <div key={student.id} className="Student">
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                </div>
            ))}
            </div>
        </div>
    );
}