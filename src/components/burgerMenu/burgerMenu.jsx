import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import burgerMenu from "../../assets/burger-menu.png";
import { useTranslation } from 'react-i18next';

import "./burgerMenu.scss"

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const {t} = useTranslation()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 180 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem disablePadding>
            {/* <ListItemButton> */}
                <div className="burger-list">
                  <a href="#">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary={t('main.nav.main-nav')} />
                      </ListItemButton>
                  </a>
                  <a href="#aboutUs">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary={t('main.nav.aboutUs')} />
                      </ListItemButton>
                  </a>
                  <a href="#rooms">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary={t('main.nav.rooms')} />
                      </ListItemButton>
                  </a>
                 <a href="#galery">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary={t('main.nav.galery')} />
                      </ListItemButton>
                 </a>
                 <a href="#contact">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary={t('main.nav.contact')} />
                      </ListItemButton>
                 </a>          
                </div>
            {/* </ListItemButton> */}
          </ListItem>
      </List>
      <Divider />
    
    </Box>
  );

  return (
    <div>
      <div className='img-Brg'>
        <Button onClick={toggleDrawer(true)}><img className='imgBurger' src={burgerMenu} alt="" /></Button>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}