import { useState } from 'react'
import './css/App.css'
/* import Todo from './Todo' */
import Calculator from './lengde_kalk'
import TextField from './textfield.jsx'
import Skjema from './Skjema.jsx'
import Partall from './partall.jsx'
import Tilfeldig from './Tilfeldig.jsx'
import Vokal from './Vokal.jsx'
import KlasseKart from './Klassekart.jsx'

import Home from './Home.jsx'
import About from './About.jsx'
import Layout from './Layout.jsx'
import Classlist from './Classlist.jsx'
import PersonInfo from './PersonInfo.jsx'
import ClassInfo from './classInfo.jsx'

import NoPage from './NoPage.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {

  return (
    <>
    {/* <Todo /> */}
    {/* <Calculator /> */}
    {/* <TextField /> */}
    {/* <Skjema /> */}
    {/* <Partall /> */}
    {/* <Tilfeldig /> */}
    {/* <Vokal /> */}
    {/* <KlasseKart /> */}

    

    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path='/'/>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='classlist' element={<Classlist />} />
        <Route path='personinfo/:name' element={<PersonInfo />} />
        <Route path='classinfo/:id' element={<ClassInfo />} />

        

        <Route path='*' element={<NoPage />} />
          
      </Routes>
    </BrowserRouter>


    
    </>
  )
}


