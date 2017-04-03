import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { browserHistory } from 'react-router'
import { Link } from 'react-router';

import Nav from '../../components/Nav/Nav';

import axios from 'axios';


class Photo extends Component{
  constructor(props){
    super(props);   

    this.state = { kuva:[], album:[], user:[] };
  }

componentDidMount(){
    let _this = this;
    let photosurl =  '//jsonplaceholder.typicode.com/photos/'+_this.props.params.photoId+'?_expand=album';
    
    axios.get(photosurl)
      .then(function (response) {
        //console.log(response.data);
       
        _this.setState( {kuva:response.data} );
        _this.setState( {album:response.data.album} );

        let usersurl =  '//jsonplaceholder.typicode.com/users/' + response.data.album.userId;
        console.log('userurl',usersurl);

          axios.get(usersurl)
            .then(function (response) {
            
              _this.setState( {user:response.data} );

            })
            .catch(function (error) {
              console.log(error);
            });

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
              <img src={this.state.kuva.url} className="img-thumbnail" role="presentation" /><br />
              <h2><b>{this.state.kuva.title}</b></h2>
              <h3>From album: <b>{this.state.album.title}</b></h3>
              <h3><i>By: <Link to={'/user/'+this.state.user.id}>{this.state.user.name}</Link></i></h3>
              <a className="btn btn-default" onClick={browserHistory.goBack}>Close photo</a>
            </Col>
          </Row>
          
        </Grid>
      );
  }
}

export default Photo;
