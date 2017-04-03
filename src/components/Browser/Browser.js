import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Nav from '../../components/Nav/Nav';

class Browser extends Component {

  render() {
    return(
        <div>
          <Grid>
            <Row>
            <Col xs={12}>
              <Nav />
            </Col>
            </Row>
            </Grid>

            {this.props.children}
        </div>
    );
  }

  
}

export default Browser;
