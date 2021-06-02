import React from 'react'

import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './log/LogRoutes'
import { AppBar, Button, Container, Grid, Paper, IconButton, Toolbar, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import {makeStyles} from '@material-ui/core/styles'



const useStyles = makeStyles((theme) => ({
    root:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  },
  overlay:{
    position: 'relative',
    top:20,
    bottom:0,
    right:0,
    left:0
  },
  mainFeaturesPost:{
    position:"relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    
    backgroundSize: "cover",
    backgroundRepeat : "no-repeat",
    backgroundPosition : "center"
    },
    mainFeaturesPostContent:{
      position:"relative",
      padding:theme.spacing(8),
      marginTop:theme.spacing(2)
    },
  }));

function Header() {
    const classes = useStyles();
    const [open,setOpen] = React.useState(false);
    const handleClickOpen= () =>{
      setOpen(true);
    };
    const handleClose= () =>{
      setOpen(false);
    };
    
    return (
    <Router>      
      <div>
        <AppBar position="relative">
          <Container >
          <Toolbar>
            <IconButton edge="start"
            color="inherit" 
            arial-label="menu"
            className={classes.menuButton}>
            <MenuIcon/>
            </IconButton>
            <Typography variant="h5" className={classes.title}>Crypto Client</Typography>
            <Box ml={3} mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen} >Log in</Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText> </DialogContentText>
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    
                  />
                  <TextField 
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>
                </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">Sign up</Button>
          </Toolbar>
          
          </Container>
        </AppBar>
      </div>
      <main>      <Paper className={classes.mainFeaturesPost}
      style={{backgroundImage : 'url(https://source.unsplash.com/random)'}} gutterBottom>
        <Container maxWidth='lg'>
          <div className={classes.overlay}>
          <Grid container >
          <Grid item md={6}>
            <div className={classes.mainFeaturesPostContent}>
                <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom>
                  Курсовая работа</Typography>
                  <Typography
                variant="h6"
                color="inherit"
                paragraph>
                  Тема: "Клиентское приложение для
                  анализа и статистики торгов
                  на бирже криптовалют"       
                  Подготовил К.Ю. Шашков</Typography>
                  <Button variant="contained" color="secondary">Узнать больше</Button>
            </div>
          </Grid>
          </Grid>
          </div>
        </Container>
        </Paper>
        </main>

    </Router>

      );
  }

export default Header;