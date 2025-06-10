import { InferGetServerSidePropsType } from 'next';
import { Box, Typography, CardMedia, Container, Grid, Paper, useMediaQuery, Divider } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getProductById } from 'services';
import { useProductPageStyles } from 'styles/productPage.styles';
import { theme } from '@styles/theme';
import { getServerSideProps } from '../../utils/productPage.utils';
import { LoadingSpinner, SearchError } from 'components';
import { Fragment } from 'react';


export default function ProductPage({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const styles = useProductPageStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductById(id),
  });

  if (isLoading) return <LoadingSpinner />;

  if (error) return <SearchError />;

  return (
    <Box sx={styles.pageWrapper}>
      <CardMedia
        component="img"
        image={data?.image}
        alt={data?.title}
        sx={styles.image}
      />

      <Container maxWidth="md">
        <Paper elevation={0} sx={styles.paper}>

          <Typography variant="h5" fontWeight={700} gutterBottom>
            {data?.title}
          </Typography>

          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            Informações
          </Typography>

          <Grid container spacing={1.5} mb={3}>
            {data?.details?.map(({ label, value }, index) => {

              if (isMobile && index > 3) {
                return (
                  <Fragment key={index}>
                    <Box sx={styles.infoBoxMobile} >
                      <Typography variant="caption" display="block" fontWeight={600}>
                        {label}
                      </Typography>
                      <Typography variant="body2">{value}</Typography>

                    </Box>
                    <>
                      <Divider component="div" style={{ width: '100%' }} />
                    </>
                  </Fragment>
                )
              }

              return (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <Box sx={styles.infoBox}>
                    <Typography variant="caption" display="block" fontWeight={600}>
                      {label}
                    </Typography>
                    <Typography variant="body2">{value}</Typography>
                  </Box>
                </Grid>)
            })}
          </Grid >

          <Typography variant="subtitle1" fontWeight={600} gutterBottom>
            História do sabor {data?.title.toLowerCase()}
          </Typography>

          <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
            {data?.description}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
