import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
console.log(React.version);
var currentTime = new Date();
console.log('The current time is: ' + currentTime);

var opts = require('opts');
//import ScriptTag from 'react-script-tag';
//import Typekit from 'typekit';
//import { userActions } from "../../../_actions";
//import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon, InputGroupText} from 'reactstrap';
// import "../../../../assetsl/bootstrap/css/bootstrap.min.css";
// import "../../../../assetsl/css/style.css";
//import 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js';

<script src="../../library/json2.js"></script>
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      password: "",
      submitted: false
    }
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(e) {
   
    e.preventDefault();
  	  	        		
	  var formData = {
	  	              "userId"    : $('input[name=userid]').val(),//$('input[name=userid]').val()
	  	              "password"  : $('input[name=password]').val()//$('input[name=password]').val()
	  	            };
	  	              		
	  	              			
	  var jsondata = JSON.stringify(formData);
	  	  console.log(jsondata);
    //alert("test" +jsondata);

    fetch('http://', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({jsondata})
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err)=>console.log(err))
        }
      //done(Login.function(data)
      // {
      // this.setState({});
      // console.log(this.state.data);
      // }
     
  
    }  
  

    render() {
    // const { loggingIn } = this.props;
    // const { userid, password, submitted } = this.state;
    return (
      
      <div className="container">
        <div className="col-md-5 col-md-offset-13 login-form text-center">
          <div className="form-top">
            <div className="form-top-left">
              <h3>LOGIN PAGE</h3>
              <p>Please enter your userID and password</p>
            </div>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="input-group col-lg-10 col-md-offset-1">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-user" />
              </span>
              <input
                className="form-control"
                placeholder="UserID"
                name="userid"
                id="userid"
                type="text"
                required
              />
            </div>

            <div className="input-group  col-lg-10 col-md-offset-1">
              <span className="input-group-addon">
                <i className="glyphicon glyphicon-lock" />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit"
              className="btn btn-danger btn-block col-xs-6 col-lg-11"
              id="login">
                 LOGIN
            </button>
          </form>

          <div className="form-footer">
            <div className="row">
              <div className="col-xs-7 blink">
                <i className="fa fa-unlock-alt" />
                <Link to="/ForgotPassword" id="forgot_from_1">
                  Forgot password?
                </Link>

                <span id="svrerror" />
              </div>
            </div>
          </div>
        </div>
      </div>
 
    );
  }
}

export default Login;
