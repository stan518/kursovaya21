import React, { useEffect, useState } from 'react'
import CryptoInfo from './CryptoInfo'
import { Container, Grid, InputLabel, makeStyles, Select } from '@material-ui/core'
import api from './api';
import Chart from './Chart';

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
}));

export default function Detailed({coinId}) {

const classes = useStyles();
const [info, setInfo] = useState([]);
const [coins, setCoins] = useState('bitcoin');
const [timeper, setTimeper] = useState('24h');
function handleChange(e){
    setCoins(e.target.value)
    }
function timeChanger(t){
    setTimeper(t.target.value)
}

useEffect(() => {
    api.get('/charts?period='+timeper+'&coinId='+coins).then(res => setInfo(PrepareData(res.data.chart)))
    
}, [coins, timeper])

    return (
        <Container maxWidth="md">
            <CryptoInfo  />
            <Grid container spacing={3}  >
                <Grid item xs={3} className={classes.selectEmpty}>
                <InputLabel classname={classes.selectEmpty} htmlFor="age-native-simple">Currency</InputLabel>
                    <Select
                    native
                    value={coins}
                    onChange={handleChange}>
                        
                        {coinId.map(item => ( 
                        <option value={item.id} key={item.id}>{item.name}</option>))}
                    </Select>
                </Grid>
                <Grid item xs={3} className={classes.selectEmpty}>
                <InputLabel classname={classes.selectEmpty} htmlFor="age-native-simple">Time-Period</InputLabel>
                    <Select
                    native
                    value={timeper}
                    onChange={timeChanger}>
                        <option value='24h'onChange={timeChanger}>24h</option>
                        <option value='1w'onChange={timeChanger}>1w</option>
                        <option value='1m'onChange={timeChanger}>1m</option>
                        <option value='3m'onChange={timeChanger}>3m</option>
                        <option value='6m'onChange={timeChanger}>6m</option>
                        <option value='1y'onChange={timeChanger}>1y</option>
                    </Select>
                </Grid>
                </Grid>
                {info ? <Chart data ={info}/> : null}
        </Container>
    )
                        }
function PrepareData(data){
    const chartPrice = {
        count:[],
        price:[]
    };

    data.forEach((d) => {
        chartPrice.count.push(Number((String(d).substr(0,10))));
        chartPrice.price.push(Number((String(d).substr(11, 5))));
    });
return chartPrice;
}