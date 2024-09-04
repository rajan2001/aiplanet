import theme from '@/lib/provider';
import { ItemCard } from './itemCard';
import { Box, Grid2 } from '@mui/material';

export const HomeItemCard = ({ data }: any) => {
  return (
    <Box
      px={23}
      py={10}
      sx={{ backgroundColor: () => theme.palette.primary.main }}
    >
      <Grid2
        container
        spacing={2}
      >
        {data.map((res: any) => (
          <ItemCard
            key={res._id}
            res={res}
          />
        ))}
      </Grid2>
    </Box>
  );
};
