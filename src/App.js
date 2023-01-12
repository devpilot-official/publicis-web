import { useState, useEffect } from 'react'
import AddCard from "./components/AddCard";
import AllCards from './components/AllCards';
import Header from "./components/Header";

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards()
      setCards(cardsFromServer.data)
    }

    getCards()
  }, [])

  // Fetch Cards
  const fetchCards = async () => {
    const res = await fetch('http://localhost:9000/card')
    const data = await res.json()

    return data
  }

  // Add Card
  const addCard = async (card) => {
    const res = await fetch('http://localhost:9000/card/new', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(card),
    })

    const data = await res.json()

    setCards([...cards, data.data])
  }

  return (
    <div className="container">
      <Header />
      <p></p>
      <p></p>
      <AddCard  onAdd={addCard} />
      { cards.length > 0 ? (<AllCards cards={cards} />) : ('No Cards') }
    </div>
  );
}

export default App;
