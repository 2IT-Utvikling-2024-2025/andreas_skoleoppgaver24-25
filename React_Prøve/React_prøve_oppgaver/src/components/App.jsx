import { useState } from 'react'
import sverigeFlagg from '../assets/sverigeFlagg.png'
import './css/App.css'
import Danmark from './danmark.jsx'
import Italia from './italia.jsx'
import Kanada from './kanada.jsx'
import Sverige from './sverige.jsx'
import GfGWeatherApp from './weather.jsx'

function App() {

  let minTemp =-10
  let maxTemp =20

  //vaer er det samme som vær bare uten æ
  const [sverigeVaer,setSverigeVaer] = useState (['sol','regn'][Math.round(Math.random())])
  const [sverigeTemp,setSverigeTemp] = useState (Math.round(Math.random() * (maxTemp-minTemp)))

  const [danmarkVaer,setDanmarkVaer] = useState (['sol','regn'][Math.round(Math.random())])
  const [danmarkTemp,setDanmarkTemp] = useState (Math.round(Math.random() * (maxTemp-minTemp)))

  const [kanadaVaer,setKanadaVaer] = useState (['sol','regn'][Math.round(Math.random())])
  const [kanadaTemp,setKanadaTemp] = useState (Math.round(Math.random() * (maxTemp-minTemp)))

  const [italiaVaer,setItaliaVaer] = useState (['sol','regn'][Math.round(Math.random())])
  const [italiaTemp,setItaliaTemp] = useState (Math.round(Math.random() * (maxTemp-minTemp)))

  return (
    <>

    {/* <GfGWeatherApp /> */}

    {/* <img src={sverigeFlagg} alt="svensk flagg" width="500" height="600"/> */}

    <h1>Skis Reise Guide</h1>

    <h3>Det er mange fine steder i verden å besøke. 
      Vi kommer til å snakke om noen av dem for å finne din neste reise!</h3>

    <div className='Country' id="sverige">
      <h2>Sverige</h2>
      <h4>Først ut så har vi Nabo'n, nemelig Sverige</h4>
      <p>Sverige er et fint land med mye natur og felles historie med Norge</p>
      <br />
      <p>Lokal vær</p>
      <p>I dag er det {sverigeVaer} i Sverige med {sverigeTemp} grader Celsius ute</p>

      <br />
      <p>Valutakurs:</p>
      <Sverige />
    </div> <br />


    <div className='Country' id="danmark">
      
      <h2>Danmark</h2>
      <h4>Som number to har vi flatlandet Danmark</h4>
      <p></p>

      <p>I dag er det {danmarkVaer} i Danmark med {danmarkTemp} grader Celsius ute</p>

      <br />
      <p>Valutakurs:</p>
      <Danmark />
    </div><br />


    <div className='Country' id="kanada">
      <h2>Kanada</h2>
      <h4>Over til andre siden av havet har vi Kanada</h4>
      <p></p>


      <p>I dag er det {kanadaVaer} i Kanada med {kanadaTemp} grader Celsius ute</p>

      <br />
      <p>Valutakurs:</p>
      <Kanada />
    </div><br />


    <div className='Country' id="italia">
      <h2>Italia</h2>
      <h4>Tilbake igjen til Europa så har vi Italia</h4>
      <p></p>


      <p>I dag er det {italiaVaer} i Italia med {italiaTemp} grader Celsius ute</p>

      <br />
      <p>Valutakurs:</p>
      <Italia />
      
    </div><br />


    </>
  )

  
}

export default App


