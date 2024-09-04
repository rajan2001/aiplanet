import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

export const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: 'white',
  textTransform: 'none',
  fontSize: 14,
  padding: '6px 14px',
  borderRadius: 10,
  fontWeight: 500,
}));
