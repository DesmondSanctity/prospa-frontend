// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppWeeklySales,
  AppCurrentVisits,
  AppWebsiteVisits,
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Prospa">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Welcome back, Kathy</Typography>
          <Typography variant="h6">Here's what has been happening in the last 7 days </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <AppNewUsers />
          </Grid>

          <Grid item xs={12} md={12} lg={7}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={12} lg={5}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
