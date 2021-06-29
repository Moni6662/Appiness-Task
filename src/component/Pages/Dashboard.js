import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import userData from '../../utils/userData.json'
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
    }
  }


  LogoutHandler = () => {
        localStorage.removeItem('Authorization');
        this.props.history.push('/');
    }
  render() {

    return (
      <Container className="dashboard_page">
         <div style={{height:"150px"}}>
           <button style={{background:"red" ,position:"relative",right:"100px",top:"20px"}} type="button" className="logout-submit" onClick={this.LogoutHandler} >Logout</button>
           </div>
       
        <div className="box">  
       

        <h1 className="text-center col-md-6 mx-auto" >User Details</h1>
        
                {userData.map((userDetails, index) => {
                    return <div className="user_details" key={index}>

                        <table className="center" border={1}>
                            <tbody>

                                <tr>
                                    <td>  {userDetails.id}</td>
                                    <td>  {userDetails.name}</td>
                                    <td>  {userDetails.age}</td>
                                    <td>  {userDetails.gender}</td>
                                    <td>  {userDetails.email}</td>
                                    <td>  {userDetails.phoneNo}</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>


                })}
                </div>
      </Container>
    )
  }
}



export default Dashboard;
