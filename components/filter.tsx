import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box } from '@mui/material';
import { filterlevel, filterStatus } from '@/config';
import { CheckboxItem } from './checkbox';

export default function Filter({ setFilterData, filterData }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'gray',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 300ms',
          minWidth: `${anchorEl && '290px'}`,
        }}
        onClick={handleClick}
      >
        Filter{' '}
        <KeyboardArrowUpIcon
          sx={{
            ml: 1,
            rotate: `${!anchorEl && '180deg'}`,
          }}
        />
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          width={290}
          px={2}
          pb={4}
          pt={2}
          sx={{
            color: 'gray',
            boxShadow: 0,
          }}
        >
          <Typography mb={2}>Status</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={2}
          >
            {filterStatus.map((status) => (
              <CheckboxItem
                key={status.id}
                data={status}
                setFilterData={setFilterData}
                filterData={filterData}
              />
            ))}

            <Typography
              mb={2}
              borderTop={1}
              pt={2}
              borderColor={'#ECECEC'}
            >
              Level
            </Typography>

            {filterlevel.map((level) => (
              <CheckboxItem
                key={level.id}
                data={level}
                setFilterData={setFilterData}
                filterData={filterData}
              />
            ))}
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
