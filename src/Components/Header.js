import React, { useState } from 'react'
import {Box, Typography} from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import NavBar from './NavBar'
import { ArrowDownwardRounded } from '@material-ui/icons'
import { Decorator } from './Common'
import DrawerComp from './DrawerComp'
import Typed from 'react-typed'


const Header=()=> {
    const classes = useStyles()
    const [initialState, setInitialState] = useState(false)

    const handleDrawerToggler = () =>{
        setInitialState(!initialState)
    }

    const navLinks = [
        {label:'About', Id:'About'},
        {label:'Portifolio', Id:'Portifolio'},
        {label:'Contact', Id:'Contact'}
      ]

    return (
        <Box className={classes.HeaderWraper} id='Header'>
            <NavBar 
                navLinks={navLinks} 
                handleDrawerToggler = {handleDrawerToggler} 
            />
            <DrawerComp
                initialState={initialState} 
                navLinks={navLinks} 
                handleDrawerToggler = {handleDrawerToggler} 
            />
            
            <Box className={classes.HeaderContainer}>
                <Typography variant='h3' component='h4' className={classes.HeaderTitle} >
                 I'm a <span style={{ paddingRight: "5px" }}></span>
                    <Typed
                        strings={[" MERN Webdeveloper,", "Flutter MobileDev,", "Node,Django,Fast,API Dev,"]}
                        typeSpeed={30}
                        backSpeed={50}
                        loop
                    />
                </Typography>
                <Typography variant='h3' component='h4' className={classes.HeaderDesc} >
                   I build website or mobile app based on your need.............
                </Typography>
                {Decorator(
                    {label:"About Me", 
                    withIcon:true,
                    Icon:<ArrowDownwardRounded/>
                })}
            </Box>
        </Box>
    )
}

export default Header
