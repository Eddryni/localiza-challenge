import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";


export const paginationStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  mt: 4,

  '& .MuiPaginationItem-root': {
    color: '#3C3C3C',
    fontWeight: 500,
    borderRadius: '8px',
    border: 'none',
    height: 36,
    minWidth: 36,
  },

  '& .Mui-selected': {
    backgroundColor: '#FFE6C6 !important',
    color: `#ff6f00 !important`,
    fontWeight: 600,
  },
};