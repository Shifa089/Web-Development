import { useState } from "react"

function App() {
  const [colour, setColour] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=> setColour("red")} className="bg-red-600 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Red</button> 
          <button onClick={()=> setColour("blue")} className="bg-blue-600 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Blue</button>
          <button onClick={()=> setColour("lime")} className="bg-lime-600 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Lime</button>
          <button onClick={()=> setColour("purple")} className="bg-purple-600 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Purple</button>
          <button onClick={()=> setColour("black")} className="bg-black w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Black</button>
          <button onClick={()=> setColour("white")} className="bg-white w-32 mx-2 rounded-lg py-4 border-black border-4">White</button>
          <button onClick={()=> setColour("green")} className="bg-green-600 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Green</button>
          <button onClick={()=> setColour("brown")} className="bg-amber-700 w-32 mx-2 rounded-lg py-4 text-white border-black border-4">Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
