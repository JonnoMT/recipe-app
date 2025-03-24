import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiFilter, FiClock, FiAward, FiBookmark, FiSearch } from 'react-icons/fi';

// Recipe categories
const recipeCategories = [
  'All Recipes',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Snacks',
  'Desserts',
  'Vegetarian',
  'Vegan',
  'Gluten Free'
];

// Difficulty levels
const difficultyLevels = ['Any', 'Easy', 'Medium', 'Hard'];

// Time filters
const timeFilters = ['Any', 'Under 15 min', 'Under 30 min', 'Under 60 min'];

// Recipe data
const recipes = [
  {
    id: 1,
    title: 'Creamy Garlic Pasta',
    description: 'A rich and creamy pasta dish with garlic and parmesan, perfect for a comforting dinner.',
    ingredients: [
      '200g pasta of choice',
      '3 cloves garlic, minced',
      '2 tbsp olive oil',
      '1 cup heavy cream',
      '1/2 cup grated parmesan cheese',
      'Salt and pepper to taste',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'Cook pasta according to package directions.',
      'In a large pan, sauté minced garlic in olive oil until fragrant.',
      'Add heavy cream and bring to a simmer.',
      'Stir in parmesan cheese until melted and sauce thickens.',
      'Toss with cooked pasta, season with salt and pepper.',
      'Garnish with fresh parsley before serving.'
    ],
    time: '30 min',
    difficulty: 'Easy',
    categories: ['Dinner', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Avocado Toast',
    description: 'Simple, healthy breakfast with mashed avocado on toasted bread, customizable with various toppings.',
    ingredients: [
      '1 ripe avocado',
      '2 slices of wholegrain bread',
      '1 tbsp lemon juice',
      'Salt and pepper to taste',
      'Optional toppings: cherry tomatoes, microgreens, sesame seeds, chili flakes'
    ],
    instructions: [
      'Toast the bread until golden and crisp.',
      'Halve the avocado, remove the pit, and scoop the flesh into a bowl.',
      'Mash the avocado with a fork, add lemon juice, salt, and pepper.',
      'Spread the mashed avocado on the toast.',
      'Add your preferred toppings and enjoy immediately.'
    ],
    time: '10 min',
    difficulty: 'Easy',
    categories: ['Breakfast', 'Vegan', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    featured: true,
  },
  {
    id: 3,
    title: 'Vegetable Stir Fry',
    description: 'Colorful mix of fresh vegetables quickly cooked in a flavorful sauce, perfect for a nutritious dinner.',
    ingredients: [
      '2 cups mixed vegetables (bell peppers, broccoli, carrots, snap peas)',
      '2 tbsp vegetable oil',
      '2 cloves garlic, minced',
      '1 tbsp ginger, grated',
      '3 tbsp soy sauce',
      '1 tbsp honey or maple syrup',
      '1 tsp sesame oil',
      'Sesame seeds for garnish'
    ],
    instructions: [
      'Prepare all vegetables by washing and cutting into bite-sized pieces.',
      'Heat oil in a wok or large frying pan over high heat.',
      'Add garlic and ginger, stir for 30 seconds until fragrant.',
      'Add vegetables and stir-fry for 4-5 minutes until crisp-tender.',
      'Mix soy sauce, honey, and sesame oil in a small bowl, then pour over vegetables.',
      'Stir-fry for another minute until sauce coats the vegetables.',
      'Garnish with sesame seeds and serve with rice or noodles.'
    ],
    time: '20 min',
    difficulty: 'Medium',
    categories: ['Dinner', 'Vegan', 'Vegetarian', 'Gluten Free'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Quinoa Salad with Roasted Vegetables',
    description: 'Nutritious and filling salad with fluffy quinoa and colorful roasted vegetables.',
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 zucchini, diced',
      '1 red bell pepper, diced',
      '1 yellow bell pepper, diced',
      '1 red onion, diced',
      '2 tbsp olive oil',
      '1 tbsp balsamic vinegar',
      'Salt and pepper to taste',
      'Fresh herbs (parsley, mint) for garnish'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'Cook quinoa in vegetable broth according to package instructions.',
      'Toss diced vegetables with olive oil, salt, and pepper.',
      'Spread vegetables on a baking sheet and roast for 20-25 minutes until tender and slightly caramelized.',
      'Let quinoa and vegetables cool slightly, then combine in a large bowl.',
      'Drizzle with balsamic vinegar, add fresh herbs, and toss to combine.',
      'Serve warm or cold.'
    ],
    time: '45 min',
    difficulty: 'Medium',
    categories: ['Lunch', 'Dinner', 'Vegan', 'Vegetarian', 'Gluten Free'],
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Chia Pudding with Fresh Berries',
    description: 'Simple make-ahead breakfast or snack that\'s packed with omega-3s and fiber.',
    ingredients: [
      '3 tbsp chia seeds',
      '1 cup almond milk (or milk of choice)',
      '1 tbsp honey or maple syrup',
      '1/2 tsp vanilla extract',
      'Fresh berries for topping',
      'Optional: nuts, coconut flakes, or cacao nibs for topping'
    ],
    instructions: [
      'In a jar or container, combine chia seeds, milk, sweetener, and vanilla.',
      'Stir well to ensure no clumps form.',
      'Refrigerate for at least 4 hours or overnight.',
      'Stir again before serving.',
      'Top with fresh berries and optional toppings.'
    ],
    time: '5 min (plus 4 hours setting time)',
    difficulty: 'Easy',
    categories: ['Breakfast', 'Snacks', 'Vegan', 'Vegetarian', 'Gluten Free'],
    image: 'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    featured: true,
  },
  {
    id: 6,
    title: 'Almond Flour Cookies',
    description: 'Gluten-free cookies that are crispy on the outside and chewy on the inside.',
    ingredients: [
      '2 cups almond flour',
      '1/4 cup coconut oil, melted',
      '1/4 cup maple syrup',
      '1 tsp vanilla extract',
      '1/2 tsp baking soda',
      '1/4 tsp salt',
      '1/2 cup dark chocolate chips (optional)'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C) and line a baking sheet with parchment paper.',
      'In a large bowl, mix all ingredients except chocolate chips until well combined.',
      'Fold in chocolate chips if using.',
      'Scoop tablespoon-sized portions onto the baking sheet, leaving space between each.',
      'Gently flatten each cookie with your palm.',
      'Bake for 10-12 minutes until edges are golden.',
      'Allow to cool on the baking sheet for 5 minutes before transferring to a cooling rack.'
    ],
    time: '25 min',
    difficulty: 'Easy',
    categories: ['Desserts', 'Snacks', 'Vegetarian', 'Gluten Free'],
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
    featured: false,
  },
];

function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Recipes');
  const [selectedDifficulty, setSelectedDifficulty] = useState('Any');
  const [selectedTime, setSelectedTime] = useState('Any');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Filter recipes based on criteria
  const filteredRecipes = recipes.filter(recipe => {
    // Category filter
    const matchesCategory = 
      selectedCategory === 'All Recipes' || 
      recipe.categories.includes(selectedCategory);
    
    // Difficulty filter
    const matchesDifficulty = 
      selectedDifficulty === 'Any' || 
      recipe.difficulty === selectedDifficulty;
    
    // Time filter
    const matchesTime = selectedTime === 'Any' ? true : 
      (selectedTime === 'Under 15 min' && parseInt(recipe.time) < 15) ||
      (selectedTime === 'Under 30 min' && parseInt(recipe.time) < 30) ||
      (selectedTime === 'Under 60 min' && parseInt(recipe.time) < 60);
    
    // Search term
    const matchesSearch = 
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesTime && matchesSearch;
  });

  const openRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Delicious Recipes</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Explore our collection of wholesome recipes made with our quality ingredients
          </p>
        </div>
      </div>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="relative h-64 md:h-80">
                <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeRecipeDetails}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-3xl font-bold mb-2">{selectedRecipe.title}</h2>
                <p className="text-gray-600 mb-6">{selectedRecipe.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full flex items-center">
                    <FiClock className="mr-1" /> {selectedRecipe.time}
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-3 py-1 rounded-full flex items-center">
                    <FiAward className="mr-1" /> {selectedRecipe.difficulty}
                  </span>
                  {selectedRecipe.categories.map(category => (
                    <span key={category} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Instructions</h3>
                    <ol className="list-decimal pl-5 space-y-4">
                      {selectedRecipe.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700">{instruction}</li>
                      ))}
                    </ol>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg flex items-center">
                    <FiBookmark className="mr-2" /> Save Recipe
                  </button>
                  <button onClick={closeRecipeDetails} className="text-gray-600 hover:text-gray-800">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recipe Navigation and Search */}
      <div className="sticky top-16 bg-white shadow-md z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <button 
                onClick={() => setShowFilters(!showFilters)} 
                className="flex items-center text-gray-700 hover:text-amber-600 mr-4"
              >
                <FiFilter className="mr-1" /> Filters
              </button>
              <div className="hidden md:flex space-x-6 overflow-x-auto">
                {recipeCategories.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm whitespace-nowrap ${
                      selectedCategory === category
                        ? 'text-amber-600 font-semibold'
                        : 'text-gray-600 hover:text-amber-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                <div className="relative group">
                  <button className="text-sm text-gray-600 hover:text-amber-600 whitespace-nowrap">
                    More +
                  </button>
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block z-10">
                    {recipeCategories.slice(6).map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedCategory === category
                            ? 'bg-amber-50 text-amber-600 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-amber-600'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-gray-100 p-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium mb-2">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {recipeCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-sm px-3 py-1 rounded-full ${
                        selectedCategory === category
                          ? 'bg-amber-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {difficultyLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedDifficulty(level)}
                      className={`text-sm px-3 py-1 rounded-full ${
                        selectedDifficulty === level
                          ? 'bg-amber-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">Time</h3>
                <div className="flex flex-wrap gap-2">
                  {timeFilters.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`text-sm px-3 py-1 rounded-full ${
                        selectedTime === time
                          ? 'bg-amber-500 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => {
                  setSelectedCategory('All Recipes');
                  setSelectedDifficulty('Any');
                  setSelectedTime('Any');
                  setSearchTerm('');
                }}
                className="text-sm text-amber-600 hover:text-amber-700 mr-4"
              >
                Clear Filters
              </button>
              <button
                onClick={() => setShowFilters(false)}
                className="text-sm bg-amber-500 hover:bg-amber-600 text-white px-4 py-1 rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Recipes Grid */}
      <div className="container mx-auto px-4 py-12">
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No recipes found</h2>
            <p className="text-gray-500 mb-8">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSelectedCategory('All Recipes');
                setSelectedDifficulty('Any');
                setSelectedTime('Any');
                setSearchTerm('');
              }}
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured Recipes (only shown when no filters applied) */}
            {selectedCategory === 'All Recipes' && selectedDifficulty === 'Any' && selectedTime === 'Any' && searchTerm === '' && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8">Featured Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {recipes.filter(recipe => recipe.featured).map((recipe) => (
                    <motion.div 
                      key={recipe.id}
                      whileHover={{ y: -10 }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => openRecipeDetails(recipe)}
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <span className="absolute top-0 left-0 bg-amber-500 text-white text-xs font-bold px-3 py-1">
                          Featured
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-gray-500 text-sm">
                            <FiClock className="mr-1" /> {recipe.time}
                          </div>
                          <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                            {recipe.difficulty}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="border-b border-gray-200 my-12"></div>
              </div>
            )}

            {/* All Recipes */}
            <div>
              <h2 className="text-2xl font-bold mb-8">
                {selectedCategory === 'All Recipes' ? 'All Recipes' : selectedCategory + ' Recipes'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe) => (
                  <motion.div 
                    key={recipe.id}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => openRecipeDetails(recipe)}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {recipe.featured && (
                        <span className="absolute top-0 left-0 bg-amber-500 text-white text-xs font-bold px-2 py-1">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center text-gray-500 text-sm">
                          <FiClock className="mr-1" /> {recipe.time}
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Weekly Recipes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive new recipes, cooking tips, and exclusive offers straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecipesPage; 