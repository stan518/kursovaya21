import {useEffect, React, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import api from './pages/api';
import { Button, Container, IconButton, Toolbar, Typography, Box, Paper, Grid, Card, CardMedia, CardContent, CardActions,  } from '@material-ui/core';
import Header from './Header'
import {makeStyles} from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import RestoreIcon from '@material-ui/icons/Restore'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Testapi from './Testapi'

import Summary from './pages/Summary'
import Detailed from './pages/Detailed'


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
cardMedia:{
  paddingTop: "56.25%"
},
cardContent:{
  flexGrow: 1
},
cardGrid:{
  marginTop: theme.spacing(4)
}
}));

const cards = [1,2]

function App() {
  const classes = useStyles();
  const [value, setValue] = useState("recents")
  const [coinid, setCoinid] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    api.get('/coins?skip=0&limit=15&currency=USDT').then(res => setCoinid(res.data.coins))
}, [])
  return (
    <>

  <Header/>
    <main >
      {/*<Paper className={classes.mainFeaturesPost}
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
  </Paper>*/}
      <div className={classes.mainContent}>
        <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Приложение для статистики</Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>В нём происходит запрос данных по API 
                  методом GET с помощью java-библиотеки axios.
                  На странице "Summary" выводится информация по опредленной валюте на различных рынках.
                  В "Detailed" выводится ценовой график по выбранной криптовалюте. </Typography>
          </Container>
        {/*<div className={classes.mainButtons} >
          <Grid container spacing={2} justify="center">
            <Grid item >
              <Button variant="contained" color="primary" >Start Now</Button>
            </Grid>
            <Grid item >
              <Button variant="outlined" color="secondary" >Learn more</Button>
            </Grid>
          </Grid>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {cards.map((cards) =>
              <Grid item key={Card} xs={14} sm={8} md={6}>
                <Card className={classes.Card}>
                  <CardMedia className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image Title">
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography color="primary">
                      Description Description DescriptionDescription
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                    <LayerIcon/>
                    <PlayCircleFilledIcon/>
                  </CardActions>
                </Card>
              </Grid>
              )}
            </Grid>
              </Container>*/}
        </div>
              
    
    </main>
              

    <Router>
              
      <Switch> 
        <Route exact path="/"> <Summary coinId = {coinid}/> </Route>
        <Route path="/detailed"> <Detailed coinId = {coinid}/> </Route>
        <Route path="*"><Redirect to="/" /></Route>
      </Switch>
      
    </Router>
          <footer>
                <Typography variant="h6" align="center" gutterBottom></Typography>
                <BottomNavigation
                  value={value}
                  onChange={handleChange}
                  className={classes.root}
                  >
                    <BottomNavigationAction 
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction 
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction 
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction 
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  КубГУ ФКТиПМ 212 группа 2021г.
                </Typography>
          </footer>
    </>
    );
}

export default App
