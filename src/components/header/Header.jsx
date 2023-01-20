import React, { useState } from 'react'
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled,listItem } from '@mui/material';
import { Menu } from '@mui/icons-material';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom'; 

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height:55px;
  box-shadow:none;
`
const StyledBox = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const StyledSubBox = styled(Typography)`
font-size:10px;
font-style:italic;
`
const StyledPlusImage = styled('img')(
  {
    width:10,
    height:10,
    marginLeft:3
  }
)

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const CustomButtonsWrapper = styled(Box)(({theme})=>({
  margin:'0 5% 0 auto',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }
}))


const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  const list = () => (
      <Box style={{ width: 250 }} onClick={handleClose}>
          <List>
              <listItem button>
                  <CustomButtons />
              </listItem>
          </List>
      </Box>
  );


  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
      <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
      </MenuButton>

      <Drawer open={open} onClose={handleClose}>
                    {list()}
      </Drawer>
        <StyledBox to='/'>
          <img src={logoURL} alt="logo" style={{width : 75}}/>
          <Box style={{display:'flex'}}>
            <StyledSubBox>Explore&nbsp;
              <Box component="span" style={{color:'#FFE500'}}> Plus</Box> 
            </StyledSubBox>
            <StyledPlusImage src={subURL} alt="sub-logo"/>
          </Box>
        </StyledBox>
        <Search/>
        <CustomButtonsWrapper>
          <CustomButtons/>
        </CustomButtonsWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header;