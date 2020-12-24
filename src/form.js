import React, { Component } from 'react';
import "./forms.style.css";
class Form extends Component {
    render() {
        return (
            <div className="container">
                <div>{ this.props.error? error():null } </div>
                <form onSubmit={this.props.loadWeather}>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="text" className="form-control"sytle={{color:"black"}} name="city" autoComplete="off"
                                placeholder="City"
                            />
                        </div>
                        <div className="col-md-3">
                            <input type="text" className="form-control" styl={{color:"black"}}name="country" autoComplete="off"
                                placeholder="country"
                            />
                        </div>
                        <div className="col-md-3 mt-md-0 text-md-left">
                            <button className="btn btn-primary">Get Weather</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}
  
function error(){
    return(
        <div className="alert alert-danger mx-5" role="alert">Please Enter city and country</div>
    )
}
export default Form;