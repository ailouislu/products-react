import React from 'react'

function ColoredLine(props) {
    return (
            <hr
                style={{
                    color: props.color,
                    backgroundColor: props.color,
                    height: 1
                }}
            />
    )
}


export default ColoredLine
