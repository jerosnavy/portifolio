import { Box, IconButton, Typography } from '@material-ui/core'
import { useStyle } from "./Body/BodyStyles"
import React from 'react'
import { ArrowUpward } from '@material-ui/icons'
import { Link } from 'react-scroll'


function Footer() {
    var date= new Date()
    const classes=useStyle()
    return (
        <Box className={classes.footerContainer} id='Footer' >
            <IconButton 
                className={classes.iconButton}
                to='Header'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1200}
                component={Link}
                 >
                <ArrowUpward/>
            </IconButton>
            <Typography 
            variant='body1'
            component='h4' 
            align='center'
            color='inherit'
            >
                Developed and Designed by Snavy, All Right Reserved © {date.getFullYear()}
            </Typography>
        </Box>
    )
}

export default Footer
