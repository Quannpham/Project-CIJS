import React, { Fragment } from "react"
import "./Filter.css"

const Filter = () => {
  return (
    <Fragment>
        <div className="container-filter">
            <button className="btn-filter lam">Lamborghini</button>
            <button className="btn-filter fer">Ferrari</button>
            <button className="btn-filter mcr">Mclaren</button>
            <button className="btn-filter bug">Bugatti</button>
            <button className="btn-filter asm">Aston Martin</button>
            <button className="btn-filter por">Porsche</button>
            <button className="btn-filter rol">Rolls-royce</button>
            <button className="btn-filter pag">Pagani</button>
            <button className="btn-filter mer">Mercedes benz</button>
            <button className="btn-filter zen">Zenvo</button>
        </div>
    </Fragment>
  )
}

export default Filter