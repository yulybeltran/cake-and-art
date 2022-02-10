
import {BrowserRouter, Route, Routes} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {Home} from './pages/Home';
import {Error} from './pages/Error';
import {Catalogo} from './pages/Catalogo';
import {Footer} from './components/Footer';

import{Cartshoping} from "./pages/Cartshoping";



function App() {
  return (
    
   <BrowserRouter>
   <Navbar/>
    <Routes>
    
      <Route path="/" element={ <Home/>}/>
      <Route path="catalogo" element={<Catalogo/>}/>
      <Route path="catalogo" element={<Catalogo/> }/>
      <Route path="*" element={<Error/>}/>
      
   </Routes>
   <Footer/>
   </BrowserRouter>
    
    
  );
}

export default App;