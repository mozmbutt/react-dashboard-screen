import { Box } from "@material-ui/core"
import React from "react"

function SectionHeading({ heading, subheading, count }) {
  return (
    <Box style={{
      display: 'flex',
      marginBottom: '20px',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <Box sx={{
        typography: 'subtitle1',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '8px',
      }}>
        {heading}
        <br></br>
        <span style={{
          color: '#70767c',
          fontSize: '14px',
          fontWeight: '100',
        }}>
          {subheading}
        </span>
      </Box>

      {
        count ?
          <Box sx={{
            fontWeight: 'bold',
            fontSize: 14,
            color: '#4d4dcd',
            background: '#f6f6fd',
            padding: '8px',
            borderRadius: '5px'
          }}>
            {count} new
          </Box>
          :
          ''
      }

    </Box >
  )
}

export default SectionHeading
