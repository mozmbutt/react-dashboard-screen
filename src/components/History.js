import React from "react"
import { Container, Box, Card, Divider, Button, Grid, colors } from "@material-ui/core"
import SectionHeading from "./SectionHeading"
import HistoryYear from "./HistoryYear"
import NotificationDate from "./NotificationDate"
import NotificationContent from "./NotificationContent"
import HistoryCreditTopUp from "./HistoryCreditTopUp"

function History() {
  return (
    <Container
      style={{
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px rgba(145, 158, 171, 0.24), 0px 24px 48px rgba(145, 158, 171, 0.24)',
        borderRadius: '16px',
        padding: '20px'
      }}
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
    >
      <SectionHeading heading={'History'} />

      <Container className='scroll-container' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '350px',
        padding: 0,
        overflow: 'scroll',
        overflowX: 'hidden'
      }}>

        <HistoryYear year={'2021'} />

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'02'} month={'DEC'} />

          {/* Content */}
          <NotificationContent username={'Bill Parker'} status={'attended'} cohort_name={'INVESTING IN NETWORK EFFECTS'} credits={'800'} />

        </Grid>

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'19'} month={'NOV'} />

          {/* Content */}
          <NotificationContent username={'Bill Parker'}  status={'attended'} cohort_name={'THE ECONOMICS OF DIGITAL PLATFORMS'} credits={'800'} />

        </Grid>

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'20'} month={'OCT'} />

          {/* Content */}
          <HistoryCreditTopUp credits={'+4000'} />
        </Grid>


        <HistoryYear year={'2020'} />

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'02'} month={'DEC'} />

          {/* Content */}
          <NotificationContent username={'Bill Parker'}  status={'attended'} cohort_name={'INVESTING IN NETWORK EFFECTS'} credits={'800'} />

        </Grid>

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'19'} month={'NOV'} />

          {/* Content */}
          <NotificationContent username={'Bill Parker'}  status={'attended'} cohort_name={'THE ECONOMICS OF DIGITAL PLATFORMS'} credits={'800'} />

        </Grid>

        <Grid container
          spacing={4}
          // flexDirection="row"
          wrap="nowrap"
          alignItems="center"
          style={{
            margin: 0,
            padding: '14px'
          }}>
          {/* Date */}
          <NotificationDate day={'20'} month={'OCT'} />

          {/* Content */}
          <NotificationContent username={'Bill Parker'}  status={'attended'} cohort_name={'BUILDING & INVESTING IN NETWORK EFFECTS'} credits={'800'} />

        </Grid>

      </Container>

    </Container>
  )
}

export default History
