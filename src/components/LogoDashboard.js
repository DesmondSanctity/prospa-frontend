import { Link as RouterLink } from 'react-router-dom';
// material
import { Link } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo() {
  return (
    <Link component={RouterLink} to="/register" variant="h3" underline="none" sx={{color: 'pink', fontFamily: 'system-ui'}}>
      prospa
    </Link>
  );
}
