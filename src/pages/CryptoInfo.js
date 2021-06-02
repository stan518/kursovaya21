import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@material-ui/core'


export default function CryptoInfo() {
    return (
        <div>
                <Paper style={infoBlockStyle}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Typography variant="h4" > CryptoInfo </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <h1> </h1>
                        </Grid>
                        <Grid item xs={2}>
                            <Button color="primary" align="right" component={Link} to='/'>Summary</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button color="primary"  component={Link} to='/detailed'>Detailed</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        
    )
}
const infoBlockStyle = {
    padding:'10px'}
    
