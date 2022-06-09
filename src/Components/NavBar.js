import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Box, Hidden, IconButton } from '@material-ui/core';
import {useStyles} from './HeaderStyles'
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Link } from 'react-scroll';

export default function NavBar({navLinks, handleDrawerToggler}) {
  const classes = useStyles()
    
  return (
    <div >
      <AppBar position="fixed" className={classes.NavBar} >
        <Toolbar className={classes.ToolBar} >
          <Typography variant="h4" component='h6'>
            <div className={classes.NavbarLogo}>
            {"SNAVY"}<i className='fab fa-accusoft'></i>
            </div>
          </Typography>
        
          <Box component={Hidden} xsDown>
            <Box>
               {navLinks.map((item,i) => 
               <Button 
                  key={i} 
                  className={classes.NavLinks}
                  to={`${item.Id}`}
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1200}
                  component={Link}
                  color='inherit'
                  >
                 {item.label}
               </Button>
               )}
            </Box>
          </Box>
          <Box component={Hidden} smUp >
              <IconButton color='inherit' onClick={handleDrawerToggler}>
                <MenuOpenRoundedIcon/>
              </IconButton>
          </Box>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}