import theme from '@/lib/provider';
import { Box, Chip, Grid2, Typography } from '@mui/material';
import { CustomButton } from './button';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

export const ItemCard = ({ res }: any) => {
  const [time, setTime] = useState({
    minutes: 0,
    hours: 0,
    days: 0,
    total: 0,
  });

  useEffect(() => {
    let total = 0;
    if (Date.parse(res?.startdate) - Date.parse(new Date().toString()) > 0) {
      total = Date.parse(res?.startdate) - Date.parse(new Date().toString());
    }
    if (
      Date.parse(res?.startdate) - Date.parse(new Date().toString()) < 0 &&
      Date.parse(res?.enddate) - Date.parse(new Date().toString()) > 0
    ) {
      total = Date.parse(res?.enddate) - Date.parse(new Date().toString());
    }
    if (Date.parse(res?.enddate) - Date.parse(new Date().toString()) < 0) {
      total = 0;
    }
    setTime({
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
      total,
    });
  }, []);

  return (
    <Grid2 size={4}>
      <Link href={`/${res._id}`}>
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '15px',
            width: '346px',
            height: '509px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          {res?.image && (
            <div className='h-[170px] overflow-hidden'>
              <CldImage
                width="960"
                height="600"
                src={res?.image}
                sizes="100vw"
                alt="Description of my image"
                className="object-cover"
              />
            </div>
          )}
          <Box
            py={4}
            sx={{
              marginX: 'auto',
              width: '70%',
              height: '100%',
            }}
            display={'flex'}
            flexDirection={'column'}
            gap={3}
            alignItems={'center'}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              flexDirection={'column'}
              gap={2}
            >
              <Chip
                size="small"
                sx={{
                  fontSize: '10px',
                  borderRadius: '8px',
                  backgroundColor: `${(res?.event === 'Active' && '#44924C25') || (res?.event === 'Upcoming' && '#F2C94C25') || '#FF3C0025'}`,
                }}
                label={res?.event}
              />
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: 500,
                  textAlign: 'center',
                }}
              >
                {res.name}
              </Typography>
            </Box>
            {res?.event === 'Past' ? (
              <Typography
                height={'103px'}
                width={'178px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                {format(res?.enddate, 'dd LLLL yyyy')}
              </Typography>
            ) : (
              <Box
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                gap={2}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                  }}
                >
                  {(res?.event === 'Active' && 'Ends in') ||
                    (res?.event === 'Upcoming' && 'Starts in') ||
                    'Ended on'}
                </Typography>
                <Box
                  display={'flex'}
                  gap={2}
                  sx={{
                    fontSize: '32px',
                    fontWeight: 600,
                  }}
                >
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    {time.days}
                    <Typography fontSize={12}>Days</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      pt: '14px',
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: '100px',
                        backgroundColor: 'black',
                        p: '3px',
                      }}
                    ></Box>
                    <Box
                      sx={{
                        borderRadius: '100px',
                        backgroundColor: 'black',
                        p: '3px',
                      }}
                    ></Box>
                  </Box>

                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    {time.hours}
                    <Typography fontSize={12}>Hours</Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      pt: '14px',
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: '100px',
                        backgroundColor: 'black',
                        p: '3px',
                      }}
                    ></Box>
                    <Box
                      sx={{
                        borderRadius: '100px',
                        backgroundColor: 'black',
                        p: '3px',
                      }}
                    ></Box>
                  </Box>
                  <Box
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    {time.minutes}
                    <Typography fontSize={12}>Mins</Typography>
                  </Box>
                </Box>
              </Box>
            )}
            <CustomButton
              variant="contained"
              sx={{
                backgroundColor: () => theme.palette.secondary.dark,
                width: '100%',
              }}
            >
              <TaskAltIcon
                sx={{
                  height: '18px',
                  width: '18px',
                  mr: '1rem',
                }}
              />{' '}
              Participate Now
            </CustomButton>
          </Box>
        </Box>
      </Link>
    </Grid2>
  );
};
