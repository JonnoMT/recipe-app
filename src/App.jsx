import { useState } from 'react'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'

function App() {
  const [recipes] = useState([
    {
      id: 1,
      title: 'Creamy Garlic Pasta',
      description: 'A rich and creamy pasta dish with garlic and parmesan.',
      time: '30 min',
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 2,
      title: 'Avocado Toast',
      description: 'Simple, healthy breakfast with mashed avocado on toasted bread.',
      time: '10 min',
      difficulty: 'Very Easy',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 3,
      title: 'Vegetable Stir Fry',
      description: 'Colorful mix of fresh vegetables quickly cooked in a flavorful sauce.',
      time: '20 min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <RecipeList recipes={recipes} />
      </div>
    </div>
  )
}

export default App 