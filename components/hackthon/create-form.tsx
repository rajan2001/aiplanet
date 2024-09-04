'use client';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Box, Button, Typography } from '@mui/material';
import theme from '@/lib/provider';
import { useEffect, useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import axios from 'axios';
import toast from 'react-hot-toast';

const Initaldata = {
  name: '',
  startdate: '',
  enddate: '',
  description: '',
  image: '',
  level: 'Easy',
  event: '',
};

export const CreateHackthon = ({ edit }: any) => {
  const [inputs, setInputs] = useState(Initaldata);
  const [submit, setSubmit] = useState(false);

  const handleChange = (e: any) => {
    if (e.target.name === 'enddate') {
      if (Date.parse(e.target.value) < Date.parse(inputs.startdate)) {
        setInputs((pre) => {
          return { ...pre, startdate: '' };
        });
      }
    }
    setInputs((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (inputs.image === '') {
      return;
    }

    try {
      setSubmit(true);
      if (edit) {
        await axios.patch(`/api/${edit._id}`, { ...inputs });
      } else {
        await axios.post('/api', { ...inputs });
      }

      toast.success(`${edit ? 'challenge updated' : 'Challenge Created'}`);
      {
        !edit && setInputs(Initaldata);
      }
    } catch (error) {
      console.log(error);
      toast.error('Oops something went wrong!');
    } finally {
      setSubmit(false);
    }
  };

  useEffect(() => {
    if (edit) {
      setInputs(edit);
    }
  }, [edit]);

  useEffect(() => {
    if (Date.parse(inputs?.startdate) - Date.parse(new Date().toString()) > 0) {
      setInputs({ ...inputs, event: 'Upcoming' });
    }
    if (
      Date.parse(inputs?.startdate) - Date.parse(new Date().toString()) < 0 &&
      Date.parse(inputs?.enddate) - Date.parse(new Date().toString()) > 0
    ) {
      setInputs({ ...inputs, event: 'Active' });
    }
    if (Date.parse(inputs?.enddate) - Date.parse(new Date().toString()) < 0) {
      setInputs({ ...inputs, event: 'Ended' });
    }
  }, [inputs.startdate, inputs.enddate]);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Box
        px={10}
        mb={6}
        height={100}
        alignContent={'center'}
        sx={{
          backgroundColor: '#F8F9FD',
        }}
      >
        <Typography
          fontSize={'24px'}
          fontWeight={500}
        >
          {' '}
          Challenge Details
        </Typography>
      </Box>

      <Box
        px={10}
        mb={10}
        sx={{
          width: '70%',
        }}
        display={'flex'}
        flexDirection={'column'}
        gap={4}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Challenge Name
          </label>
          <div className="mt-6">
            <input
              id="name"
              name="name"
              value={inputs.name}
              onChange={handleChange}
              type="text"
              required
              className="block w-[60%] rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="startdate"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Start Date
          </label>
          <div className="mt-6">
            <input
              id="startdate"
              name="startdate"
              type="date"
              value={inputs.startdate}
              onChange={handleChange}
              required
              className="block w-[60%] rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="enddate"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            End Date
          </label>
          <div className="mt-6">
            <input
              id="enddate"
              name="enddate"
              type="date"
              value={inputs.enddate}
              onChange={handleChange}
              required
              className="block w-[60%] rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Description
          </label>
          <div className="mt-6">
            <textarea
              rows={6}
              cols={50}
              id="name"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              required
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Image
          </label>

          {inputs.image && (
            <div className="w-[250px]">
              <CldImage
                width="960"
                height="600"
                src={inputs.image}
                sizes="100vw"
                alt="Description of my image"
                className="mt-6 object-cover"
              />
            </div>
          )}
          <div className="flex items-center justify-center bg-slate-100 py-2 px-4 text-sm w-[20%]  rounded-lg mt-6">
            <CldUploadWidget
              uploadPreset="qxctcuqd"
              onSuccess={(results: any) => {
                setInputs((pre) => {
                  return { ...pre, image: results.info.secure_url };
                });
              }}
            >
              {({ open }) => {
                return (
                  <button onClick={() => open()}>
                    Upload <CloudUploadIcon className=" h-4 w-4 ml-2" />
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>

        <div>
          <label
            htmlFor="level"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Level Type
          </label>
          <div className="mt-6">
            <select
              id="level"
              name="level"
              defaultValue="Easy"
              onChange={handleChange}
              required
              className="mt-2 block w-[30%] rounded-md border-0 py-1.5 px-2 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>
        </div>

        <Box>
          <Button
            disabled={submit}
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: () => theme.palette.secondary.dark,
            }}
          >
            Create Challenge
          </Button>
        </Box>
      </Box>
    </form>
  );
};
