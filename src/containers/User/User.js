import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router'

import Nav from '../../components/Nav/Nav';

import axios from 'axios';


class User extends Component{
  constructor(props){
    super(props);   

    this.state = { user:[],address:[],albums:[] };
  }

componentDidMount(){
    let _this = this;
    let usersurl =  '//jsonplaceholder.typicode.com/users/'+_this.props.params.userId+'?_embed=albums';
    
    axios.get(usersurl)
      .then(function (response) {
        console.log(response.data);
       
        _this.setState( {user:response.data} );
        _this.setState( {address:response.data.address} );
        _this.setState( {albums:response.data.albums} );

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  render(){
      
      return(
        <Grid>
          <Row>
            <Col xs={12}>
              <address>
                <strong>{this.state.user.name}</strong><br />
                {this.state.user.email}<br />
                {this.state.address.street}, {this.state.address.suite},<br />
                {this.state.address.city}, {this.state.address.zipcode}<br />
                <abbr title="Phone">P:</abbr> {this.state.user.phone}
              </address>
              <a className="btn btn-default" onClick={browserHistory.goBack}>Close info</a>
            </Col>
          </Row>
          
        </Grid>
      );
  }
}

export default User;
