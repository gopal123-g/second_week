import React, { Component } from 'react';
import "./forms.style.css";
class Weather extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 style={{ color: "white" }}>{this.props.city}</h2>
                </div>
                <div classNam="row">
                    <h2>
                        <i className={`wi ${this.props.weatherIcon}`} style={{ color: "white" }}></i>
                    </h2>
                    <h5 className="py-2" style={{ color: "white" }}>{this.props.description}</h5>
                </div>
                <div className="row" style={{ marginLeft: "50%" }}>
                    {this.props.temp_celsius ? (
                        <h4 className="py-2" style={{ fontSize: "50px", color: "white" }}>{this.props.temp_celsius}&deg;c</h4>
                    ) : null}

                </div>


                {minmaxTemp(this.props.temp_min, this.props.temp_max)}


               
               



            </div>
        );
    }
}
function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <div className="container" >
                <div className="row" style={{ marginTop: "70px" }}>
                    <div className="col-md-3">
                        <div class="card" style={{ backgroundColor: "#43b00d", color: "white", fontSize: "20px" }}>
                            <h5 class="card-header">Min Temp</h5>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <span className="px-4">{min}&deg;c</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card" style={{ backgroundColor: "#43b00d", color: "white", fontSize: "20px" }}>
                            <h5 class="card-header">Max Temp</h5>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <span className="px-4">{max}&deg;c</span>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Weather; 