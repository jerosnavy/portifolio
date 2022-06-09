import { Avatar, Box,Grid,Typography } from "@material-ui/core"
import { useStyle as BodyStyles } from "./Body/BodyStyles"
import { useStyles } from "./HeaderStyles"


export const Decorator= ({label,withIcon,Icon,styles}) => {
    const classes= useStyles()
    return (
        <Box className={classes.Decorator} style={styles}>
                    <Typography component='span'  className={classes.DecoratorText}>
                        {label}
                    </Typography>
                    {withIcon ?
                        <Typography component='span'  className={classes.DecoratorArrow}>
                        {Icon}
                    </Typography> : null
                    }
                </Box>
    )
}

export const Divider = ({style}) =>{
    const classes=BodyStyles()
    return(
        <div className={classes.divider} style={style} ></div>
    )
}


export const RenderSectionHeading = ({smallTxt,description,heading,alignCenter}) =>{
    const classes= BodyStyles();

   return (
            <Box className={classes.sectionHeadingCont}>
                {Decorator({
                    label:smallTxt, 
                    withIcon:false, 
                    styles:alignCenter ? {width:'100px', margin:'10px auto'} : {}
                    })}
                <Typography variant='h4'
                    align={alignCenter? 'center' : 'left'} 
                    className={classes.sectionHeading} >
                    {heading} 
                </Typography>
                {Divider({
                    style:alignCenter? {margin:"16px auto"}:{margin:"16px 0px"
                }})}
                <Typography 
                    variant='body1' 
                    component='h6' 
                    className={classes.sectionDesc}
                    align={alignCenter ? 'center' : 'left'}
                    >
                {description} 
                </Typography>
            </Box>)
};
export const CardMedia = ({label,Desc,Icon,key}) =>{
    const classes= BodyStyles()
    return(  
        <Grid container style={{ marginTop: "16px" }}>
            <Grid item xs={3} className={classes.avatarCont}>
                <Avatar className={classes.avatar}>{Icon}</Avatar>
            </Grid>
            <Grid item xs={9} className={classes.mediaTxt}>
                <Typography variant='body1' component='h6' >{label}</Typography>
                <Typography variant='caption' >{Desc} </Typography>
            </Grid>
        </Grid>
        )
}