import './css/App.css'
import MyButton from './button.jsx'
import Clock from './clock.jsx'
import Klassekart from './Klassekart.jsx'
import MyList from './MyList'
import ColorButton from './ColorChangeButton'

//En React komponent er en JS funksjon som returnerer en HTML tag.

function App() {

  //variabel. En verdi som kan forandre seg.
  let user = {
    name: "Andreas Ski",
    age: 17,
    adresse: 'Ski'


  }

  return (
    <div className='container'>
    {/* <MyButton /> */}
    {/* <Clock /> */}
    {/* <Klassekart /> */}
    {/* <MyList /> */}
    {/* <p>{user.name} <br /> {user.age} år og bor i {user.adresse}</p> */}
    <ColorButton />
      
    </div>
  )
}
export default App
