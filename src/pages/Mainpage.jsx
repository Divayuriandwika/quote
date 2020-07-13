import React, {useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Input from '../component/Input'
import {useDispatch} from 'react-redux'
import {getAllItem} from '../redux/actions/quoteActions'
import {useSelector} from 'react-redux'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DYD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    // background: 'lightblue'
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const dispatch = useDispatch()

  useEffect(() => {
   
        dispatch(getAllItem());

}, [dispatch]);

console.log('test')

const allItems = useSelector((state) => state.allItems)
  console.log(allItems)


  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>

          <Grid container spacing={3} style={{justifyContent: 'center'}}>
            <Grid item xs={12} md={12} lg={12}>
                <div className={fixedHeightPaper}>
                <h1 style={{textAlign: 'center'}}>Kanye-West Quote</h1>
                
                <p>{allItems.quote}</p>
            
                </div>
                </Grid>
                

                <Grid item xs={12} md={12} lg={12} style={{textAlign: 'center'}}>
                    <div>
                <Button size="small" color="primary" >
                    Get Quote
               </Button>
               </div>
               </Grid>
               <Grid item xs={12} md={12} lg={12}style={{textAlign: 'center'}}>
                   <div>
               <Button size="small" color="primary">
                    Add Favorite
               </Button>
              </div>
            </Grid>
            </Grid>


            <Grid container spacing={3} style={{justifyContent: 'center'}}>
            <Grid item xs={12} md={12} lg={6}>
              <div className={classes.paper}>
               <Input/>
              </div>
            </Grid>
            </Grid>

           

          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}