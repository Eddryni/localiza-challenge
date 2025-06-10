import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';

export const useHeaderStyles = (): Record<string, SxProps<Theme>> => ({
  appBar: {
    bgcolor: 'transparent',
    py: 2,
  },
  navWrapper: {
    backgroundColor: '#fff',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 4,
    py: 1.5,
    boxShadow: 1,
  },
  logo: {
    height: 40,
  },
  navItems: {
    display: 'flex',
    gap: 18,
  },
  navItem: {
    fontWeight: 500,
    color: 'text.primary',
    cursor: 'pointer',
  },
  navItemActive: {
    fontWeight: 'bold',
    color: 'primary.main',
    cursor: 'pointer',
  },
  iconsWrapper: {
    display: 'flex',
    gap: 2,
    alignItems: 'center',
  },
  drawer: {
    width: 250,
    padding: 2,
  },
});
