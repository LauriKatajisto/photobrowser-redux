import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios';

import Nav from '../../components/Nav/Nav';

class Photos extends Component{
  constructor(props){
    super(props);
    this.state = {
      page:1,
      photos:[]
    };
    this.setPage = this.setPage.bind(this);
    this.setPhotosState = this.setPhotosState.bind(this); 
  }

  componentDidMount(){
      if(this.props.params.page){
        this.setState({page:parseInt(this.props.params.page,10)});
        this.setPhotosState(this.props.params.page);
      }else{
        this.setPhotosState(1);
      }
      
  }
  
  componentDidUpdate(prevProps){

    let oldpage = prevProps.params.page;
    let newpage = this.props.params.page
 
    if(oldpage!==newpage){
      this.setState({page:parseInt(newpage,10)});
      this.setPhotosState(newpage);
    }
  }

  

  setPage(e){
    //console.log('value',e.target.value);
    this.setState({page:parseInt(e.target.value,10)});
    this.setPhotosState(parseInt(e.target.value,10));
  }

  setPhotosState(value){
      var _this = this;
      axios.get('//jsonplaceholder.typicode.com/photos?_limit=12&_page='+value)
        .then(function (response) {
          //console.log(response);
        
          _this.setState( {photos:response.data} );
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render(){

    let nextPage = this.state.page + 1;
    let previousPage = this.state.page - 1;
    if(previousPage===0){
      previousPage = 1;
    }


    const kuvat = this.state.photos.map( kuva => 
       <Col xs={6} md={2} key={kuva.id}>

        <div className="thumbnail">
        
          <img src={kuva.thumbnailUrl} role="presentation" />
          <Link className="btn btn-default btn-xs center-block" to={'/photo/'+kuva.id}>Open photo</Link>
        </div>
      </Col>
    );

      return(
        <Grid>
          <Row>
            <Col xs={12}>
              <ol className="breadcrumb">
                <li>Page</li>
                <li>{this.state.page}</li>   
              </ol>
              
             
            </Col>
          </Row>
          <Row>
            { kuvat }
          </Row>
          <Row>
              <Col xs={12}>
                  <nav className="center-block" aria-label="Page navigation">
                    <ul className="pagination pagination-lg">
                      <li>
                        <Link to={'/photos/'+previousPage}>
                          <span aria-hidden="true">&laquo;</span>
                        </Link>
                      </li>
                      <li className="active"><a href="#">{this.state.page}</a></li>
                      <li>
                        <Link to={'/photos/'+nextPage}>
                          <span aria-hidden="true">&raquo;</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
              </Col>

            </Row>
        </Grid>
      );
  }
}

export default Photos;
