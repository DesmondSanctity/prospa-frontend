import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Grid
} from '@mui/material';
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { grey, lightGreen, pink } from '@mui/material/colors';

export default function ControlledAccordions() {
  const navigate = useNavigate();

  const RegisterSchema = Yup.object().shape({
    registered: Yup.string(),
    unregistered: Yup.string(),
    freelancer: Yup.string()
  });

  const formik = useFormik({
    initialValues: {
      registered: '',
      unregistered: '',
      freelancer: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {
      navigate('/dashboard', { replace: true });
    }
  });

  const [selectedValue, setSelectedValue] = useState('');

  const handleChangeB = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChangeB,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  const { handleSubmit, isSubmitting } = formik;

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const registered = (
        <Accordion
          sx={{ mb: 2}}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
            <Grid container spacing={0.5}>
              <Grid item xs={2}>
                <Radio
                {...controlProps('registered')} 
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600]
                    }
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography sx={{ color: grey }}>
                  I have a registered business / charity with CAC
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ ml: 5 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Account in your business name" />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Send to and receive transfers from all Nigerian banks" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Tools for business management" />
                  </ListItem>
                </List>
              </nav>
            </Box>
          </AccordionDetails>
        </Accordion>
  );

  const unregistered = (
        <Accordion
          sx={{ mb: 2}}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
            <Grid container spacing={0.5}>
              <Grid item xs={2}>
              <Radio
                {...controlProps('unregistered')} 
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600]
                    }
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography sx={{ color: grey }}>
                  My business is not yet registered, I would like to register
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ ml: 5 }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Registered business  name with the CAC" />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Tax identification number" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Your account be automatically opened on completion" />
                  </ListItem>
                </List>
              </nav>
            </Box>
          </AccordionDetails>
        </Accordion>
  );

  const freelancer = (
        <Accordion
          sx={{ mb: 2 }}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
            <Grid container spacing={0.5}>
              <Grid item xs={2}>
              <Radio
                {...controlProps('freelancer')} 
                  sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                      color: pink[600]
                    }
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography sx={{ color: grey }}>
                  I'm a freelancer, I do business in my personal name
                </Typography>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ ml: 5}}>
              {/* <nav aria-label="main mailbox folders"> */}
                <List>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Account in your personal name" />
                  </ListItem>
                  <ListItem disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Send to and receive transfers from all Nigerian banks" />
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CheckCircleRoundedIcon
                        sx={{ color: lightGreen[200] }}
                        aria-label="option-list"
                      />
                    </ListItemIcon>
                    <ListItemText secondary="Tools for business management" />
                  </ListItem>
                </List>
              {/* </nav> */}
            </Box>
          </AccordionDetails>
        </Accordion>
  );

  return (
    <div>
      <FormikProvider value={formik} >
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Box >
            <Card sx={{ mb: 2 }}>
              <CardContent>
                {registered}
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                {unregistered}
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                {freelancer}
              </CardContent>
            </Card>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              color="secondary"
              variant="contained"
              loading={isSubmitting}
            >
              Register
            </LoadingButton>
          </Box>
        </Form>
      </FormikProvider>
    </div>
  );
}
