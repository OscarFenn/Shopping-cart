import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {formatCurrency} from "../utilities/formatCurrency";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {useShoppingCart} from '../context/ShoppingCartContext'

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
return (
<Card>
    <CardMedia 
        component="img"
        image={imgUrl}
        height="200"
        alt="Wheel for car"
        />
<CardContent>
    <Typography gutterBottom variant="h5" component="div">
          {name}
    </Typography>
    <Typography variant="body2" color="text.secondary">
          {formatCurrency(price)}
    </Typography>
    <CardActions>
        {quantity === 0 ? (
            <Button variant="contained" onClick={() => increaseCartQuantity(id)}>Add to Cart</Button>
        ): (
            <>
        <IconButton onClick={() => increaseCartQuantity(id)}>
            <AddCircleIcon style={{ color: '#FF0000' }} />
        </IconButton>
        <Typography variant="body2">
            {quantity} in cart
        </Typography>
        <IconButton onClick={() => decreaseCartQuantity(id)}>
            <RemoveCircleIcon style={{ color: '#FF0000' }} />
        </IconButton>
        <Button onClick={() => removeFromCart(id)} color="error">
            Remove
        </Button>
        </>
        )}
    </CardActions>
</CardContent>  
</Card>
)
}