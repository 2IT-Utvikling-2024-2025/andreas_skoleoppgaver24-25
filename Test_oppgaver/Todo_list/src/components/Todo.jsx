import {useState} from 'react'
import './css/Todo.css'

let nextId = 0

export default function Todo() {

    const [name, setName] = useState("");
    const [list, setList] = useState([]);
    const [edit, setEdit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setList ([...list, { id: nextId++, name: name}])
      }

      function editText(){
        return setEdit(!edit)
    }

    
    return(
        <>
            <h1>Todo List:</h1>
            <form onSubmit={handleSubmit} className="form">
                <label>
                    <input className="Input" type="text" 
                    value={name}
                    onChange={(i) => setName(i.target.value)}
                    />
                </label>
                <input className="Input" type="submit" value="Add"/>
            </form>
            <p>Your tasks:</p>
            <button className="button" onClick={() => setList([])}>Clear all</button>

            <ul>
                {list.map(i => (
                    <li key={i.id}>{i.name}
                        <input className="checkbox"
                        type="checkbox"
                        onClick={() => setList(list.filter(a => a.id !== i.id))}/>

                        <button onClick={editText}>Edit</button>
                        {edit ? <input type="text" /> : null}
                    </li>
                ))}
                
            </ul>
        
            
        </>
    )
}

/* function ListItem({i}){
    return(
        <li>{i}</li>
    )} */

