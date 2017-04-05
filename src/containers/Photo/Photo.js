import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPhoto, fetchUsers } from '../../actions/index';



class Photo extends Component{

  componentWillMount(){
    this.props.fetchUsers();
    this.props.fetchPhoto(this.props.params.photoId);
    
  }
  
  render(){

    if(!this.props.photo){
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
      return(
        <Grid>
          <Row>
            <Col xs={12}>
              <img src={this.props.photo.url} className="img-thumbnail" alt={this.props.photo.title} /><br />
              <h2><b>{this.props.photo.title}</b></h2>
              <h3>From album: <b>{this.props.photo.album.title}</b></h3>
              <h3><i>By: <Link to={'/user/'+this.props.photo.album.userId}>{this.props.users[this.props.photo.album.userId-1].name}</Link></i></h3>
              <a className="btn btn-default" onClick={browserHistory.goBack}>Close photo</a>

                
            </Col>
          </Row>
          
        </Grid>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    photo: state.photos.photo,
    users: state.users.all
  };
}


export default connect(mapStateToProps, {fetchPhoto,fetchUsers} )(Photo);
