import * as Yup from 'yup';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, TextField, IconButton, InputAdornment, MenuItem, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('First name required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    countryCode: Yup.string().required('code required'),
    phoneNo: Yup.number().required('Phone Number is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '',
      phoneNo: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/register-final', { replace: true });
    }
  });

  const codes = [
    {
      value: '+234',
      label: 'Nigeria',
    },
    {
      value: '+233',
      label: 'Ghana',
    },
  ];

  
  const { errors, touched, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate>
        <Stack spacing={3}>
          <TextField
            fullWidth
            variant="filled"
            label="First name"
            {...getFieldProps('firstName')}
            error={Boolean(touched.firstName && errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />

          <TextField
            fullWidth
            variant="filled"
            label="Last name"
            {...getFieldProps('lastName')}
            error={Boolean(touched.lastName && errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />

          <Grid container spacing={0.6}>
            <Grid item xs={3}>
            <TextField
                    select
                    fullWidth
                    variant="filled"
                    label="Country"
                    {...getFieldProps('countryCode')}
                    error={Boolean(touched.countryCode && errors.countryCode)}
                    helperText={touched.countryCode && errors.countryCode}
                  >
                    {codes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                  </TextField>
            </Grid>
            <Grid item xs={9}>
            <TextField
                        fullWidth
                        variant="filled"
                        label="Mobile Number"
                        {...getFieldProps('phoneNo')}
                        error={Boolean(touched.phoneNo && errors.phoneNo)}
                        helperText={touched.phoneNo && errors.phoneNo}
                      />
            </Grid>
          </Grid>


          <TextField
            fullWidth
            variant="filled"
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            variant="filled"
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            color="secondary"
            variant="contained"
            loading={isSubmitting}
          >
            Next
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
