import { Divider } from "@material-ui/core"
import React from "react"

function HistoryYear({ year }) {
  return (
    <div style={{
      width: '100%'
    }}>
      <span style={{
        color: '#70767c',
        fontSize: '18px',
        fontWeight: '600',
      }}>
        {year}
      </span>

      <Divider variant="large" style={{ marginBottom: '10px' }} />
    </div>
  )
}

export default HistoryYear
