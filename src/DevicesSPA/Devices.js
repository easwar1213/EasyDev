import React from 'react';
import { Tab, TabbedShowLayout, ShowView, ShowController, BooleanField, ReferenceArrayField, NumberInput, FormDataConsumer, BooleanInput, Labeled, EmailField, ReferenceArrayInput, SelectArrayInput, ArrayInput, SimpleFormIterator, RichTextInput, DateInput, ArrayField, ShowButton, Show, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, SimpleShowLayout } from 'react-admin';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import Chip from '@material-ui/core/Chip';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import StatusStatisticsContainer from './StatusStatisticsContainer';
import StatusTrendContainer from './StatusTrendContainer';
import StatusTrendChart from './StatusTrendChart';
import DeviceDetailsIndex from './DeviceDetailsIndex';
import DeviceDetails from './DeviceDetails';
import DynamiclyRefreshedDoughnut from './DynamiclyRefreshedDoughnut';
import RandomAnimatedLine from './RandomAnimatedLine';
import ShowDeviceTab from './ShowDeviceTab';
import { Col, Container, Row, Badge } from 'reactstrap';
import Panel from '../components/Panel';
import { Card, CardBody } from 'reactstrap';
import Collapse from '../components/Collapse';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const gridStyle = {
    width: '60%',

};


export const DeviceList = (props) => (
    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Device</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            {/* <DynamiclyRefreshedDoughnut /> */}
            <StatusStatisticsContainer />
            {/* <RandomAnimatedLine /> */}
            <StatusTrendContainer/>
        </Row>
        <Row>
            {/* <DeviceDetails /> */}
            <Panel xs={12} md={12} lg={12} title="Device Status Details">
                <List title="Devices" {...props} perPage={5} sort={{ field: 'telematicsSerialNumber', order: 'DESC' }} >
                    <DeviceGrid />
                </List>
            </Panel>
        </Row>
    </Container>

    // <div className='dashboard dashboardContainer noPadd'>
    //     <Row>
    //         <Col xs={12} sm={12} md={6}>
    //             <DynamiclyRefreshedDoughnut />
    //         </Col>
    //         <Col xs={12} sm={12} md={6}>
    //             <RandomAnimatedLine />
    //         </Col>
    //     </Row>
    //     <br/>
    //     <Row>
    //         <Col xs={12} sm={12} md={12}>
    //         <DeviceDetails/>
    //         {/* <Panel lg={12} title="Device Status Details">
    //                 <List title="Devices" {...props} perPage={5} sort={{ field: 'telematicsSerialNumber', order: 'DESC' }} >
    //                     <DeviceGrid />                        
    //                 </List>
    //             </Panel> */}
    //         </Col>            
    //     </Row>
    // </div>
);


