import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Notifications from '@material-ui/icons/Notifications';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Grid from '@material-ui/core/Grid';
import { Avatar } from "@material-ui/core";

function Navbar() {
  return (
    <AppBar position="static" style={{
      background: 'transparent',
      boxShadow: 'none',
      color: 'black'
    }}>
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h4" style={{
              fontWeight: '800'
            }}>
              Home
            </Typography>
          </Grid>

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
  )
}

export default Navbar
