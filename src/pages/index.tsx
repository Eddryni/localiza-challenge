import { useQuery } from '@tanstack/react-query';
import { Box, Typography, Pagination, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { getProducts } from 'services';
import { LoadingSpinner, ProductCard } from 'components';
import { paginationStyles } from './index.styles';

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery({
    queryKey: ['sorvete', page],
    queryFn: () => getProducts('sorvete', page),
  });


  if (isLoading) return <LoadingSpinner />;

  if (error) return <Typography color="error">Erro ao carregar sorvetes.</Typography>;

  return (
    <Box>
      <Typography variant="h4" fontWeight='700' paddingBottom="24px">
        Sorvetes
      </Typography>
      <Paper elevation={2} sx={{ padding: 4, borderRadius: 4 }}>
        <Grid container spacing={3}>
          {data?.results?.map((product) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            shape="rounded"
            count={data?.pagination?.totalPages ?? page}
            page={page}
            onChange={(_, value) => setPage(value)}
            sx={paginationStyles}
          />
        </Box>
      </Paper>
    </Box>
  );
}
