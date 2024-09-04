'use client';
import theme from '@/lib/provider';
import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const ChallengePage = ({ id }: any) => {
  const [data, setData] = useState<any>({});
  const [event, setEvent] = useState('');
  const [time, setTime] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function InitalData() {
      try {
        const res = await axios.get(`/api/${id}`);
        setData(res.data?.res);
      } catch (e) {
        console.log(e);
      }
    }
    if (id) {
      InitalData();
    }
  }, []);

  useEffect(() => {
    if (Date.parse(data?.startdate) - Date.parse(new Date().toString()) > 0) {
      setEvent('Starts on');
      setTime(data?.startdate);
    }
    if (
      Date.parse(data?.startdate) - Date.parse(new Date().toString()) < 0 &&
      Date.parse(data?.enddate) - Date.parse(new Date().toString()) > 0
    ) {
      setEvent('Ends in');
      setTime(data?.enddate);
    }
    if (Date.parse(data?.enddate) - Date.parse(new Date().toString()) < 0) {
      setEvent('Ended on');
      setTime(data?.enddate);
    }
  }, [data]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/${id}`);
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={4}
        px={23}
        py={10}
        sx={{
          backgroundColor: () => theme.palette.primary.dark,
          color: 'white',
        }}
      >
        <Box
          alignSelf={'self-start'}
          sx={{
            backgroundColor: '#FFCE5C',
            borderRadius: '6px',
            px: '14px',
            py: '3px',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          {' '}
          <AccessTimeIcon /> {event} {time && format(time, 'dd LLLL yyyy')} (India Standard Time)
        </Box>
        <Typography
          variant="h4"
          fontWeight={500}
        >
          {data?.name}
        </Typography>
        <Typography>{data?.description}</Typography>
        <Typography
          alignSelf={'self-start'}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '5px',
            px: '6px',
            py: '3px',
            fontSize: '14px',
            fontWeight: '500',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <InsertChartOutlinedOutlinedIcon />
          {data?.level}
        </Typography>
      </Box>
      <Box
        px={23}
        height={66}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{
          boxShadow: 3,
        }}
      >
        <Typography
          borderBottom={4}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            height: '100%',
            width: '8rem',
            borderColor: () => theme.palette.secondary.dark,
          }}
        >
          Overview
        </Typography>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={2}
        >
          <Link href={`/createhackthon/${id}`}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: () => theme.palette.secondary.dark,
              }}
            >
              Edit
            </Button>
          </Link>

          <Button
            onClick={handleDelete}
            variant="outlined"
            sx={{
              borderColor: 'red',
              color: 'red',
            }}
          >
            Delete
          </Button>
        </Box>
      </Box>
      {/* Designed for description below the Main Heading that why make this static data */}
      <Box
        px={23}
        py={8}
        color={'#64607D'}
        display={'flex'}
        flexDirection={'column'}
        gap={4}
        sx={{
          width: '90%',
        }}
      >
        <Typography fontWeight={500}>
          Butterflies are the adult flying stage of certain insects belonging to an order or group
          called Lepidoptera. The word means in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales overlapping in rows.
        </Typography>

        <Typography fontWeight={500}>
          An agency of the Governmental Wildlife Conservation is planning to implement an automated
          system based on computer vision so that it can identify butterflies based on captured
          images. As a consultant for this project, you are responsible for developing an efficient
          model.
        </Typography>

        <Typography fontWeight={500}>
          Your Task is to build an Image Classification Model using CNN that classifies to which
          class of weather each image belongs to.
        </Typography>
      </Box>
    </Box>
  );
};
