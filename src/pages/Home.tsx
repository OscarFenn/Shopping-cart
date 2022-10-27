import '../Home.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


export function Home() {
    return (
        
        <div className="hero-image">
<div className="hero-text">
    <Typography 
        variant="h1">
        Welcome to The Wheel Shop
    </Typography>
    <Typography 
        variant="subtitle1">Check us Out
    </Typography>
    <Button 
        variant="contained" 
        size="large"
        component={NavLink}
        to="/store" >
        Store
    </Button>
  </div>
        </div>
        
    )}