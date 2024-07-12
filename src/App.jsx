import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Card from './components/Card'
import data from './data.jsx'


function App() {
  const cards = data.map((card) => 
  <Card 
    title = {card.title}
    location = {card.location}
    googleMapsUrl = {card.googleMapsUrl}
    startDate = {card.startDate}
    endDate = {card.endDate}
    description = {card.description}
    imageUrl = {card.imageUrl}
  />
  )

  return (
      <div className="app--container">
        <Header />
        {cards}
      </div>
  )
}

export default App
