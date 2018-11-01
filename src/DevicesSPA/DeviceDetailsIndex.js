import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import DeviceDetails from './DeviceDetails';

class DeviceDetailsIndex extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Devices</h3>
          </Col>
        </Row>
        <Row>
          <DeviceDetails/>
        </Row>
      </Container>
    )
  }
}

export default (DeviceDetailsIndex);
