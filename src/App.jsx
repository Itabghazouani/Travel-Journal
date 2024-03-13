import Navbar from "./components/Navbar";
import Card from "./components/Card.jsx";
import data from "../data.js";
import './App.css'

function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar/>
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
