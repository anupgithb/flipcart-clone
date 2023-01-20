import logo from './logo.svg';
import './App.css';

//component
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import {Box} from '@mui/material';
import DetailView from './components/details/DetailVeiw';
import Cart from './components/cart/Cart';

 import { BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <DataProvider >
      <BrowserRouter>
          <Header />
          <Box style={{marginTop : 54}}>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/product/:id' element={<DetailView/>}/>
                <Route path='/cart' element={<Cart/>}/>
            </Routes> 
          </Box>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
