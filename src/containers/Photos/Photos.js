import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPhotos } from '../../actions/index';

class Photos extends Component{
  componentWillMount() {
   this.props.fetchPhotos(this.props.params.page);
  }

  componentDidUpdate(prevProps){
    const oldpage = prevProps.params.page;
    const newpage = this.props.params.page
 
    if(oldpage!==newpage){
      this.props.fetchPhotos(this.props.params.page);
    }
  }


  renderPhotos() {
    return this.props.photos.map((photo) => {
      return (
         <Col xs={6} md={2} key={photo.id}>

        <div className="thumbnail">
        
          <img src={photo.thumbnailUrl} alt={photo.id} role="presentation" />
          <Link className="btn btn-default btn-xs center-block" to={'/photo/'+photo.id}>Open photo</Link>
        </div>
      </Col>
      );
    });
  }

  render(){

    const nextPage = parseInt(this.props.params.page,10) + 1;
    let previousPage = parseInt(this.props.params.page,10) - 1;
    if(previousPage===0) {
      previousPage = 1;
    }

      return(
        <Grid>
          <Row>
            <Col xs={12}>
              <ol className="breadcrumb">
                <li>Page</li>
                <li>{this.props.params.page}</li>   
              </ol>
              
             
            </Col>
          </Row>
          <Row>
            { this.renderPhotos() }
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
                      <li className="active"><a href="#">{this.props.params.page}</a></li>
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


function mapStateToProps(state) {
  return {
    photos: state.photos.photos
  };
}

export default connect(mapStateToProps, { fetchPhotos })(Photos);
