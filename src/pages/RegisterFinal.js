import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import { RegisterFormFinal } from '../components/authentication/register';

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

export default function RegisterFinal() {
  return (
    <RootStyle title="Register | Prospa">
      <AuthLayout>
        Already a member? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
          Sign In
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
          <img alt="register" src="/static/illustrations/illustration-register-login.png" />
        </SectionStyle>
      </MHidden>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Open a new business account
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              A short description comes here
            </Typography>
          </Box>

          <RegisterFormFinal />

          <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
            By registering, I agree to Prospa&nbsp;
            <Link underline="always" sx={{ color: 'pink' }}>
              Terms of Service
            </Link>
            &nbsp;and&nbsp;
            <Link underline="always" sx={{ color: 'pink' }}>
              Privacy Policy
            </Link>
            .
          </Typography>

          <MHidden width="smUp">
            <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
              Already have an account?&nbsp;
              <Link to="/login" component={RouterLink}>
                Login
              </Link>
            </Typography>
          </MHidden>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
