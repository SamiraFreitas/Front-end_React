import React from 'react'
import ReactDOM from 'react-dom'

//import BomDia from './components/BomDia'

//ReactDOM.render(<BomDia nome='Samira'/>,  document.getElementById('root'))

//import {BoaTarde, BoaNoite} from './components/Multiplos'
//components BomDia utilizando 2 componentes 
/*
ReactDOM.render (
    <div> 
        <BoaTarde nome='Samira' />
        <BoaNoite nome='Gabriel' />

    </div>
    , document.getElementById('root')
)*/
//components saudacao utilizando classes
import Saudacao from './components/Saudacao'
ReactDOM.render (
    <div> 
      <Saudacao tipo="Bom dia" nome="Samira "/>
    </div>
    , document.getElementById('root')
)