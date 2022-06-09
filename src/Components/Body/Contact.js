import React,{useState} from 'react'
import {useStyle} from './BodyStyles'
import { Box, Button, Container, Grid, Hidden } from "@material-ui/core"
import { RenderSectionHeading } from '../Common'
import Img from '../../images/contactus.jpg'
import { RenderInputText } from './ContactForm'
import ScrollAnimation from 'react-animate-on-scroll'
function Contact() {

    const classes = useStyle()
    const [state,setState]=useState({
        data:{
            firstname:'',
            email:'',
            messages:''
        },
        errors:{}
    })
    const handleOnChange =({target})=>{
        const {data, errors} = state

        //----Setting Errors---------
        
        target.value.length <= 3 
        ? (errors[target.name] = `${target.name} name must at least 3 characters`)
        : (errors[target.name]="")

        data[target.name] = target.value
        setState({data,errors})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Submitted", state.data)
        // api call to psot data
    }
    return (
        <Box className={classes.section} id='Contact'>
            <ScrollAnimation animateIn='fadeIn' >
                <Container maxWidth='xl'>
                    <Grid container spacing={1}>
                        <Grid item sm={5}>
                       <Box component={Hidden} xsDown >
                           <img
                                src={Img}
                                alt='About Me'
                                className={classes.responsiveImage}
                           />
                       </Box>
                   
                    </Grid>
                        <Grid item xs={12} sm={7}>
                        {RenderSectionHeading({
                            smallText: " Contact Me",
                            heading: "Seems To be Interesting",
                            description:
                            "Got my Portfolio seen , than feel free to contact me for your future projects",
                        })}
                        <br/>
                        <form onSubmit={handleSubmit}  >
                            <Grid 
                                container
                                direction='row'
                                justify='center'
                                alignItems='center'
                            >
                                <Grid item xs={12} sm={10} style={{ marginBottom:"16px" }} >
                                    {RenderInputText({
                                        label:'FirstName',
                                        name:'firstname',
                                        state:state,
                                        onChange:handleOnChange
                                        }) }
                                </Grid>
                                <Grid item xs={12} sm={10} style={{ marginBottom:"16px" }}>
                                    {RenderInputText({
                                        label:'Email', 
                                        name:'email',
                                        state:state,
                                        onChange:handleOnChange
                                        }) }
                                </Grid>
                                <Grid item xs={17} sm={10} style={{ marginBottom:"16px" }}>
                                    {RenderInputText({
                                        label:'Messages', 
                                        name:'messages',
                                        state:state,
                                        rows:5,
                                        multiline: true,
                                        onChange:handleOnChange
                                        }) }
                                </Grid>
                                <Grid item xs={12} sm={8} style={{ marginBottom: "16px" }}>
                                    <Button
                                        variant='outlined'
                                        type='submit'
                                        fullWidth={true}
                                        className={classes.submitBtn}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                   
                   </Grid>
               </Grid>
           </Container> 
            </ScrollAnimation>
        </Box>
    )
}

export default Contact
