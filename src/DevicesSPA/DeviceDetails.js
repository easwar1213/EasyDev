import React, {PureComponent} from 'react';
import {Badge} from 'reactstrap';
import Panel from '../components/Panel';
import Table from '../components/table/Table';

class DeviceDetails extends PureComponent {
  render() {
    const {t} = this.props;

    return (
      <Panel xs={12} md={12} lg={12} title="Device Status">
         <Table responsive className='table--bordered'>
          <thead>
          <tr>
            <th>Status</th>
            <th>Serial#</th>
            <th>Device Name</th>
            <th>Asset Name</th>
            <th>Last Comm.</th>
            <th>Device Details</th>            
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><Badge color='success'>Available</Badge></td>
            <td>1141233567</td>
            <td>LS 110</td>
            <td>Asset 3</td>
            <td>2018/10/31</td>
            <td>Show</td>           
          </tr>
          <tr>
            <td><Badge color='success'>Available</Badge></td>
            <td>1212343457</td>
            <td>LS 90</td>
            <td>Asset 1</td>
            <td>2018/10/31</td>
            <td>Show</td>                        
          </tr>
          <tr>
            <td><Badge color='success'>Available</Badge></td>
            <td>1212343458</td>
            <td>LS 110</td>
            <td>Asset 1</td>
            <td>2018/10/31</td>
            <td>Show</td>                       
          </tr>
          <tr>
            <td><Badge color='success'>Available</Badge></td>
            <td>1212123434</td>
            <td>LS 110</td>
            <td>Asset 2</td>
            <td>2018/10/31</td>
            <td>Show</td>                           
          </tr>
          <tr>
            <td><Badge color='danger'>Unavailable</Badge></td>
            <td>1121234345</td>
            <td>LS 110</td>
            <td>Asset 2</td>
            <td>2018/10/31</td>
            <td>Show</td>                          
          </tr>
          <tr>
            <td><Badge color='danger'>Unavailable</Badge></td>
            <td>1231212343</td>
            <td>LS 110</td>
            <td>Asset 3</td>
            <td>2018/10/31</td>
            <td>Show</td>                      
          </tr>
          </tbody>
        </Table>
      </Panel>
    )
  }
}

export default (DeviceDetails);
