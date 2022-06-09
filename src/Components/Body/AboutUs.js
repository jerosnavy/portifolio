import { Box, Container, Grid,Hidden } from '@material-ui/core'
import React from 'react'
import { useStyle } from './BodyStyles'
import { RenderSectionHeading,CardMedia } from '../Common'
import Image from '../../images/snavy1.jpg'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { Dashboard, PermDeviceInformation, Toys } from '@material-ui/icons'
import ScrollAnimation from 'react-animate-on-scroll'

function AboutUs() {
    const classes = useStyle()
    const CardMediaData = [
        {
            title: "Web Development", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            Icon:<Dashboard />},
        {
            title: "Graphic Design", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
            Icon:<Toys />},
        {
            title: "Mobile Apps", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            Icon:<PermDeviceInformation />},
        {
            title: "Marketing", 
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            Icon:<AcUnitIcon/>}
    ]
    return (
        <Box className={classes.section} id='About'>
            <ScrollAnimation animateIn='fadeIn' >
                 <Container>
                <Grid container  spacing={1}>
                    <Grid item sm={5} >
                        <Box component={Hidden} xsDown>
                            <img 
                                src={Image} 
                                alt="about me" 
                                className={classes.responsiveImage} 
                            />
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        {RenderSectionHeading({
                            smallTxt:'ABOUT ME', 
                            heading:"Hello I'm Snavy",
                            description:"i'm Free lancer self taught MERN Stack and Flutter mobile Dev i used to do web and mobile app based on your need"
                            })},
                        <br/>

                        <Grid container>
                            {CardMediaData.map((item,i) => 
                            <Grid item xs={12} sm={6} key={i}>
                                {CardMedia({
                                    label:item.title,
                                    Icon:item.Icon,
                                    Desc:item.description,
                                })}
                            </Grid>
                            )}
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
            </ScrollAnimation>
        </Box>
    )
}

export default AboutUs
