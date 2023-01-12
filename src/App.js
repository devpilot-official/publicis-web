import { useState, useEffect } from 'react'
import AddCard from "./components/AddCard";
import AllCards from './components/AllCards';
import './index.css';

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

    setCards([...cards, { ...card, balance: 0 }])
  }

  return (
    <div className="container">
      <AddCard onAdd={addCard} />
      { cards.length > 0 ? (<AllCards cards={cards} />) : (<p className='mt-5 lead'>No Cards</p>) }
    </div>
  );
}

export default App;
