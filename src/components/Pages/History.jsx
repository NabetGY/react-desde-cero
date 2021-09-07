import React from "react"

const History = ({match, location, history}) => (
    <div className="">
        {
            JSON.stringify(history)
        }
    </div>
)


export default History