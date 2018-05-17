import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import axios from 'axios'
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

    handleChange(event, input) {
      switch(input) {
        case 'username':
          this.setState({userid: event.target.value})
        break;
        case 'password':
          this.setState({password: event.target.value})
      }
    }


    handleSubmit(e) {
      e.preventDefault()
      axios.post('http://localhost:3500/login', {
        username: this.state.userid,
        password: this.state.password 
      }).then(response => {
        const data = response.data
        const user = data.username,
              pass = data.password
        if (user === this.state.userid && pass === this.state.password) {
          this.setState({submitted: true})
        }
      }).catch(err => {
        console.log(err)
      })
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
                onChange={event => this.handleChange(event, 'username')}
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
                onChange={event => this.handleChange(event, 'password')}
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
        {(() => {
          if (this.state.submitted) {
            return <p>Login succeed</p>
          }
        })()}
        </div>
      </div>
 
    );
  }
}

export default Login;
