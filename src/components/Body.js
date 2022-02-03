import { Avatar, Box, Button, Grid } from "@material-ui/core"
import React from "react"

function Body() {
  return (

    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}
    >

      <Grid item md={10} style={{
        marginBottom: '50px'
      }}>
        <Box sx={{
          typography: 'h1',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 50,
        }}>
          <Avatar alt="Hi!" src="/hi.png" className="hi-avatar" />
          Hi Waqas2, welcome to the AAB Cohort!
        </Box>
      </Grid>

      <Grid item md={10} style={{
        marginBottom: '50px'
      }}>
        <Box sx={{
          typography: 'body1',
          textAlign: 'center',
          fontSize: 20,
          lineHeight: 2
        }}>
          They define the number of grids the component will use for a given breakpoint. They are intended to control width using flex-basis in row containers but they will impact height in column containers. If used, these props may have undesirable effects on the height of the Grid item elements.
        </Box>
      </Grid>

      <Grid item md={10} style={{
        marginBottom: '50px'
      }}>
        <Box sx={{
          typography: 'subtitle1',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
          To be able to use the fonts, you’ll have to initialize it using the CreateMuiTheme which is an API provided by Material UI that generates
        </Box>
      </Grid>

      <Grid item md={10}>
        <Box sx={{ textAlign: 'center', }}>
          <div className="btns-row">
            <Button variant="contained" size="large" color="primary">
              Add session to my celender
            </Button>

            <Button variant="outlined" size="large" color="primary">
              Ask ronny to question through Q&A
            </Button>
          </div>
        </Box>
      </Grid>


    </Grid >
  )
}

export default Body
