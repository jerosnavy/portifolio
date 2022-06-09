import React from 'react'
import { Box, Button, Drawer, List, ListItem, ListItemText} from '@material-ui/core'
import { useStyles } from './HeaderStyles'
import { Link } from 'react-scroll'

function DrawerComp({initialState, handleDrawerToggler, navLinks}) {

    const classes = useStyles()
    return (
        <Drawer anchor='left' open={initialState} onClose={handleDrawerToggler} className={classes.drawer} >
            <Box className={classes.drawerContainer}>
                <List style={{paddingTop:'30px'}} >
                    {navLinks.map((item,i) => (
                    <ListItem key={i} className={classes.listItem} >
                        <ListItemText>
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
                        </ListItemText>
                    </ListItem>
                
                ))}
                </List>
            </Box>
        </Drawer>
    )
}

export default DrawerComp
