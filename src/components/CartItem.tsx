import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Divider from '@mui/material/Divider';

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <>
        <ListItem>
        <ListItemAvatar>
          <Avatar src={item.imgUrl} />
        </ListItemAvatar>
        <ListItemText 
            primary={
                <>
                <Typography>
                    {item.name}{" "}
                    {quantity > 1 && (
                    <span>
                        x{quantity}
                    </span>
                    )}
                </Typography>
                </>
            } 
            secondary={formatCurrency(item.price)} />
            <Typography variant="body2" gutterBottom>
                {formatCurrency(item.price * quantity)}
            </Typography>
            <IconButton onClick={() => 
                removeFromCart(item.id)}>
                <ClearIcon color="error"  />
            </IconButton>
            </ListItem>
            <Divider /> 
        </>
    )
}