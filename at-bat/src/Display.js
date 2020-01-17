import React from 'react'

const Display = props => {
    return(
        <>
            <h1>Strikes: {props.strike}</h1>
            <h1>Balls: {props.ball}</h1>
        </>
    )
}
export default Display