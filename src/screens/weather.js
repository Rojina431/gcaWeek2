import React from 'react';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import {CONFIG} from './config';
import './weather.css';
import WeatherDetail from './weatherdetail';
import axios from 'axios';

export default class Weather extends React.Component{
 
    state={
        city:"Pokhara",
        weatherData:"",
    }

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({
           city:e.target.value
        })
    }
    componentDidMount(){
        this.getWeatherData();
    }
    componentDidUpdate() {
        this.getWeatherData();
    }

    fetchWeather=async(cityName)=>{
        let url=CONFIG.WHETHER_API.replace('~',cityName)
       return await axios.get(url+CONFIG.WHETHER_API_KEY)  
    }

    getWeatherData=()=>{
      if(this.state.city!==""){
        this.fetchWeather(this.state.city).then((res)=>{
            if(res){
              this.setState({
                  weatherData:res.data,
              })
            }else{
               console.log("Error not found")
            }
            
        }).catch(err=>console.log(err))
      }else{
        this.fetchWeather("Pokhara").then((res)=>{
            if(res){
              this.setState({
                  weatherData:res.data,
              })
            }else{
               console.log("Error not found")
            }
            
        }).catch(err=>console.log(err))
      } 
      
    }

    render(){
        return(
           <React.Fragment>
               <AppBar style={{background:"grey"}}>
                 <TextField name="input"
                 className="appbar"
                 onChange={this.handleChange}
                 label="Weather in your city"
                 />
               </AppBar>
               <WeatherDetail data={this.state.weatherData}/>
           </React.Fragment>
        )
    }
}