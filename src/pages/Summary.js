import { Container, Grid, Paper, Typography, InputLabel, Select, makeStyles, FormControl } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import api from './api'

import CryptoInfo from './CryptoInfo'


const infoBlockStyle = {
    padding:'10px'}

    const useStyles = makeStyles((theme) => ({
        selectEmpty: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1)
        },
    }));
export default function Summary({coinId}) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [coinname, setCoinname] = useState('bitcoin');
    function handleChange(e){
        setCoinname(e.target.value)
        }
    useEffect(() => {
        api.get('/markets?coinId='+coinname)
            .then((res) => setData(res.data));
    }, [coinname])

    return (
        
    <Container maxWidth="md">
        
        <CryptoInfo />
        <Grid container spacing={3}>
            <Grid item xs={4} className={classes.selectEmpty} >
            <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel classname={classes.selectEmpty} htmlFor="age-native-simple"></InputLabel>
                    <Select
                    native
                    value={coinname}
                    onChange={handleChange}>
                        
                        {coinId.map(item => ( 
                        <option value={item.id} key={item.id}>{item.name}</option>))}
                    </Select>
            </FormControl>
            </Grid>
        </Grid>
        <Grid container spacing={3}>    
        {data.map(items => (
            <Grid item xs={4} key={items.id}>
                <Paper style={infoBlockStyle} >
                    <Typography variant="subtitle1">Market: {items.exchange} </Typography>
                    <Typography variant="h6">Price: {items.price} </Typography>
                    
                    <Typography variant="subtitle1">Volume: {items.volume} </Typography>
                </Paper>
            </Grid>
        ))}
        </Grid>
    </Container>
    ) 
} 
