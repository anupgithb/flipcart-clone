import {React,Fragment,useEffect,useState} from 'react'
import {styled,Box} from '@mui/material'
import { getProducts,getProduct1s } from '../../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
//components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
background: #F2F2F2;
padding : 10px 10px;
`

const Home = () => {
   
   
   const dispatch  = useDispatch();
   const[product2,setProduct2]= useState([]);

   useEffect(()=>{
      dispatch(getProduct1s());
      dispatch(getProducts());
   },[])


   // useEffect(()=>{
   //    dispatch(getProduct1s());
   // },[])
   const {products}=useSelector(state => state.getProducts);
   const {product1s}=useSelector(state => state.getProduct1s);


   

   useEffect(()=>{
      const prod = async()=>{
         try {
             const {data} = await axios.get('https://flipcart-clone-exact-backend.onrender.com/product1s');
             // console.log(data);
             setProduct2(data);
             return data;
         } catch (error) {
             return error.message;
         }
     }
     prod();
   },[])

  return (
        <>
           <NavBar /> 
           <Component >
              <Banner />
               <MidSlide products={products} title="Deal of the Day" timer={true}/>
              <MidSection/> 
             <Slide products={product1s} title="Discount for you!" timer={false}/> 
              <Slide products={products} title="Suggested items" timer={false}/> 
              <Slide products={products} title="Trending Offer" timer={false}/> 
              <Slide products={products} title="Top Deals" timer={false}/> 
              <Slide products={products} title="Accessories" timer={false}/>  
              
           </Component>
        </>
  )
}

export default Home