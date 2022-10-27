import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import storeItems from "../data/items.json"
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { TransitionGroup } from 'react-transition-group';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import Collapse from '@mui/material/Collapse';

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Drawer anchor='right' open={isOpen} onClose={closeCart}>
        <Box p={2} width='350px'  role='presentation'>
            <Typography variant='h5' component='div'>
            Shopping Cart
            </Typography>
            <List>
              <TransitionGroup>
                    {cartItems.map(item => (
                        <Collapse>
                        <CartItem key={item.id} {...item} />
                        </Collapse>
                    ))}
              </TransitionGroup>  
            </List>
            <Typography variant='h6' component='div'>
            Total {formatCurrency(cartItems.reduce((
                total, cartItem) => {
                    const item = storeItems.find(i => i.id ===
                    cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                }, 0)
                )}
            </Typography>
        </Box>
        </Drawer>
    )
}