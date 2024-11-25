import Student from "./Student";
import { useState, useEffect } from "react";
import jsonList from "./Section.json";
import { Outlet, Link } from "react-router-dom";
import PersonInfo from './PersonInfo.jsx';


export default function Section(){

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch("http://localhost:3600/api/v1/classes");
                const data = await response.json();
                setClasses(data);
            } catch (error) {
                console.error("Error fetching classes:", error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <>
        <h1>Liste av alle klasser</h1>
        <div className="Section-parent">
            {classes.map((klass) => (
                <div key={klass.id} className="Section">
                    <Link to={"http://localhost:5174/classinfo/" +(klass.id)}>
                        <Student key = {klass.id} name={klass.name}/>
                    </Link>
                </div>
            ))}
        </div>
        </>
    );
}


        {/* <div className="Section-parent">
            {Object.entries(jsonList).map(([sectionName, sectionItems]) => (
                <div key={sectionName} className="Section">
                    {sectionItems.map((item) => (
                    <Link to={"http://localhost:5174/personinfo/"+(item.name)} key = {item.id}>
                        <Student key = {item.id} name={item.name} age={item.age}/>
                    </Link>
                    ))}
                </div>
            ))}
        </div> */}