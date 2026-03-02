import { useState } from "react"
import List from "./List"
import "./App.css"

function App() {
  const [showSnacks, setShowSnacks] = useState(false);


  const fruits = [{ id: 0, name: "apple", calories: 95 },
  { id: 1, name: "orange", calories: 66 },
  { id: 2, name: "pear", calories: 101 },
  { id: 3, name: "grape", calories: 3.8 },
  { id: 4, name: "pineapple", calories: 50 },
  { id: 5, name: "melon", calories: 86 }
  ]

  const snacks = [{ id: 6, name: "potato chips", calories: 536 },
  { id: 7, name: "lollipop", calories: 110 },
  { id: 8, name: "biscuits", calories: 250 },
  { id: 9, name: "candy", calories: 535 },
  { id: 10, name: "chocolate", calories: 545 },
  { id: 11, name: "jelly", calories: 60 }
  ]

  const handleClick = (e) => {
    if (showSnacks) {
      e.target.textContent = `Want to eat snacks?`;
      setShowSnacks(false);
    } else {
      e.target.textContent = "Want to eat healthy?";
      setShowSnacks(true);
    }

  }

  return (
    <>
      {showSnacks ? <List items={snacks} category="Snacks" />
        : <List items={fruits} category="Fruits" />
      }
      <button onClick={(e) => handleClick(e)}>Want to eat snacks?</button>
    </>
  )
}

export default App
