import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import 'fontsource-roboto';

const theme = createMuiTheme({
  palette: {
     primary: {
        light: 'rgb(255,127,17)',
        main: 'rgb(193,124,116)',
        dark: 'rgb(143,36,0)'
     },
     secondary: {
       light: 'rgb(254,239,236)',
       main: 'rgb(42,61,69)',
       dark: 'rgb(13,9,8)'
     },     
  }
  
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme = {theme}>
    <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);