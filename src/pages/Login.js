import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { LoginForm } from '../components/authentication/login';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
  backgroundColor: '#7851a9'
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Login | Prospa">
      <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Sign Up
        </Link>
      </AuthLayout>

      <MHidden width="mdDown">
        <SectionStyle>
        <Typography variant="h3" sx={{ px: 5, mt: 5, color: 'white', fontFamily: 'system-ui' }}>
            Create multiple sub-accounts
          </Typography>
          <Typography sx={{ color: 'white', px: 5, mt: 2, mb: 25, fontFamily: 'system-ui'  }}>
              Organize your bussiness account easily with multiple accounts
            </Typography>
          <img alt="login" src="/static/illustrations/illustration-register-login.png" />
        </SectionStyle>
      </MHidden>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Welcome back to Prospa
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>An account with powerful personalised tools all in one place</Typography>
          </Stack>

          <LoginForm />

          <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Sign Up
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
