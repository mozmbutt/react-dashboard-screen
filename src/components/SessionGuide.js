import React from "react"
import { Box, Button, Container, Grid } from "@material-ui/core"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Paper from '@material-ui/core/Paper';

function SessionGuide() {
  return (
    <>
      <Container className='header-content' style={{
        marginBottom: '50px',
        paddingLeft: 0
      }}>
        <Button
          color='primary'
          startIcon={<KeyboardBackspaceIcon />}
          style={{
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Return
        </Button>

        <Box sx={{
          typography: 'subtitle1',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
          Personal info and options to manage it. You can make some of this info
        </Box>

      </Container>

      <Container>
        <Grid container
          spacing={5}
          justifyContent="center"
        >
          <Grid item md={6} style={{
            boxShadow: "1px 1px 2px 2px #80808021",
            borderRadius: 10,
            flex: 1
          }}>
            <Container>
              <Box sx={{
                typography: 'subtitle1',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 30
              }}>
                Google Calender
              </Box>

              <Container className="device-guide">
                <Box sx={{
                  typography: 'subtitle1',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10
                }}>
                  On Web:
                </Box>

                <div className="list-item">
                  <span className="list-number">1</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">Google Calender</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">2</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on
                    <span className="highligted-text"> "Add other calenders"</span> next to the
                    <span className="highligted-text"> "Other calenders"</span> heading.
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">3</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">"From URL"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">4</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Paste In <span className="highligted-text">""</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">5</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Press <span className="highligted-text">"Save"</span>
                  </Box>
                </div>

              </Container>

              <Container className="device-guide">
                <Box sx={{
                  typography: 'subtitle1',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10
                }}>
                  On iOS:
                </Box>

                <div className="list-item">
                  <span className="list-number">1</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">Google Calender</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">2</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    You may need to Visit
                    <span className="highligted-text"> "https://mui.com/system/flexbox/" </span>
                    and turn on sync option for chort calender.
                  </Box>
                </div>

              </Container>

              <Container className="device-guide">
                <Box sx={{
                  typography: 'subtitle1',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10
                }}>
                  On Android:
                </Box>

                <div className="list-item">
                  <span className="list-number">1</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">Google Calender</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">2</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    You may need to Visit
                    <span className="highligted-text"> "https://mui.com/system/flexbox/" </span>
                    and turn on sync option for chort calender.and turn on sync option for chort calender.
                  </Box>
                </div>

              </Container>

            </Container>
          </Grid>

          <Grid item md={6} style={{
            boxShadow: "1px 1px 2px 2px #80808021",
            borderRadius: 10,
            flex: 1,
            marginLeft: 10
          }}>
            <Container>
              <Box sx={{
                typography: 'subtitle1',
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 30
              }}>
                iCal
              </Box>

              <Container className="device-guide">
                <Box sx={{
                  typography: 'subtitle1',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10
                }}>
                  On Mobile:
                </Box>

                <div className="list-item">
                  <span className="list-number">1</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">Google Calender</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">2</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on
                    <span className="highligted-text"> "Add other calenders"</span> next to the
                    <span className="highligted-text"> "Other calenders"</span> heading.
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">3</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">"From URL"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">4</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Paste In <span className="highligted-text">""</span>
                  </Box>
                </div>

              </Container>

              <Container className="device-guide">
                <Box sx={{
                  typography: 'subtitle1',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10
                }}>
                  On Mobile:
                </Box>

                <div className="list-item">
                  <span className="list-number">1</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">Google Calender</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">2</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on
                    <span className="highligted-text"> "Add other calenders"</span> next to the
                    <span className="highligted-text"> "Other calenders"</span> heading.
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">3</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Click on <span className="highligted-text">"From URL"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">4</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Paste In <span className="highligted-text">""</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">5</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Press <span className="highligted-text">"Save"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">6</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Add a <span className="highligted-text">"Description"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">7</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Tap on <span className="highligted-text">"Other"</span>
                  </Box>
                </div>

                <div className="list-item">
                  <span className="list-number">8</span>
                  <Box className="list-content" sx={{
                    typography: 'body1'
                  }}>
                    Press <span className="highligted-text">"Save"</span>
                  </Box>
                </div>

              </Container>

            </Container>
          </Grid>

        </Grid>
      </Container>
    </>
  )
}

export default SessionGuide
