import { useState } from "react"

function Parent() {
    const colours = ['red', 'green', 'yellow', 'orange', 'blue', 'purple']

    const[textColour, setColour] = useState('black')
    const[colorIndex, setColourIndex] = useState(0)

    const changeTextColour = () => {
        const nextColourIndex = (colorIndex + 1 ) % colours.length
        setColourIndex(nextColourIndex) 
        setColour (colours[nextColourIndex])
    }
    
    return (
        <div>
            <h1>hello</h1>
            <Child1 callback={changeTextColour}/>
            <Child2 newColour={textColour}/>
            

        </div>
    )
}



function Child1 (props){

    const handleClick = () => {
        props.callback()
    }


    return (
        <div >
    <button onClick={handleClick}> changeing text colour </button>
        </div>
    )
}

function Child2 (props){
    return (
        <div style={{ color: props.newColour}} >
       This text changes colour
        </div>
    )
}



export default Parent