import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';


class User extends Component{
  
  componentWillMount(){
    this.props.fetchUser(this.props.params.userId);
  }
  

  render(){
      if(!this.props.user){
        return(
        <Grid>
            <Row>
              <Col xs={12}>
                Loading... 
              </Col>
            </Row>
            
          </Grid>
        );
      }else{
        console.log(this.props.user);
        return(
          <Grid>
            <Row>
              <Col xs={12}>
                <address>

                  <strong>{this.props.user.name}</strong><br />
                  {this.props.user.email}<br />
                  {this.props.user.address.street}, {this.props.user.address.suite},<br />
                  {this.props.user.address.city}, {this.props.user.address.zipcode}<br />
                  <abbr title="Phone">P:</abbr> {this.props.user.phone}
                </address>
                <a className="btn btn-default" onClick={browserHistory.goBack}>Close info</a>
              </Col>
            </Row>
            
          </Grid>
        );
      }


     
  }
}


function mapStateToProps(state){
  return {
    user: state.users.user
  };
}

export default connect(mapStateToProps, { fetchUser } )(User);
