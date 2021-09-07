import React from "react"

const Historial = ({match, location, history}) => (
    <div className="">
        {
            JSON.stringify(history)
        }
    </div>
)


export default Historial