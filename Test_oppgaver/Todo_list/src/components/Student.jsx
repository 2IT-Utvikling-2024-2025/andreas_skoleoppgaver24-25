

export default function Student(props){

    return(
        <>
            <div className="Student">
                <h2>{props.name}</h2>
                <h2>Age: {props.age}</h2>
                
            </div>
        </>
    )
}