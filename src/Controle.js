import React from "react"
import './App'
import { useState } from "react"

export default function Controle() {
    let [count, setCount] = useState(0)
    return (
        <>
        <div className='containerCabecalho'>
        <h1 className='containerResultado'>
          {count}
        </h1>
        </div>

        <div className="containerControle">
            <div className="botoes" id="menos" onClick={() => setCount(count-1)}>-</div>
            <div className="botoes" id="zero" onClick={() => setCount(0)}>0</div>
            <div className="botoes" id="mais" onClick={() => setCount(count+1)}>+</div>
        </div>
        </>
    )
}