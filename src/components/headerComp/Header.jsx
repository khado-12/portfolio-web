import { Box} from '@mui/material'
// import { makeStyles } from "@material-ui/core";
import { makeStyles } from '@mui/material/styles';

import  React from 'react'

const useStyles=makeStyles({
    headrClr:{
        color:"red"
    }    
    })
const Header = () => {
   const classes=useStyles();
  return (
  <Box className={classes.headrClr} >
    hellow world
   
  </Box>

  )
}

export default Header
