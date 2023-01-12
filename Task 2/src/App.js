import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const App = () => {
  const [view, setView] = useState(false);
  const [recordList, setRecordList] = useState([]);

  const handleView = () => {
    setView(!view);
  };
  
  /*
  To prevent infinite render cycle
  To prevent infinite API calls if not using useEffect
  */
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      const slicedArray = response.data.response.slice(0, 20);
      setRecordList(slicedArray);
      console.log(slicedArray);
    }).catch(function (error) {
      console.error(error);
    });
  
  }, [])
  

  return (
    <Container maxWidth="lg">
      <div class="column">
        <div class="section">
          <div>
            <div class="row">
              <img width="200" height="200" src="https://images.squarespace-cdn.com/content/v1/5fbea594d49dd12447263cb2/1616114618707-0YCTARO6TC1H6OHH4KFT/Beyond+MD+Logo+Design.png"/>
              <Typography variant="h2" component="h2">
                Hello BeyondMD!
              </Typography>
            </div>
            <Button sx={{ width: 200, padding: 1, margin: 2 }} variant="contained" onClick={handleView}>View Resume</Button>
          </div>
          
          {view && (
            <iframe src="https://drive.google.com/file/d/1sBDGIaBdA-dQf7ro__sK9icdCicEhXuM/preview" class="resume" allow="autoplay"></iframe>
          )}
        </div>
        
        <div class="section">
          <Typography variant="h2" component="h2">
            Data from COVID-19 API
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            <a href="https://rapidapi.com/api-sports/api/covid-193/details" target="_blank">View the COVID-19 API from RapidAPI</a>
          </Typography>
          <br></br>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Continent</TableCell>
                  <TableCell align="right">Country</TableCell>
                  <TableCell align="right">Population</TableCell>
                  <TableCell align="right">Active Cases</TableCell>
                  <TableCell align="right">Recovered Cases</TableCell>
                  <TableCell align="right">Total Cases</TableCell>
                  <TableCell align="right">Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recordList.map((record, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{JSON.stringify(record['continent'])}</TableCell>
                    <TableCell align="right">{JSON.stringify(record['country'])}</TableCell>
                    <TableCell align="right">{JSON.stringify(record['population'])}</TableCell>
                    <TableCell align="right">{JSON.stringify(record['cases']['active'])}</TableCell>
                    <TableCell align="right">{JSON.stringify(record['cases']['recovered'])}</TableCell>
                    <TableCell align="right">{JSON.stringify(record['cases']['total'])}</TableCell>
                    <TableCell align="right">{new Date(record['time']).toTimeString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </Container>
      
  );
};

export default App;
