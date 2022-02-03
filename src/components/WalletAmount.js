import { Box } from "@material-ui/core"
import React from "react"

function WalletAmount({ amount }) {
  return (
    <Box sx={{
      typography: 'subtitle1',
      fontWeight: 'bold',
      fontSize: 42,
      color: '#4d4dcd'
    }}>
      {amount}
    </Box>
  )
}

export default WalletAmount
