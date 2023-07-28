import React, { Fragment } from "react"
import "./Filter.css"

const Filter = () => {
  return (
    <Fragment>
        <div className="container-filter">
            <button className="btn-filter b-h-6">Big Heroes 6</button>
            <button className="btn-filter t-s">Toy stories</button>
            <button className="btn-filter f-z">Frozen</button>
            <button className="btn-filter m-i">Monster inc</button>
            <button className="btn-filter z-t-a">Zootopia</button>
            <button className="btn-filter p-c">Pirates of the Caribes</button>
            <button className="btn-filter i-c-b">Incredibles</button>
            <button className="btn-filter up">Up</button>
            <button className="btn-filter i-o">Inside Out</button>
            <button className="btn-filter e-m-t">Elemental</button>
        </div>
    </Fragment>
  )
}

export default Filter