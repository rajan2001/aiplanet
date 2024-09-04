import { features } from '@/config';
import theme from '@/lib/provider';
import { Box } from '@mui/material';

export const HomeFeature = () => {
  return (
    <Box
      px={23}
      py={10}
      sx={{
        backgroundColor: () => theme.palette.primary.dark,
        height: '200px',
        color: 'white',
      }}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {features.map((feature) => (
          <Box
            key={feature.id}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            gap={15}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={3}
            >
              <Box
                height={55}
                width={55}
                sx={{
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '10px',
                }}
              >
                <feature.icon className="text-[#002A3B] h-[26px] w-[26px]" />
              </Box>
              <Box>
                <h1 className="font-semibold text-xl">{feature.heading}</h1>
                <p className="text-sm">{feature.subheadingL}</p>
              </Box>
            </Box>
            {feature.line && (
              <Box
                border={0.5}
                height={40}
              ></Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
