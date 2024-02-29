import React from 'react';
import {Paper, Typography,  Container} from '@mui/material';
import './/../components/Footer.css';


function MainFooter() {
  return (
    <Paper sx={{marginTop: 'calc(20% + 60px)',
    position: 'fixed',
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: '100%'}}
    component="footer" square variant="outlined">
        <Container sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "1rem",
          }}>  
              <Typography className="footer-links" variant="caption" color="initial">Copyright ©2024.</Typography>
              <Typography className="footer-links" paddingLeft={4}>Terms of Use </Typography>
              <Typography className="footer-links" paddingLeft={4}>Privacy Policy</Typography>

        </Container>
    </Paper>
  )
}

export default MainFooter;