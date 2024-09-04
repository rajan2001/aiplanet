'use client';
import { sections } from '@/config';
import theme from '@/lib/provider';
import { Box, Grid2, Typography } from '@mui/material';

export const HomeSection = () => {
  return (
    <Box
      px={23}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={8}
    >
      <Box
        sx={{
          fontSize: '32px',
          fontWeight: 500,
        }}
      >
        Why Participate in
        <Box
          display={'inline'}
          ml={1}
          sx={{
            color: () => theme.palette.secondary.main,
          }}
        >
          AI Challenges?
        </Box>
      </Box>
      <Grid2
        container
        spacing={2}
      >
        {sections.map((section) => (
          <Grid2
            size={6}
            key={section.id}
            sx={{
              backgroundColor: '#F8F9FD',
              borderRadius: '8px',
              paddingY: '3rem',
              paddingX: '2rem',
            }}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              gap={2}
            >
              <Box>
                <section.icon className="w-[47px] h-[47px] text-[#44924C]" />
              </Box>
              <Typography variant="h6">{section.heading}</Typography>
              <Typography
                variant="subtitle2"
                fontWeight={400}
                fontSize={16}
                color="#64607D"
              >
                {section.paragraph}
              </Typography>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};
