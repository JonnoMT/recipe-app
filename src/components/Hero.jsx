function Hero() {
  return (
    <div className="relative overflow-hidden bg-cover bg-center pt-16 pb-32" 
         style={{backgroundImage: "url('https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80')"}}>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
          Welcome to Delicious Discoveries
        </h1>
        <p className="text-xl md:text-2xl text-white text-center max-w-3xl mb-8">
          Explore our collection of mouthwatering recipes that will inspire your next culinary adventure
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
          Explore Recipes
        </button>
      </div>
    </div>
  )
}

export default Hero 