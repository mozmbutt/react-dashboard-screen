import React from "react"
import { Container, Box, Card, Divider, Button, Grid } from "@material-ui/core"
import SectionHeading from "./SectionHeading"
import NotificationDate from "./NotificationDate"
import NotificationContent from "./NotificationContent"
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import EnrollmentNotification from "./EnrollmentNotification"

function Enrollments() {
  return (
    <Container
      style={{
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px rgba(145, 158, 171, 0.24), 0px 24px 48px rgba(145, 158, 171, 0.24)',
        borderRadius: '16px',
        padding: '20px',
        height: '100%'
      }}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <SectionHeading heading={'New Enrollment'} subheading={'Waiting for approval'} count={2} />

      <Container className='scroll-container' style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'scroll',
        overflowX: 'hidden',
        height: '470px'
      }}>

        <EnrollmentNotification
          username={'Bill Parker'}
          status={'wants to attend'}
          cohort_name={'INVESTING IN NETWORK EFFECTS'}
          credits={'800'} 
          day={'02'}
          month={'DEC'}/>

        <EnrollmentNotification
          username={'David John'}
          status={'wants to attend'}
          cohort_name={'THE ECONOMICS OF DIGITAL PLATFORMS'}
          credits={'800'} 
          day={'19'}
          month={'NOV'}/>

      </Container>
    </Container >
  )
}

export default Enrollments
