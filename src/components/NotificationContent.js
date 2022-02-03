import { Box } from "@material-ui/core"
import React from "react"

function NotificationContent({username, cohort_name, credits, status}) {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* UserName */}
      <Box sx={{
        typography: 'subtitle1',
        fontSize: 14
      }}>
        <a href="#" style={{
          textDecoration: 'none',
          color: '#3f51b5'
        }}>
          {username}
        </a>
        <span style={{
          color: 'grey'
        }}> {status}</span>
      </Box>

      {/* CohortName */}
      <Box sx={{
        typography: 'subtitle1',
        fontSize: 20,
        color: '#3f51b5',
        marginTop: '8px'
      }}>
        <a href="#">{cohort_name}</a>
      </Box>

      {/* Credits */}

      <Box sx={{
        typography: 'subtitle1',
        fontSize: 14,
        color: 'grey',
        marginTop: '8px'
      }}>
        {credits} credits
      </Box>

    </Box>
  )
}

export default NotificationContent
