import React from 'react';
import {Card,CardContent,Typograpy,Grid} from '@material-ui/core';
import styles from './Cards.module.css';

const Cards = (props)=>{
    console.log(props);
    return(
        <div className={styles.container}>
            <Grid spacing={3} justify="center">
                <Grid item component={Card}>
                    
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;