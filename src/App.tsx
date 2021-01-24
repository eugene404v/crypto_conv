import {
  Container,
  Paper,
  Grid,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./App.css";

import CryptoTable from 'components/CryptoTable/CryptoTable'
 
function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <CryptoTable />
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={2}>
            <div>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                onChange={(e) => alert(e.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={10}
                onChange={(e) => alert(e.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
            <Typography variant="h5" component="h3">
              wwwwwwwwwwwww
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
