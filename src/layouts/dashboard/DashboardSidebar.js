import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import homeFill from '@iconify/icons-eva/home-fill';
import { Link as RouterLink, useLocation } from 'react-router-dom';
// material
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { alpha, styled } from '@mui/material/styles';
import { Box, Link, Drawer, Typography, Avatar, MenuItem, IconButton, Button, Divider } from '@mui/material';
// components
import LogoDashboard from '../../components/LogoDashboard';
import Scrollbar from '../../components/Scrollbar';
import MenuPopover from '../../components/MenuPopover';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';
//
import sidebarConfig from './SidebarConfig';
import account from '../../_mocks_/account';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH
  }
}));

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[200]
}));

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Business name 2',
    icon: homeFill,
    linkTo: '/'
  },
  {
    label: 'Business name 3',
    icon: homeFill,
    linkTo: '/'
  },
  {
    label: 'Business name 4',
    icon: homeFill,
    linkTo: '/'
  }
];


DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
          <LogoDashboard />
        </Box>
      </Box>

      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline="none" component={RouterLink} to="#">
          <AccountStyle>
            <Avatar src={account.photoURL} alt="photoURL" />
            <Box sx={{ ml: 2, mr: 2 }}>
              <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {account.displayText}
              </Typography>
            </Box>
            <IconButton
              ref={anchorRef}
              onClick={handleOpen}
              sx={{
                padding: 0,
                width: 44,
                height: 44,
                ...(open && {
                  '&:before': {
                    zIndex: 1,
                    content: "''",
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    position: 'absolute',
                    bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
                  }
                })
              }}
            >
              <ArrowDropDownOutlinedIcon />
            </IconButton>

            <MenuPopover
              open={open}
              onClose={handleClose}
              anchorEl={anchorRef.current}
              sx={{ width: 220 }}
            >
              <Box sx={{ my: 1.5, px: 2.5 }}>
                <Typography variant="subtitle1" noWrap>
                  {account.displayName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                  {account.email}
                </Typography>
              </Box>

              <Divider sx={{ my: 1 }} />

              {MENU_OPTIONS.map((option) => (
                <MenuItem
                  key={option.label}
                  to={option.linkTo}
                  component={RouterLink}
                  onClick={handleClose}
                  sx={{ typography: 'body2', py: 1, px: 2.5 }}
                >
                  <Box
                    component={Icon}
                    icon={option.icon}
                    sx={{
                      mr: 2,
                      width: 18,
                      height: 18
                    }}
                  />

                  {option.label}
                </MenuItem>
              ))}

              <Box sx={{ p: 2, pt: 1.5 }}>
                <Button fullWidth color="secondary" variant="outlined">
                  Add a business
                </Button>
              </Box>
            </MenuPopover>
          </AccountStyle>
        </Link>
      </Box>

      <NavSection navConfig={sidebarConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default'
            }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
