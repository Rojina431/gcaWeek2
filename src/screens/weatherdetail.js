import React from 'react'
import './weather.css';
import { Card, Grid } from '@material-ui/core';

export default class WeatherDetail extends React.Component{
   render(){ 
     let weatherData=this.props.data;
       return(
       <div  className="img">
           <Card className="card" style={{margin:10}}>
               <div style={{textAlign:'center'}}>
                   {new Date().toDateString()}
                   {weatherData&&<span><strong> {weatherData.name}, {weatherData.sys.country}</strong></span>}
               </div>
               <br/>
               <br/>
               {weatherData&&<Grid container spacing={3}>
                   <Grid item xs={6} md={3}>
                   <h3>Temperature</h3>
                   <p>{weatherData.main.temp}<span>&#176;</span>C </p>
               </Grid>
               <Grid item xs={6} md={3}>
               <h3>Weather</h3>
               <p>{weatherData.weather[0].description}</p>
           </Grid>
           <Grid item xs={6} md={3}>
               <h3>Sunrise</h3>
               <p>{new Date(weatherData.sys.sunrise).toLocaleString()}</p>
           </Grid>
           <Grid item xs={6} md={3}>
               <h3>Sunset</h3>
               <p>{new Date(weatherData.sys.sunset).toLocaleString()}</p>
           </Grid>
           </Grid>}
           </Card>
       </div>
       )
   }
}