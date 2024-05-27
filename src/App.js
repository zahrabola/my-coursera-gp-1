import React, { useState } from "react";


function App() {
    const [items, setItems] = useState([])

    const onAddItem = (item) => {
        setItems([...items, item])
    }
const onRemoveItem =(index) => {
    const newwItems = [...items]
    newwItems.splice(index, 1)
    setItems(newwItems)
}

  return (
  <div>
<Header onAddItem={onAddItem}/>
<List items={items} onRemoveItem={onRemoveItem}/>
    </div>
  );
}

function Header(props) {

    const [ itemText, setItemText] = useState('')

    const handleChange = (event) => {
        setItemText(event.target.value)
    }
    const handleSubmit = (event) => {
       event.preventDefault()     
       props.onAddItem(itemText)
       setItemText('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='enter item'
            value={itemText}
            onChange={handleChange}
            />
            <button type='submit'>submit</button>
            </form>
            
        </div>
    )
}


function List(props) {

    const handleRemoveItem = (index) => {
        props.onRemoveItem (index)
    }
    return (
        <div>
            <ul>
                {props.items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={(index) => handleRemoveItem(index)}>
remove item
                        </button>
                    </li>
                ))}
                </ul> 
                </div>
    )
}
export default App;
