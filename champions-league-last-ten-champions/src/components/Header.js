import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import image from '../uefa_champions_league_logo.jpg';


const Header = () => {
    return(
        <Grid style={{ backgroundColor: "black", width:"100%", paddingRight:"20px" }} container direction="row" justify="space-between" alignItems="center" xs={12}>
            <Typography variant='h3' style={{ color:"white"}}>
                <img src={image} style={{ width:"80px", margin:"20px"}}></img>

                The last 10 Champions
            </Typography>
            <Link to="/">
                <Button style={{ backgroundColor: "#011043", color:"white"}} >Home</Button>
            </Link>
            <Link to="/contato">
                <Button style={{ backgroundColor: "#011043", color: "white" }}>Contact Us</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
