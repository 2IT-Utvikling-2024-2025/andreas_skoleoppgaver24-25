import { useState, useEffect, Component } from 'react'
import './css/App.css'
import Clock from './Clock.jsx'
import CountdownTimer from './countdown'
import Palawan from 'react-explode/Palawan'

class ReactExplode extends Component {
  render() {
    return <Palawan size="400" delay={0} repeatDelay={0} repeat={5} />;
  }
}

function App() {
  const [time, setTime] = useState(3);

  useEffect(() => {

    const myinterval = setInterval(() => {

      if (time == 0){
        
        setTimeout(() => {
          setTime(3)
        }, 600)
        
      } else{
        setTime(time - 1);
      }

    },1000);
    
    return () => clearInterval(myinterval);

  }, [time]);

  

  
  return (
    <>
      
      {/* <Clock /> */}


      {/* Not my code  */}
      {/* <CountdownTimer initialSeconds={10} /> */}

    {time == 0 ? <ReactExplode /> : <p>{time}</p>}
      
    </>
  )
}





export default App
