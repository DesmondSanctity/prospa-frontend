// material
import { styled } from '@mui/material/styles';
import { Card, CardHeader, Box, CardContent, Stack } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import CampaignIcon from '@mui/icons-material/Campaign';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

// ----------------------------------------------------------------------

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  marginTop: 6,
  height: 10,
  borderRadius: 2,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8'
  }
}));

export default function AppCurrentVisits() {
  const listComponent = (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mb: 10 }}
      >
        <AccountBalanceIcon sx={{ fontSize: '20px', color: 'pink' }} />
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: 16,
            fontWeight: 'medium',
            textTransform: 'capitalize'
          }}
        >
          Bank Fees
        </Box>
        <Box sx={{ flexGrow: 2, mr: 10 }}>
          <BorderLinearProgress variant="determinate" value={90} />
        </Box>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mb: 10 }}
      >
        <NetworkCheckIcon sx={{ fontSize: '20px', color: 'cyan' }} />
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: 16,
            fontWeight: 'medium',
            textTransform: 'capitalize'
          }}
        >
          Data Fees
        </Box>
        <Box sx={{ flexGrow: 2, mr: 10 }}>
          <BorderLinearProgress variant="determinate" value={60} />
        </Box>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mb: 10 }}
      >
        <CampaignIcon sx={{ fontSize: '20px', color: 'purple'}} />
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: 16,
            fontWeight: 'medium',
            textTransform: 'capitalize'
          }}
        >
          Marketing
        </Box>
        <Box sx={{ flexGrow: 2, mr: 10 }}>
          <BorderLinearProgress variant="determinate" value={30} />
        </Box>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={{ mb: 5 }}
      >
        <ReceiptLongIcon sx={{ fontSize: '20px', color: 'green' }} />
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: 16,
            fontWeight: 'medium',
            textTransform: 'capitalize'
          }}
        >
          Transfers
        </Box>
          <Box sx={{ flexGrow: 2, mr: 10 }}>
            <BorderLinearProgress variant="determinate" value={10} />
          </Box>
      </Stack>
    </>
  );
  return (
    <Card>
      <CardHeader title="Cash outflow" sx={{ mb: 5 }} />
      <CardContent>{listComponent}</CardContent>
    </Card>
  );
}
