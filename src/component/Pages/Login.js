import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { loginUser } from '../../redux/actions/loginUser';
import Dashboard from '../Pages/Dashboard';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);




class Login extends Component {
    state = {
        email: "",
        password: "",
        errors:{
           
        }
        
    
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;
          if (typeof this.state.email !== "undefined") {
        if (!validEmailRegex.test(this.state.email)) {
            formIsValid = false;
            
            errors.email = "Email is not valid";
        }
    }
    if ( this.state.password.length<5) {
       
            errors.password = "Password must be more then  digits";
        
    }
    this.setState({errors:errors});
    return formIsValid;
}
  

    submitHandler = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            const data = this.state;
            this.props.Login(data, this.props.history);
        }
       
    
    }
    
    render() {
const {errors} = this.state;
        return (
            <div className="login_page">
                {
                        <div>

                            <Row>
                                
                       <div className="login_form col-md-2 ">
                   
                                <Col><input  onChange={this.onChangeHandler} type="email" className="input-login" name="email" placeholder="Username" />
                                <p>{errors.email && (<div className='error'>{errors.email}</div>)}</p></Col>
                                <Col>  <input onChange={this.onChangeHandler} type="password" name="password" password="password" className="input_login_password" placeholder="Password" />
                              <p> {errors.password && (<div className='error'>{errors.password}</div>)}</p> </Col>
                                <Col><button type="button" className="login-submit  btn-primary" onClick={this.submitHandler} >Signi In</button> </Col>
                               </div>
                            </Row>

                        </div>
                   
              }
            </div>
        )
    }
}
const mapDispatchToProps = function (dispatch) {
    return ({
        Login: (data, browserHistory) => { dispatch(loginUser(data, browserHistory)) }
    })
};
export default connect(null, mapDispatchToProps)(Login);
