import {
  AppBar,
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import IcecreamIcon from '@mui/icons-material/Icecream';
import { useState } from 'react';
import { useHeaderStyles } from './Header.styles';
import { useRouter } from 'next/router';

const navItems = [{ value: 'O início', path: '/' }];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const styles = useHeaderStyles();
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static" elevation={0} sx={styles.appBar}>
      <Container maxWidth="lg">
        <Box sx={styles.navWrapper}>
          <IcecreamIcon color='primary' />

          {!isMobile && (
            <Box sx={styles.navItems}>
              {navItems.map(({ value, path }, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={path === router.pathname ? styles.navItemActive : styles.navItem}
                  onClick={() => router.push(path)}
                >
                  {value}
                </Typography>
              ))}
            </Box>
          )}

          <Box sx={styles.iconsWrapper}>
            <IconButton>
              <PersonOutlineIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={styles.drawer} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navItems.map(({ value, path }, index) => (
              <ListItemButton onClick={() => router.push(path)}>
                <ListItem key={index} >
                  <ListItemText primary={value} />
                </ListItem>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}