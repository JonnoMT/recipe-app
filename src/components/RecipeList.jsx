import RecipeCard from './RecipeCard'

function RecipeList({ recipes }) {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Popular Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default RecipeList 