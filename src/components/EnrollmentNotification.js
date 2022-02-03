import { Button, Divider, Grid } from "@material-ui/core"
import React from "react"
import NotificationContent from "./NotificationContent"
import NotificationDate from "./NotificationDate"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function EnrollmentNotification({username, cohort_name, credits, status, day, month}) {
  return (
    <div style={{
      background: '#fbfbfe',
      borderRadius: '8px',
      marginTop: '8px'
    }}>
      <Grid container
        spacing={4}
        flexDirection="row"
        wrap="nowrap"
        alignItems="center"
        style={{
          margin: 0,
          padding: '14px'
        }}>
        {/* Date */}
        <NotificationDate day={day} month={month} />

        {/* Content */}
        <NotificationContent
          status={status}
          username={username}
          cohort_name={cohort_name}
          credits={credits} />
      </Grid>
      <div style={{
        textAlign: 'center'
      }}>
        <Divider variant="midum" style={{ marginBottom: '10px', width: '95%' }} />
        <Button variant="outlined" size="large" color="primary" startIcon={<CheckCircleOutlineIcon />}>
          Approve
        </Button>
      </div>

    </div>
  )
}

export default EnrollmentNotification
