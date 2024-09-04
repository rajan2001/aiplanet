'use client';
import theme from '@/lib/provider';
import { Box } from '@mui/material';
import { Rocket } from './svg/rocket';
import { CustomButton } from './button';
import { HomeFeature } from './home-feature';

export const HomeHero = () => {
  return (
    <>
      <Box>
        <Box
          px={15}
          py={10}
          display={'flex'}
          sx={{
            backgroundColor: () => theme.palette.primary.main,
            color: 'white',
          }}
          gap={20}
          alignItems={'center'}
          position={'relative'}
        >
          <Box
            pl={8}
            display={'flex'}
            flexDirection={'column'}
            gap={4}
            maxWidth={600}
            flex={1}
            justifyContent={'space-between'}
          >
            <Box
              fontSize={40}
              lineHeight={'56px'}
              fontWeight={500}
              fontFamily={theme.typography.fontFamily}
            >
              Accelerate Innovation with Global AI Challenges
            </Box>
            <Box
              maxWidth={500}
              lineHeight={'24px'}
              fontSize={18}
              fontWeight={400}
            >
              AI Challenges at DPhi simulate real-world problems. It is a great place to put your
              AI/Data Science skills to test on diverse datasets allowing you to foster learning
              through competitions.
            </Box>
            <Box>
              <CustomButton href="/createhackthon/new">Create Challege</CustomButton>
            </Box>
          </Box>
          <Rocket />
          <Box
            position={'absolute'}
            top={110}
            width={8}
            height={100}
            sx={{
              backgroundColor: '#FFCE5C',
            }}
          ></Box>
        </Box>
        <HomeFeature />
      </Box>
    </>
  );
};
