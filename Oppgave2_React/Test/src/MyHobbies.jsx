
const hobbies = [
    { title: "Gaming", isFavore: true, upVote: 0, id: 1 },
    { title: "Spilutvikling", isFavore: false, upVote: 0, id: 2 },
]



export default function MyHobbies() {

    const listitems = hobbies.map(hobby =>
        <li key={hobby.id}>
            {hobby.title}
        </li>
    )

    return (
        <>
            <h1>Andreas Ski</h1>

            <ul>{listitems}</ul>

        </>
    )
}