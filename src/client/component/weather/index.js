import React from 'react';
import './style.css';

export default class Weather extends React.Component{

    constructor(){
        super();
        this.state = {
            location : '',
            resultantData : '',
            temp : '',
            body : false,
            checked : true
        }
    }

    enterLocation(e) {
        this.setState({location : e.target.value});
    }

    handleClick() {
        $.ajax({
            type :"GET",
            url : 'http://localhost:8080/weather',
            data: {"location" : this.state.location},
            contentType : "application/json",
            success : function(data){
                this.setState({resultantData : data});
                this.setState({body: true});
                console.log(data);
            }.bind(this),
            error : function(error){
                console.log(err);
            }
        })
    }

handleRadioChange(e) {
    var x = e.target.value;
    var celsius = this.state.resultantData.temperature;
    if(x === 'C'){
        this.setState({checked : true});
      this.setState({temp : celsius + '\u00b0C'});
    }
    else {
        var far = (celsius * (9/5)) + 32;
        this.setState({checked : false});
       this.setState({temp : far + '\u00b0F' });
    }
}
   render(){

    var tempData = [
        <div className='card-text row'>
        <div className='col-6'>
            <h4>{this.state.temp?this.state.temp:this.state.resultantData.temperature+'\u00b0C'}</h4>
        </div>
        <div className='col-5'>
            <h6>Pressure : {this.state.resultantData.pressure}%</h6>
            <h6>Humidity : {this.state.resultantData.humidity}%</h6>
            <h6>Wind : {this.state.resultantData.wind} m/s</h6>
        </div>
        </div>
    ]

        return(
            <div className='container'>
            <div className="card">
                <div className="card-header">
                   <h5> Weather Report </h5>
                </div>
                <div className="card-body">
                <center>
                    <div className="row">
                    <div className='col-xs-6'>
                   <form className='row'>
                    <h6 className='location col-xs-6'>Location</h6>  <input type='text' className='col-xs-6' value={this.state.location} onChange={this.enterLocation.bind(this)} onBlur={this.handleClick.bind(this)}/>
                  </form>
                    </div>
                    <div className='col-xs-6'>
                    <div className='radio'>
                    <label className="label">
                    <input type="radio" className="radio-button-input" name="optionradio" value='C' checked = {this.state.checked} onChange= {this.handleRadioChange.bind(this)}/>
                    &#176;C
                    </label>
                    <label className="label">
                    <input type="radio" className="radio-button-input" name="optionradio" value='F' onChange = {this.handleRadioChange.bind(this)}/>
                      &#176;F
                    </label>         
                    </div>
                    </div>
                    </div>
                    <br/>
                   {this.state.body?tempData:null}
                </center>
                </div>

            </div>
            </div>
        );
    }
}