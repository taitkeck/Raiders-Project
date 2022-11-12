import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider, createStyles, Theme, createTheme, makeStyles } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'; 
import "./app.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TextField from '@mui/material/TextField';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import AddIcon from '@mui/icons-material/Add';


interface State {
  password: string;
  showPassword: boolean;
}



// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});



interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}


export default function MyApp(props: MyAppProps, useStyles : () => any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (<>
    <Box sx={{ flexGrow: 1 }} className = "box">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            // sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Raiders of the Lost Parts
            <IconButton
              className="messageicon"
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              // sx={{ mr: 2 }}
            >
              <MessageIcon />
            </IconButton>
            <IconButton
              className="addicon"
              size="large"
              edge="start"
              color="inherit"
              aria-label="home"
              
              sx={{ mr: 2 }}
            >
              <AddIcon />
            </IconButton>
          </Typography>
          
          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Login</Button>
          <Box>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Login"}</DialogTitle>
              <DialogContent className="logincard">
                <DialogContentText id="alert-dialog-slide-description">
                  <Box
                    component="form"
                    sx={{
                      '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField id="outlined-basic" label="Username" variant="filled" /><br />
                    {/* <TextField id="filled-basic" label="Password" variant="filled" /> */}
                    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                  </Box>
                </DialogContentText>
                <div className="forgot" >
                  <a href="">Forgot Username? </a>
                  <a href=""> Password?</a>
                </div>
                <a href="" className="makeacount">Make an Acount</a>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Login</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    <Box className="cards">
      <Card sx={{ minWidth: 275 }} className = "tirecard">
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            Tire
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <img  className="tireimg" src="tire.jpg" alt="Tire" width="125px"/>
          <Typography variant="body2">
            <br />
            This is a tire you could buy.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 275 }} className = "brakecard">
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography> */}
          <Typography variant="h5" component="div">
            Brakes
          </Typography>
          {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography> */}
          <img  className="brakeimg" src="brakes.jpg" alt="Tire" width="200px"/>
          <Typography variant="body2">
            <br />
            These are brakes you could buy.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  </>);
}
