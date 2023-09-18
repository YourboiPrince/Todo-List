import React from "react";
import { Routes,Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Navbar from "./pages/Navbar";
import './App.css'
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <TodoWrapper  />
    </div>
  );
}

export default App;


























// function App(){
//   return(
//     <>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/services" element={<Services />} />

//     </Routes>
  
//     </>
//   )
// };

// export default App;