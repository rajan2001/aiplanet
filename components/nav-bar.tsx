import { Box } from '@mui/material';
import { Logo } from './logo';

export const NavBar = () => {
  return (
    <Box
      height={64}
      display={'flex'}
      alignItems={'center'}
      px={10}
      position={'fixed'}
      top={0}
      zIndex={99}
      width={'100%'}
      sx={{
        backgroundColor: 'white',
      }}
    >
      <Logo />
    </Box>
  );
};
