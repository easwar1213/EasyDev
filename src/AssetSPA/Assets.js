import React from 'react';
//import { List, Datagrid, TextField,EmailField, ReferenceField } from 'react-admin';
import { Responsive, BooleanInput, SimpleShowLayout, SimpleList, ReferenceManyField, ReferenceArrayField, SelectArrayInput, Show, ShowButton, Tab, TabbedShowLayout, Filter, List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { Col, Container, Row } from 'reactstrap';
import Map from './map';
import SensorGroupTable from './SensorGroupTable';
import Table from '../components/table/Table';
import Panel from '../components/Panel';
import AssetDetails from './AssetDetails';
import { Card, CardBody } from 'reactstrap';
import Collapse from '../components/Collapse';
import {Badge} from 'reactstrap';
import '../index.css';

export const AssetList = (props) => (

    <Container id="deviceContainer">
        <Row>
            <Col md={12}>
                <h3 className='page-title'>Assets</h3>
            </Col>
        </Row>
        <Row>
            <br />
        </Row>
        <Row>
            {/* <AssetDetails /> */}
            <Panel xs={12} md={12} lg={12} title="Asset Details">
                <List title="Assets" {...props} filters={<AssetFilter />}  >
                    <Datagrid>
                        <TextField source="telematicsSerialNumber" />
                        <TextField source="make" />
                        <TextField source="assetName" />
                        <TextField source="model" />
                        <TextField source="distributorName" />
                        <ShowButton label="Show" />
                    </Datagrid>
                </List>
            </Panel>
        </Row>
    </Container>
);

const AssetTitle = ({ record }) => {
    return <span>Assets / {record ? `${record.telematicsSerialNumber}` : ''}</span>;
};

const AssetDetailsTab = ({ record }) => {
    return (
        <div>
        {/* <Panel xs={12} md={12} lg={12} title="Device Status Distribution">  */}
        {/* <Card>
            <CardBody>  */}
                {/* <Collapse className="with-shadow" title="Asset Details "> */}
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
                {/* </Collapse> */}
            {/* </CardBody>
        </Card> */}
         {/* </Panel> */}
         </div>
    );
};

const AssetAlertsTab = ({ record }) => {
    return (
        <Panel xs={12} md={12} lg={12} title="Device Status">
         <Table responsive className='table--bordered'>
          <thead>
          <tr>
            <th>Status</th>
            <th>Asset Name</th>
            <th>Time Active</th>
            <th>Alert Priority</th>
            <th>Alert Status</th>
            <th>Event</th>                     
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><Badge color='success'>{record ? `${record.assetName}` : ''}</Badge></td>
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
    );
};

export const showAsset = (props) => (

    <Show title="Assets" {...props}  >
        <TabbedShowLayout >

            <Tab label="Location" >
                <Map vale="check" />
            </Tab>

            <Tab label="Data" >
                <SensorGroupTable />
            </Tab>


            <Tab label="Details">
                {/* <Row>
                    <Col xs={12} sm={6}>
                        <TextField label="Name" source="assetName" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <TextField label="Model" source="model" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <TextField label="Make" source="make" />
                    </Col>
                    <Col xs={12} sm={6}>    
                        <TextField label="Model Year" source="modelYear" />
                    </Col>
                    <Col xs={12} sm={6}>    
                        <TextField label="Compressor Controller" source="compressorController" />
                    </Col>
                    <Col xs={12} sm={6}>    
                        <TextField label="Compressor Type" source="compressorType" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <TextField label="Distributor Name" source="distributorName" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <TextField label="Motor HP" source="motorHP" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <TextField label="Nominal Package FlowRating" source="nominalPackageFlowRating" />
                    </Col>
                </Row> */}

                <AssetDetailsTab />

                {/* <TextField label="Name" source="assetName" />

                <TextField label="Model" source="model" />

                <TextField label="Make" source="make" />

                <TextField label="Model Year" source="modelYear" />

                <TextField label="Compressor Controller" source="compressorController" />

                <TextField label="Compressor Type" source="compressorType" />

                <TextField label="Distributor Name" source="distributorName" />

                <TextField label="Motor HP" source="motorHP" />

                <TextField label="Nominal Package FlowRating" source="nominalPackageFlowRating" /> */}



            </Tab>

            <Tab label="Alerts" filters={<AlertFilter />}>
                <ReferenceManyField filters={<AlertFilter />}  {...props} label="Alerts" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetAlerts" >
                    {/* <List {...props}filters={<AlertFilter />} filter={{ telematicsSerialNumber:"telematicsSerialNumber"}} title="Alerts"> */}
                    <Datagrid >
                        <TextField source="assetName" />
                        <TextField label="Time Active" source="timeStamp" />
                        <TextField source="alertPriority" />
                        <TextField source="alertStatus" />
                        <TextField source="event" />
                    </Datagrid>
                    {/* </List>  */}
                </ReferenceManyField>
            </Tab>

            <Tab label="Maintenance">
                <ReferenceManyField filters={<AssetFilter />} label="Maintenance" target="telematicsSerialNumber" source="telematicsSerialNumber" reference="getAssetMaintenance" >
                    <Datagrid>
                        <TextField source="plan" />
                        <TextField source="serviceRunHours" />
                        <TextField source="lastService" />
                        <TextField source="status" />
                        <TextField source="assetName" />
                        {/* <ShowButton /> */}

                    </Datagrid>
                </ReferenceManyField>
            </Tab>
        </TabbedShowLayout>

    </Show >
);

const AssetFilter = (props) => (
    <Filter {...props}>

        <SelectArrayInput label="Maintenance Status" source="maintenanceStatus" choices={[
            { id: 'due', name: 'Due' },
            { id: 'upcoming', name: 'Upcoming' }
        ]} />

        <SelectArrayInput label="Alert Priority" source="alertPriority" choices={[
            { id: 'high', name: 'High' },
            { id: 'medium', name: 'Medium' },
            { id: 'low', name: 'Low' }
        ]} />

        <SelectInput label="Communication" source="communication" choices={[
            { id: 'c_1', name: 'Communicated Within 24 Hour' },
            { id: 'c_7', name: 'Communicated Within 7 days' },
            { id: 'c_30', name: 'Communicated Within 30 days' },
            { id: 'n_1', name: 'Not Communicated Within 24 Hour' },
            { id: 'n_7', name: 'Not Communicated Within 7 days' },
            { id: 'n_30', name: 'Not Communicated Within 30 days' },
            { id: 'n', name: 'Not Communicated Ever' }
        ]} />

    </Filter>
);


const AlertFilter = (props) => (
    <Filter {...props}>

        <SelectArrayInput label="Status" source="alertStatus" choices={[
            { id: 'active', name: 'Active' },
            { id: 'returned', name: 'Returned' },
            { id: 'acknowledged', name: 'Acknowledged' }
        ]} />

        <SelectArrayInput label="Priority" source="alertPriority" choices={[
            { id: 'high', name: 'High' },
            { id: 'medium', name: 'Medium' },
            { id: 'low', name: 'Low' }
        ]} />

        <SelectArrayInput label="Type" source="alertType" choices={[
            { id: 'alert', name: 'Alert' },
            { id: 'fault', name: 'Fault' },
            { id: 'geozones', name: 'GeoZones' }
        ]} />

    </Filter>
);
//filter={{ is_published: true }}