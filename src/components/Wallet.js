import React from "react"
import { Container, Box, Card, Divider, Button, Grid } from "@material-ui/core"
import SectionHeading from "./SectionHeading"
import WalletAmount from "./WalletAmount"

function Wallet() {
  return (
    <Container
      style={{
        backgroundColor: 'white',
        boxShadow: '0px 0px 4px rgba(145, 158, 171, 0.24), 0px 24px 48px rgba(145, 158, 171, 0.24)',
        borderRadius: '16px',
        padding: '20px'
      }}
      sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
    >
      <SectionHeading heading={'My Wallet'} />

      <Container style={{
        display: 'flex',
        justifyContent: 'left',
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 0
      }}>

        <Container style={{
          display: 'flex',
          justifyContent: 'left',
          flexDirection: 'row',
          alignItems: 'flex-end',
          padding: 0
        }}>
          <WalletAmount amount={'4,000'} />
          <span style={{
            color: '#70767c',
            fontSize: '22px',
            fontWeight: '600',
            margin: '2px 8px',
          }}>Credits</span>
        </Container>

        <Container style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'row',
          alignItems: 'flex-end',
          padding: 0
        }}>
          <Button variant="contained" size="large" color="primary" style={{
            fontWeight: 600
          }}>
            Top Up Credits
          </Button>
        </Container>

      </Container>
    </Container>
  )
}

export default Wallet
