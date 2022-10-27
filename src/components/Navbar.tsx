import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import { Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import { useShoppingCart } from '../context/ShoppingCartContext';
import Typography from '@mui/material/Typography';





export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <AppBar style={{ background: '#fff', color: 'black'}} position="sticky" elevation={3} sx={{ mb: 3 }}>
            <Container>
                <Toolbar>
                <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Wheel Shop
          </Typography>
                <Button 
                    color="inherit" 
                    component={NavLink} 
                    to="/" >
                    Home
                </Button>
                <Button 
                    color="inherit" 
                    component={NavLink} 
                    to="/store" >
                    Store
                </Button>
                <Button
                    sx={{ mr: "auto" }} 
                    color="inherit" 
                    component={NavLink} 
                    to="/about" >
                    About
                </Button>
                {cartQuantity > 0 && (
                <Badge badgeContent={cartQuantity} color="error">
                <IconButton
                onClick={openCart} 
                aria-label="Shopping Cart"
                style={{position: "relative"}}>
                    <ShoppingCartIcon />
                </IconButton>
                </Badge>
                )}
                
                </Toolbar>
                
                
            </Container>
        </AppBar>
    )
}