import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

interface FooterStyles {
  footerWrapper: SxProps<Theme>;
  container: (isMobile: boolean) => SxProps<Theme>;
  topSection: (isMobile: boolean) => SxProps<Theme>;
  socialWrapper: (isMobile: boolean) => SxProps<Theme>;
  labelSocialMidia: SxProps<Theme>;
  iconsWrapper: SxProps<Theme>;
  divider: SxProps<Theme>;
  bottomSection: (isMobile: boolean) => SxProps<Theme>;
}

export const useFooterStyles = (): FooterStyles => ({
  footerWrapper: {
    mt: 6,
    bgcolor: 'primary.main',
    color: 'black',
    py: 4,
  },
  container: (isMobile) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'stretch',
    gap: 2,
  }),
  topSection: (isMobile) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'center' : 'flex-start',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    gap: isMobile ? 2 : 0,
  }),
  socialWrapper: (isMobile) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: 1.5,
  }),
  labelSocialMidia: {
    fontWeight: 600,
    alignSelf: "center"
  },
  iconsWrapper: {
    display: 'flex',
    gap: 1.5,
    '& svg': {
      color: "#000"
    }
  },
  divider: {
    borderColor: 'rgba(0,0,0,0.2)',
    width: '100%',
  },
  bottomSection: (isMobile) => ({
    textAlign: isMobile ? 'center' : 'left',
    width: '100%',
    pt: 1,
    '& a': {
      color: 'inherit',
    }
  }),
});