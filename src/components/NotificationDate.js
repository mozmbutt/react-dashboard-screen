import { Box, Grid } from "@material-ui/core"
import React from "react"

function NotificationDate({ day, month }) {
  return (
    <Grid item>
      <Box sx={{
        typography: 'subtitle1',
        fontSize: 22,
        textAlign: 'center',
        color: 'grey',
        background: '#fbfbfe',
        padding: '8px',
        borderRadius: '5px'
      }}>
        <span style={{
          fontWeight: 'bold'
        }}>
          {day}
        </span>
        <br />
        {month}
      </Box>
    </Grid >
  )
}

export default NotificationDate
