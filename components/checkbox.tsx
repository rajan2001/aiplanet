import theme from '@/lib/provider';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useMemo, useState } from 'react';

export const CheckboxItem = ({ data, setFilterData, filterData }: any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  useEffect(() => {
    if (checked) {
      setFilterData([...filterData, data.label]);
    } else {
      const finaldata = filterData.filter((filter: any) => filter !== data.label);
      setFilterData(finaldata);
    }
  }, [checked]);

  useMemo(() => {
    filterData.find((d: any) => d === data.label) && setChecked(true);
  }, [filterData]);

  return (
    <>
      {' '}
      <Box
        display={'flex'}
        alignItems={'center'}
        gap={3}
      >
        <Checkbox
          sx={{
            p: 0,
            '&.Mui-checked': {
              color: () => theme.palette.secondary.dark,
            },
          }}
          size="small"
          checked={checked}
          onChange={handleChange}
        />
        <Typography>{data.label}</Typography>
      </Box>
    </>
  );
};
