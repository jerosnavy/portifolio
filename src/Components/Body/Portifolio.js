import { Box, Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { RenderSectionHeading } from '../Common'
import { useStyle } from './BodyStyles'
import Img1 from '../../images/5-2.jpg'
import Img2 from '../../images/5-3.jpg'
import Img3 from '../../images/5-4.jpg'
import Img4 from '../../images/5-6.jpg'
import Img5 from '../../images/5-8.jpg'
import Img6 from '../../images/5-9.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

function Portifolio() {
    const classes = useStyle()
    const portifolioData=[
        {url:Img1,title: "# Portifolio 1",link:"https://react-web1-izeds8xnl-jerosnavy.vercel.app/"},
        {url:Img2,title: "# Portifolio 2",link:""},
        {url:Img3,title: "# Portifolio 3",link:""},
        {url:Img4,title: "# Portifolio 4",link:""},
        {url:Img5,title: "# Portifolio 5",link:""},
        {url:Img6,title: "# Portifolio 6",link:""}
    ]

        return (
            <Box className={classes.sectionDark} id="Portifolio">
                <ScrollAnimation animateIn='fadeIn' >
                    <Grid container
                        styles={{display:"flex",justifyContent:"center",alignContent:"center"
                        }}>
                        <Grid item  xs={12} sm={8}>
                            {RenderSectionHeading({
                                smallTxt: 'Portifolio',
                                heading: " My Projects",
                                alignCenter: true
                            })}
                        </Grid> 
                    </Grid>
               
                  {/*----------Image Section--------------------*/}
                 <Container maxWidth='xl' >
                    <Grid container spacing={2} >
                        {portifolioData.map((item,i)=>(
                            <Grid item xs={6} sm={6} lg={4} key={i} >
                                <Box className={classes.imgContainer}>
                                    <img 
                                    src={item.url} 
                                    alt={item.title}
                                    className={classes.responsiveImage}
                                    />
                                    <Box className={classes.imageOverlay}>
                                        <Typography className={classes.overlayTitle}>
                                        {item.title}
                                        </Typography>
                                        <Button variant='contained'>Visit</Button>
                                     </Box>
                                </Box>
                        </Grid>
                        ))}
                    </Grid>
               </Container>
               </ScrollAnimation>  
            </Box>
        )
}

export default Portifolio
