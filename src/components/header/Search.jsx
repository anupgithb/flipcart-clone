import React,{useState,useEffect} from 'react'

import {InputBase,Box,List,ListItem,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {useSelector, useDispatch} from 'react-redux';
import {getProducts} from '../../redux/actions/productActions';
import {getProduct1s} from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
 background: #fff;
 width:38%;
 margin-left:10px;
 border-radius:2px;
 display:flex;
`

const StyledInputBase = styled(InputBase)`
padding: 0 16px;
border-radius: 2px 0 0 2px;
border: 0;
outline: 0 none;
font-size: 14px;
height: 36px;
width: 100%;

font-family: Roboto,Arial,sans-serif;
letter-spacing: 0;
font-weight:500;
`
const SearchIconWrapper=styled(Box)`
color:blue;
padding: 5px;
dispaly:flex;
`

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const Search = () => {
  
  const [text,setText]=useState("");
  const [ open, setOpen ] = useState(true)

  const {products} = useSelector(state=>state.getProducts);
  const {product1s} = useSelector(state=>state.getProduct1s);
  const productss=products.concat(product1s);
  console.log(productss);
  const dispatch = useDispatch();
  
  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  
  useEffect(()=>{
    dispatch(
        getProducts(),
        getProduct1s()
    )
  },[dispatch])

  return (
    <SearchContainer>
        <StyledInputBase
        placeholder='Search for products, brands and more'
        onChange={(e)=> getText(e.target.value)}
        value={text}
        />
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>

        {
          text&&
          <ListWrapper>
            {
              productss&&productss.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
               <ListItem>
                   <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => {setOpen(true);
                          setText("");
                        }}  
                      >
                        {product.title.longTitle}
                      </Link>
                </ListItem>
              ))
            }
          </ListWrapper>
        }

    </SearchContainer>
  )
}

export default Search