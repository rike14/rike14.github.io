import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item xs={3}>
            <Paper className={classes.paper}>
                <Grid container direction='column'>
                    <Grid item>
                    <img width="140px" src={product.image} alt={product.name_product}/>
                    <Typography variant='h6'>
                        {children}
                    </Typography>
                    <Typography variant='subtitle1'>
                        <a href={product.video} target="_blank" style={{ backgroundColor: "#011043", color: "white" }}
                                variant="contained">
                            <Button style={{ backgroundColor: "#011043", color: "white", marginTop: "10px" }}
                                    variant="contained">See the video of Final
                            </Button></a>
                    </Typography>
                    </Grid>
                
                    <Button style={{ backgroundColor: "#011043", color: "white", marginTop:"20px" }}
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Add to favorite
                </Button>
                    
                    
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;
