import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component{

  constructor(props){
      super(props);
      this.state = { term : '' };
  }

  onInputChange(e){
    console.log(e.currentTarget.value);
    this.setState({term : e.currentTarget.value});
  }

  onFormSubmit(e){
    e.preventDefault();

    //Fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({term : ''});
  }

  render(){
    return (
      <div>
        <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
          <input
          className="form-control"
          placeholder="Get a five-day forcast in your favorite cities"
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
