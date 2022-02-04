import React from "react"
import { Container, Grid } from "@material-ui/core"
import Wallet from "./Wallet";
import Enrollments from "./Enrollments";
import History from "./History";

function Dashboard() {
  return (
    <Container style={{ marginBottom: '50px' }}>
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item md={6} style={{
          flex: 1
        }}>

          <Grid container spacing={3} justifyContent="space-between" direction="column">
            {/* Wallet Section */}
            <Grid item md={12} style={{
              flex: 1
            }}>
              <Wallet />
            </Grid>

            {/* History Section */}
            <Grid item md={12} style={{
              flex: 1
            }}>
              <History />
            </Grid>
          </Grid>

        </Grid>

        {/* Enrollments Section */}
        <Grid item md={6} style={{
          flex: 1
        }}>
          <Enrollments />
        </Grid>

      </Grid>
    </Container>
  )
}

export default Dashboard
