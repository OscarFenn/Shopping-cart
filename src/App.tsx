import {Routes, Route} from "react-router-dom"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import {Home} from './pages/Home';
import {Store} from './pages/Store';
import {About} from './pages/About';
import {Navbar} from './components/Navbar'
import {ShoppingCartProvider} from './context/ShoppingCartContext';


function App() {
return (
<>
<ShoppingCartProvider>
<Navbar /> 

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/store" element={<Store/>} />
    <Route path="/about" element={<About />} />
  </Routes>

</ShoppingCartProvider>
</>
)
}

export default App