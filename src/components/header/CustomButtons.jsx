import React from 'react'
import { useState,useContext } from 'react';

import {Box,Button,Typography,styled, Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  { DataContext } from '../../context/DataProvider';
import { useSelector } from 'react-redux';
//component
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import CartItem from '../cart/CartItem';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      color: '#FFFFFF',
      fontSize: 12,
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Container = styled(Link)(({theme})=>({
  display:'flex',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}))
 


const LoginButton = styled(Button)`
color:#2874f0;
background:white;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;

`

const CustomButtons = () => {
  const {account,setAccount} = useContext(DataContext);
  const [open,setOpen] = useState(false);
  const {cartItems} = useSelector(state=>state.cart);
  const openDialog=()=>{
    setOpen(true);
  }

  return (
    <Wrapper style={{ marginLeft: 10 }}>

      {
        account?<Profile account={account} setAccount={setAccount}/>:
        <LoginButton variant="contained" onClick={()=>{
          openDialog()
        }}>Login</LoginButton>
      }
        
        <Typography style={{ marginTop: 3, width: 135,fontWeight:600 }}>Become a Seller</Typography>
        <Typography style={{ marginTop: 3,fontWeight:600 }}>More</Typography>

        <Container to='/cart' style={{ marginLeft: 10,fontWeight:600 }}>
        <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon/>
        </Badge>
            <Typography style={{fontWeight:600,marginLeft:10 }} >Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButtons