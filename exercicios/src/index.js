import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/Primeiro'
import BomDia from './components/BomDia'
import {BoaTarde, BoaNoite} from './components/Multiplos'
import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render (
    <div> 
        <Primeiro/>
        <BomDia nome="Samira"/>
        <BoaTarde nome='Samira' />
        <BoaNoite nome=' Gabriel' />
        <Saudacao tipo="Bem Vindo" nome="Samira "/>
        <Pai nome="Marcelo" sobrenome="Freitas" >
            <Filho nome="Samira" />
           {/*} <Filho nome="Marcela" sobrenome='Freitas'/>
            <Filho nome="Pedro" sobrenome='Freitas'/> */}
        </Pai>
    </div>
    , document.getElementById('root')
)



