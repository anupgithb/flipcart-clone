

import {Box,Button, styled} from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import { payUsingPaytm } from '../../service/api';
import {post} from '../../utils/paytm'

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 18px 20px 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%'
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({product}) => {

    const [quantity,setQuantity] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;
    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }

    const buyNow = async()=>{
        let response = await payUsingPaytm({amount:500, email : 'anupdutta88v@gmail.com'});
        let information = {
            action:'https://securegw-stage.paytm.in/order/process',
            params:response
        }
        post(information);
    }

  return (
    <LeftContainer>
        <Box style={{ border: '1px solid #f0f0f0',width:'95%'}}>
            <Image src={product.detailUrl} alt="product" />
        </Box>
            <StyledButton onClick={()=> addItemToCart()} style={{marginRight: 10,marginLeft: 12, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} onClick={()=> buyNow()} variant="contained"><Flash />Buy Now</StyledButton>
       
    </LeftContainer>
  )
}

export default ActionItem