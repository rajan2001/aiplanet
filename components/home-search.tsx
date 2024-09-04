'use client';
import theme from '@/lib/provider';
import { Box, Chip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useMemo, useState } from 'react';
import { HomeItemCard } from './home-item-card';
import axios from 'axios';
import Filter from './filter';
import CancelIcon from '@mui/icons-material/Cancel';

export const HomeSearch = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<any>([]);
  const [filterData, setFilterData] = useState<any>([]);
  const [finalData, setFinalData] = useState([]);

  useEffect(() => {
    async function InitalData() {
      const res = await axios.get('/api');
      setData(res.data?.message);
    }
    InitalData();
  }, []);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const serchedData = useMemo(() => {
    return finalData.filter((data: any) => data?.name.toLowerCase().includes(search.toLowerCase()));
  }, [search, finalData]);

  useEffect(() => {
    const arr = data.filter((d: any) => {
      if (filterData.length === 0) {
        return !filterData.includes(d?.level) || !filterData.includes(d?.event);
      } else {
        return filterData.includes(d?.level) || filterData.includes(d?.event);
      }
    });

    setFinalData(arr);
  }, [filterData, data]);

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundColor: () => theme.palette.primary.dark,
            color: 'white',
          }}
          px={28}
          py={10}
        >
          <Typography
            textAlign={'center'}
            mb={8}
            fontWeight={600}
            variant="h5"
          >
            Explore Challenges
          </Typography>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-around'}
            gap={3}
          >
            <div className="flex-1">
              <div className={`relative rounded-md shadow-sm w-full`}>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <SearchIcon
                    aria-hidden="true"
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  id="text"
                  name="text"
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e)}
                  placeholder="Search"
                  className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <Filter
              filterData={filterData}
              setFilterData={setFilterData}
            />
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            flexWrap={'wrap'}
            gap={2}
            mt={4}
          >
            {filterData.map((data: any) => (
              <Chip
                key={data}
                label={data}
                sx={{
                  color: 'white',
                  backgroundColor: '#F8F9FD45',
                }}
                onDelete={() => setFilterData(filterData.filter((item: any) => item !== data))}
                deleteIcon={<CancelIcon />}
              />
            ))}
          </Box>
        </Box>
        <HomeItemCard data={serchedData} />
      </Box>
    </>
  );
};
