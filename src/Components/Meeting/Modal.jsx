
import './Modal.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

function Modal(){
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng')
  const handleChange = (event) => {
  const selectedLaungage = event.target.value;
  i18n.changeLanguage(selectedLaungage)
}
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 220 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {[
               <h4 onClick={toggleDrawer(anchor,)}>X</h4>,
              <a className="navbar__link_modal" href="/">{t("navbar.link0")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#section">{t("navbar.link1")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#project">{t("navbar.link2")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#section">{t("navbar.link3")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#about">{t("navbar.link4")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#news">{t("navbar.link5")}</a>,
              <a onClick={toggleDrawer(anchor,)} className="navbar__link_modal" href="#message">{t("navbar.link6")}</a>,
              <div className="modal__box" onClick={handleChange} value={language}>
                <option onClick={toggleDrawer(anchor,)} id="modal__option" value="en">EN</option>
               <option onClick={toggleDrawer(anchor,)} id="modal__option" value="uz">UZ</option>
               <option onClick={toggleDrawer(anchor,)} id="modal__option" value="ru">RU</option>
              </div>,
              
               
             
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
         
        </Box>
      );

    return(
        <div className="modal">
         {[ 'left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
        </div>
    )
}


export default Modal