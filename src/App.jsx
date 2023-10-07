import { useState } from "react"

function App() {

  const [color, setColor] = useState("olive");

  const colorsArr = ['red', 'blue', 'green', 'olive', 'pink', 'purple', 'lavender', 'white', 'black', 'orange'];

  // 'olive', 'pink', 'purple', 'lavender', 'white', 'black', 'orange'

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}></div>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {
            
            colorsArr.map((singleColor, index) => {
              return (                   
              <button
                onClick={() => setColor(singleColor)}
                className="outline-none px-4 py-1 rounded-full text-white  shadow-lg capitalize"
                  style={
                    {
                      backgroundColor: singleColor,
                      color:(singleColor === 'white' || singleColor === 'yellow' || singleColor === 'lavender') ? "black" : ""
                    }
                    } 
                    key = { index } >
                  {singleColor}
                </button>  
                )
            })

          }
         
           

            
          

         


          {/* <button            
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>
            Green
          </button>
          <button            
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>
            Blue
          </button> */}
        </div>
      </div>
    </>
  )
}

export default App
