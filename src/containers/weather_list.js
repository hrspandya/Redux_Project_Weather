import React from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends React.Component{

  constructor(props){
    super(props);
  }

  renderWeather(cityData){
    const name = cityData.city.name;
    const lat = cityData.city.coord.lat;
    const lon = cityData.city.coord.lon;

    const tempList = cityData.list.map(function(weather){
      return weather.main.temp;
    });

    const presureList = cityData.list.map(function(weather){
      return weather.main.pressure;
    });

    const humidityList = cityData.list.map(function(weather){
      return weather.main.humidity;
    });


    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat}/>
        </td>
        <td>
          <Chart data={tempList} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={presureList} color="green" units="hPa"/>
        </td>
        <td>
          <Chart data={humidityList} color="black" units="%" />
        </td>
      </tr>
    );
  }

  render(){
    return (
      <div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (K)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    );
  }

}

function mapStateToProps(state){
    return { weather : state.weather };
}

export default connect(mapStateToProps)(WeatherList);
