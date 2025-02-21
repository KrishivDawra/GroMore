import About from "./About"
import Body from "./components/Body"
import Header from "./components/Header"
import { BrowserRouter,Route, Routes } from "react-router-dom"
import Services from "./Services"
import Products from "./Products"

function App() {

  return (
    <>
    <div className="px-14 py-4 bg-amber-50 ">
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Body/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/product' element={<Products/>}></Route>
            <Route path="*" element={<div>Error 404 found</div>}></Route>
        </Routes>
        
        
      </BrowserRouter>
    </div>
      
    </>
  )
}

export default App
