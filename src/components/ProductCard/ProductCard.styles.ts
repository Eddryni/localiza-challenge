
import { SxProps, Theme } from '@mui/material';

export const useProductCardStyles = (isMobile: boolean): Record<string, SxProps<Theme>> => ({
  cardWrapper: {
    borderRadius: '12px',
    border: '1px solid #EAEAEA',
    padding: '16px',
    backgroundColor: '#fff',
    gap: isMobile ? 2 : 1,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    flexDirection: isMobile ? 'row' : 'column',
    alignItems: isMobile ? 'center' : 'stretch',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: isMobile ? 60 : '100%',
    height: isMobile ? 60 : 200,
    mx: isMobile ? 0 : 'auto',
  },
  image: {
    maxWidth: '100%',
    width: isMobile ? 40 : 80,
    height: isMobile ? 60 : 120,
    objectFit: 'contain',
  },
  title: {
    fontSize: '14px',
    fontWeight: 600,
  },
  description: {
    fontSize: '12px',
    color: '#888',
    marginBottom: 1,
  },
  button: {
    border: '1px solid #FFA53F',
    borderRadius: '8px',
    color: '#000',
    fontWeight: 700,
    textTransform: 'none',
    px: 4,
    '&:hover': {
      backgroundColor: '#FFF3E0',
    },
    width: '100%'
  },
});