const DeviceGrid = ({ ids, data, basePath }) => (
    <div style={{ gridStyle }}>

        <Table style={{ tableLayout: 'auto' }}  >
            <TableHead>
                <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Serial#</TableCell>
                    <TableCell>Device</TableCell>
                    <TableCell> Asset</TableCell>
                    <TableCell>Last Comm.</TableCell>
                    <TableCell>Show</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ids.map(id => {
                    return (
                        <TableRow
                            //  hover
                            //  onClick={ this.handleShowSensorList(row.sensorGroup)}
                            //    onClick={event => this.handleShowSensorList(row)}
                            // value={row.sensorGroup}
                            key={id}>

                            {(data[id]).avaiabilityStatus == 1 && (
                                <TableCell><Badge color='success'>Available</Badge></TableCell>
                                // <TableCell>
                                //     {/* <Avatar style={{ backgroundColor:'#63B239',width:30, height:30,alignItems: 'center'}} >
                                // <DoneIcon/>
                                // </Avatar> */}
                                //     <Chip
                                //         avatar={
                                //             <Badge color='success'>Available</Badge>
                                //         }  
                                //     />
                                // </TableCell>
                            )}

                            {(data[id]).avaiabilityStatus == 0 && (
                                <TableCell><Badge color='danger'>Unavailable</Badge></TableCell>
                                // <TableCell>
                                //     <Chip
                                //         avatar={
                                //             <Badge color='danger'>Unavailable</Badge>
                                //         }                                       
                                //     />
                                // </TableCell>

                            )}
                            <TableCell>{(data[id]).telematicsSerialNumber}</TableCell>
                            <TableCell>{(data[id]).model}</TableCell>
                            <TableCell>{(data[id]).assetName}</TableCell>

                            {(data[id]).lastCommunicated === 'unvailable' && (
                                <TableCell>{"unavaiable"}</TableCell>
                            )}

                            {(data[id]).lastCommunicated != 'unvailable' && (
                                <TableCell>{new Date().toISOString()}</TableCell>
                            )}

                            {/* <TableCell>{new Date().toISOString()}</TableCell> */}
                            <TableCell>
                                <ShowButton
                                    resource="getDeviceList" basePath={basePath} record={(data[id])}
                                />
                            </TableCell>
                            {/* {(data[id]).partStatus == "Unauthorized" && (
                                <TableCell style={{ backgroundColor: "red" }} >{(data[id]).partStatus}</TableCell>
                            )} */}

                            {/* <TableCell >{row.sensorCount}</TableCell>
                            <TableCell >{row.description}</TableCell>
                            <TableCell>
                                <IconButton
                                    value={row.sensorGroup}
                                    onClick={event => this.handleShowSensorList(row)}
                                >
                                    <SensorListIcons />
                                </IconButton>
                            </TableCell> */}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </div>

)

DeviceGrid.defaultProps = {
    data: {},
    ids: [],
};

// const DeviceTitlee = ({ record }) => {
//     return (
//         <Card>
//             <CardBody>
//                 <Collapse className="with-shadow" title="Device Details ">
//                     <div class="card">
//                         <div class="card-body">
//                         <Table responsive className='table--bordered'> 
//                                 <tbody>
//                                     <tr>
//                                         <td><h5 class="bold-text">Visits</h5></td>
//                                         <td><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></td>                                      
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Telematics Serial Number</strong></td>
//                                         <td><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></td>                                      
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Telematics Serial Number</strong></td>
//                                         <td><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></td>                                      
//                                     </tr>
//                                     <tr>
//                                         <td><strong>Telematics Serial Number</strong></td>
//                                         <td><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></td>                                      
//                                     </tr>                                   
//                                 </tbody>
//                             </Table>
//                         </div>
//                     </div>
//                 </Collapse>
//                 <Collapse className="with-shadow" title="Asset Details ">
//                     <div class="card">
//                         <div class="card-body">
//                             <ul class="list-group">
//                                 <button class="active list-group-item-action list-group-item">Asset Details</button>
//                                 <button class="list-group-item-action list-group-item"><h5 class="bold-text">Visits</h5>{record ? `${record.assetName}` : ''}</button>
//                                 <button class="list-group-item-action list-group-item">{record ? `${record.model}` : ''}</button>
//                                 <button class="list-group-item-action list-group-item">{record ? `${record.make}` : ''}</button>
//                                 <button class="disabled list-group-item-action list-group-item">{record ? `${record.modelYear}` : ''}</button>
//                                 <button class="list-group-item-action list-group-item">{record ? `${record.compressorController}` : ''}</button>
//                                 <button class="list-group-item-action list-group-item">{record ? `${record.compressorType}` : ''}</button>
//                                 <button class="list-group-item-action list-group-item">{record ? `${record.distributorName}` : ''}</button>
//                                 <button class="disabled list-group-item-action list-group-item">{record ? `${record.motorHP}` : ''}</button>
//                                 <button class="disabled list-group-item-action list-group-item">{record ? `${record.nominalPackageFlowRating}` : ''}</button>
//                             </ul>
//                         </div>
//                     </div>
//                 </Collapse>
//             </CardBody>
//         </Card>
//     );




const DeviceTitle = ({ record }) => {
    return <span>Device / {record ? `${record.telematicsSerialNumber}` : ''}</span>;
};

const DeviceTitlee = ({ record }) => {
    return (
        // <Panel xs={12} md={12} lg={12} title={"Device : " + record.model+" - "+record.telematicsSerialNumber}> 
        <Card>
            <CardBody>                
                <Collapse className="with-shadow" title="Device Details ">
                    <div class="card">
                        <div class="card-body">
                            <table width="100%">
                                <tr width="100%">
                                    <td width="50%">
                                        <ul class="list-group">
                                            <button class="active list-group-item-action list-group-item">Field Name</button>
                                            <button class="list-group-item-action list-group-item"><strong>Telematics Serial Number</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Device Model</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Activation Date</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Last Communication</strong></button>
                                        </ul>
                                    </td>
                                    <td width="50%">
                                        <ul class="list-group">
                                            <button class="active list-group-item-action list-group-item">Values</button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.telematicsSerialNumber}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.model}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.activatedDate}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.lastCommunicated}` : ''}</strong></button>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>                   
                </Collapse>
                <Collapse className="with-shadow" title="Asset Details ">
                    <div class="card">
                        <div class="card-body">
                            <table width="100%">
                                <tr width="100%">
                                    <td width="50%">
                                        <ul class="list-group">
                                            <button class="active list-group-item-action list-group-item">Field Name</button>
                                            <button class="list-group-item-action list-group-item"><strong>Name</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Model</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Make</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>Model Year</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Compressor Controller</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Compressor Type</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>Distributor Name</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>Motor HP</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>Nominal Package FlowRating</strong></button>
                                        </ul>
                                    </td>
                                    <td width="50%">
                                        <ul class="list-group">
                                            <button class="active list-group-item-action list-group-item">Values</button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.assetName}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.model}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.make}` : ''}</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>{record ? `${record.modelYear}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.compressorController}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.compressorType}` : ''}</strong></button>
                                            <button class="list-group-item-action list-group-item"><strong>{record ? `${record.distributorName}` : ''}</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>{record ? `${record.motorHP}` : ''}</strong></button>
                                            <button class="disabled list-group-item-action list-group-item"><strong>{record ? `${record.nominalPackageFlowRating}` : ''}</strong></button>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </Collapse>
            </CardBody>
        </Card>
        //</Panel>
    );
};

