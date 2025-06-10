import React from 'react';
import { Box, Button, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import { useProductCardStyles } from './ProductCard.styles';
import { IProductCardProps } from './ProductCard.types'
import { useRouter } from 'next/router';


export const ProductCard: React.FC<IProductCardProps> = React.memo(({ id, title, image, description }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = useProductCardStyles(isMobile);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  const buttonComponent = () => {
    return (
      <>
        <Button sx={styles.button} onClick={handleClick} >
          Ver mais
        </Button >
      </>
    )
  }


  return (
    <Paper elevation={1} sx={styles.cardWrapper}>
      <Box sx={styles.imageWrapper}>
        <Image src={image}
          alt={title}
          width={0}
          height={0}
          style={styles.image as React.CSSProperties} />
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.description}>
          {description}
        </Typography>

        {isMobile && buttonComponent()}

      </Box>

      {!isMobile && buttonComponent()}

    </Paper>
  );
});


