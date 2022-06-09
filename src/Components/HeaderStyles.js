import {makeStyles} from '@material-ui/core'
import {Theme} from './Theme'
import Image from '../images/brandBanner.jpg'

export const useStyles = makeStyles((theme)=>({
        HeaderWraper:{
            width:'100',
            minHeight:'90vh',
            height:'auto',
            background:`linear-gradient(to bottom right,#04303140, #00606473), url(${Image})`,
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat'
        },
        HeaderContainer:{
            width:'85',
            minHeight:'90vh',
            height:'auto',
            display:'flex',
            padding:'20px',
            color:Theme.colors.base2,
            flexFlow:'column wrap',
            justifyContent:'center',
            fontFamily:'roboto'
        },
        HeaderTitle:{
            fontSize:'3rem',
            [theme.breakpoints.down('xs')]:{
                fontSize:'2rem',
                margin:theme.spacing(1,0)
            }
        },
        HeaderDesc:{
            fontSize:'2rem',
            margin:theme.spacing(1,0),
            [theme.breakpoints.down('xs')]:{
                fontSize:'1.5rem',
                margin:theme.spacing(2,0)
            }
            
        },
        NavBar:{
            backgroundColor:Theme.colors.base1,
            color:Theme.colors.base2,
            fontWeight:'bold'
        },
        ToolBar:{
            display:'flex',
            flexFlow:'row wrap',
            justifyContent:'space-between'
        },
        NavLinks:{
            color:Theme.colors.base2,
            fontWeight:'bold'
        },
        Decorator:{
            display:'flex',
            fontFamily:'roboto',
            fontWeight:'bolder',
            position:'relative',
            marginTop:'20px',
            '&:before':{
                width:'40px',
                height:'40px',
                backgroundColor:Theme.colors.primary,
                content:'""',
                borderRadius:'50%'
            }
        },
        DecoratorText:{
            color:Theme.colors.base2,
            lineHeight:'40px',
            position:'absolute',
            left:'25px'
        },
        DecoratorArrow:{
            lineHeight:'50px',
            position:'absolute',
            left:'95px',
            animationName:'upDown',
            animationDuration:'0.7s',
            animationIterationCount:'infinite'
        },
        NavbarLogo: {
            color: 'black',
            marginLeft: '20px',
            cursor: 'pointer',
            textDecoration: 'none',
            fontSize: '2rem',
            border: '3px ridge whitesmoke',
            borderRadius: '15px',
            alignItems: 'center',
            backgroundColor: 'whitesmoke',
            fontWeight: '900',
            '&:hover': {
                transition: 'all 0.2s ease-in',
                background: 'lime'
              }
          },

        //-------Creating Animations---------

        '@global':{
            '@keyframes upDown':{
                '0%':{
                    transform:'scale(0)',
                    paddingTop:'0px',
                },
                '100%':{
                    transform:'scale(1)',
                    paddingTop:'10px',
                }
            }
        },
        //-------Drawer styles---------------

        drawer: {
            width: "250px",
            height: "100vh",
          },
          drawerContainer: {
            width: "250px",
            height: "100vh",
            backgroundColor: 'rgba(189, 39, 39, 0.925)',
            

          },
          listItem: {
            color: Theme.colors.base2,
          },


    }))
    
 