export const showDevice = (props) => (
    // <ShowDeviceTab/>    

    <Show title="Devices" {...props}  >
        {/* <SimpleForm>
     <Card>
      <CardBody>
        <Collapse className="with-shadow" title="Device Details ">
                <TextField label="Telematics Serial Number" source="telematicsSerialNumber" />
                <TextField label="Device Model" source="model" />
                <TextField label="Activation Date" source="activatedDate" />
                <TextField label="Last Communication" source="lastCommunicated" />
        </Collapse>
        </CardBody>
        </Card>
    <TextField label="Telematics Serial Number" source="telematicsSerialNumber" />
    <TextField label="Device Model" source="model" />
    </SimpleForm> */}
        {/* <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Collapse className="with-shadow" title="Device Details ">
                <TextField label="Telematics Serial Number" source="telematicsSerialNumber" />
                <TextField label="Device Model" source="model" />
                <TextField label="Activation Date" source="activatedDate" />
                <TextField label="Last Communication" source="lastCommunicated" />
        </Collapse>
        <Collapse className="with-shadow" title="Asset Details">
                <TextField label="Name" source="assetName" />
                <TextField label="Model" source="model" />
                <TextField label="Make" source="make" />
                <TextField label="Model Year" source="modelYear" />
                <TextField label="Compressor Controller" source="compressorController" />
                <TextField label="Compressor Type" source="compressorType" />
                <TextField label="Distributor Name" source="distributorName" />
                <TextField label="Motor HP" source="motorHP" />
                <TextField label="Nominal Package FlowRating" source="nominalPackageFlowRating" />
        </Collapse>       
      </CardBody>
    </Card>
  </Col>      */}

        {/* <TabbedShowLayout>
            <Tab label="Device Details">
                <TextField label="Telematics Serial Number" source="telematicsSerialNumber" />
                <TextField label="Device Model" source="model" />
                <TextField label="Activation Date" source="activatedDate" />
                <TextField label="Last Communication" source="lastCommunicated" />
            </Tab>

            <Tab label="Asset Details">
                <TextField label="Name" source="assetName" />
                <TextField label="Model" source="model" />
                <TextField label="Make" source="make" />
                <TextField label="Model Year" source="modelYear" />
                <TextField label="Compressor Controller" source="compressorController" />
                <TextField label="Compressor Type" source="compressorType" />
                <TextField label="Distributor Name" source="distributorName" />
                <TextField label="Motor HP" source="motorHP" />
                <TextField label="Nominal Package FlowRating" source="nominalPackageFlowRating" />
            </Tab>
        </TabbedShowLayout> */}
        <DeviceTitlee />
    </Show>
);