import { SxProps, Theme } from '@mui/material';

export const useProductPageStyles = (): Record<string, SxProps<Theme>> => ({
  paper: {
    borderRadius: 4,
    p: { xs: 2, sm: 4 },
    bgcolor: '#fff',
  },
  image: {
    width: '100%',
    maxHeight: 300,
    objectFit: 'cover',
    borderRadius: 2,
    mb: 3,
  },
  infoBox: {
    borderRadius: 2,
    bgcolor: '#FAFAFA',
    border: '1px solid #E0E0E0',
    px: 2,
    py: 1.5,
    textAlign: 'center',
  },
  infoBoxMobile: {
    width: "100%",
    display: "flex",
    justifyContent: 'space-between'
  },
});