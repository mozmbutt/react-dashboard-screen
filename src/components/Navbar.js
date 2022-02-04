import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Notifications from '@material-ui/icons/Notifications';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Grid from '@material-ui/core/Grid';
import { Avatar } from "@material-ui/core";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{
        background: 'transparent',
        boxShadow: 'none',
        color: 'black'
      }}>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Link className="nav-item" to={'/'}>
              <Grid item>
                <Typography variant="h4" style={{
                  fontWeight: '800'
                }}>
                  Public Home
                </Typography>
              </Grid>
            </Link>
            
            <Link className="nav-item" to={'/expert/guide'}>
              <Grid item>
                <Typography variant="h4" style={{
                  fontWeight: '800'
                }}>
                  Expert Guide
                </Typography>
              </Grid>
            </Link>

            <Link className="nav-item" to={'/company/dashboard'}>
              <Grid item>
                <Typography variant="h4" style={{
                  fontWeight: '800'
                }}>
                  Company Dashboard
                </Typography>
              </Grid>
            </Link>

            <Link className="nav-item" to={'/admin/admin-view'}>
              <Grid item>
                <Typography variant="h4" style={{
                  fontWeight: '800'
                }}>
                  Some Admin View
                </Typography>
              </Grid>
            </Link>

            <Grid item>
              <IconButton
                size="medium"
                edge="end"
              >
                <Notifications />
              </IconButton>

              <IconButton
                size="medium"
                edge="end"
              >
                <Avatar alt="Hi!" src="/google-calendar-icon.png" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar >
      <Outlet />
    </>
  )
}

export default Navbar
