import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const useFooterStyles = (): Record<string, any> => ({
  footerWrapper: {
    mt: 6,
    bgcolor: 'primary.main',
    color: 'black',
    py: 4,
  },
  container: (isMobile: boolean): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: isMobile ? 'center' : 'stretch',
    gap: 2,
  }),
  topSection: (isMobile: boolean): SxProps<Theme> => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'center' : 'flex-start',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    gap: isMobile ? 2 : 0,
  }),
  socialWrapper: (isMobile: boolean): SxProps<Theme> => ({
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
  bottomSection: (isMobile: boolean): SxProps<Theme> => ({
    textAlign: isMobile ? 'center' : 'left',
    width: '100%',
    pt: 1,

    '& a': {
      color: 'inherit',
    }
  }),
});
