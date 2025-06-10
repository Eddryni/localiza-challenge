import { Box, Container, Divider, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useFooterStyles } from './Footer.styles';
import IcecreamIcon from '@mui/icons-material/Icecream';

export default function Footer() {
  const styles = useFooterStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="footer" sx={styles.footerWrapper}>
      <Container maxWidth="lg" sx={styles.container(isMobile)}>
        <Box sx={styles.topSection(isMobile)}>
          <IcecreamIcon />

          <Box sx={styles.socialWrapper(isMobile)}>
            <Typography variant="body2" sx={styles.labelSocialMidia}>
              Acompanhe nossas redes sociais:
            </Typography>
            <Box sx={styles.iconsWrapper}>
              <IconButton><YouTubeIcon /></IconButton>
              <IconButton><GitHubIcon /></IconButton>
              <IconButton><FacebookIcon /></IconButton>
              <IconButton><InstagramIcon /></IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={styles.divider} />

        <Box sx={styles.bottomSection(isMobile)}>
          <Typography variant="caption">
            Localiza Challenge © 2024 • <a href="#">Política de Privacidade</a> • <a href="#">Termos de Uso</a>
          </Typography>
        </Box>
      </Container >
    </Box >
  );
}