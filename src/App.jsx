import { useState } from "react"
import List from "./List"
import "./App.css"

function App() {
  const [showSnacks, setShowSnacks] = useState(false);


  const fruits = [{ id: 0, name: "apple", calories: 5 },
  { id: 1, name: "orange", calories: 3 },
  { id: 2, name: "pear", calories: 3 },
  { id: 3, name: "grape", calories: 2 },
  { id: 4, name: "pineapple", calories: 4 },
  { id: 5, name: "melon", calories: 5 }
  ]

  const snacks = [{ id: 6, name: "potato chips", calories: 35 },
  { id: 7, name: "lolipop", calories: 30 },
  { id: 8, name: "biscuits", calories: 43 },
  { id: 9, name: "candy", calories: 28 },
  { id: 10, name: "chocolate", calories: 43 },
  { id: 11, name: "jelly", calories: 51 }
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
