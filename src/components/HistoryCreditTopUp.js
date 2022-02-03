import { Box } from "@material-ui/core"
import React from "react"

function HistoryCreditTopUp({ credits }) {
  return (
    <Box style={{
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* TopUp */}
      <Box sx={{
        typography: 'subtitle1',
        fontSize: 28,
      }}>
        Credit Topup
      </Box>

      {/* Credits */}

      <Box sx={{
        typography: 'subtitle1',
        fontSize: 16,
        color: 'grey',
        marginTop: '8px'
      }}>
        {credits} credits
      </Box>

    </Box>
  )
}

export default HistoryCreditTopUp
