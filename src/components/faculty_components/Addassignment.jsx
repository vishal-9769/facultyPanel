import React, { Component,Fragment } from 'react'
import NavBar from './NavigationBar'
//import { DisplayToggles } from './display_toggles';
import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar, 
  EuiDatePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiComboBox,
  EuiFieldText,
  EuiFormRow,
  EuiFilePicker,
  EuiRange,
  EuiSelect,
  EuiPanel,
  EuiSwitch,
  } from '@elastic/eui'
import TreeView from './TreeView'
import { EuiButton } from '@elastic/eui';
//import FacultyDashboard from './FacultyDashboard'

export class Addassignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSwitchChecked: false,
      comboBoxSelectionOptions: [],
      value: '20',
    };
    /* this.state = {
      startDate: moment(),
    }; */
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  onRangeChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked,
    });
  };
    render() {
        return (
            <div>
                <NavBar/>
                <EuiPage>
                    <EuiPageSideBar><TreeView/></EuiPageSideBar>
                    <EuiPageBody style={{justifyContent: "center",alignItems:'center'}}>
             <h1 style={{}}> Add Assignment</h1>    
        <EuiFormRow
          label="Assignment Title"
         >
          <EuiFieldText name="first" placeholder="Enter Assignment Title" display="center"/>
        </EuiFormRow>

        <EuiFormRow label="Select-Assignment Type" >
          <EuiSelect display="centerCompressed"
            options={[
              { value: 'theory', text: 'Theory' },
              { value: 'Programming', text: 'Programming' },
              
            ]}
            
          />
        </EuiFormRow>

        <EuiFormRow label="Upload Assignment file">
          <EuiFilePicker display="centerCompressed" />
        </EuiFormRow>

        <EuiFormRow label="Select Deadline">
          <EuiDatePicker display="centerCompressed"
            showTimeSelect
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </EuiFormRow>
        <EuiButton>Add Assignment</EuiButton>
   
                        {/* <FacultyDashboard/> */}
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }

}
export default Addassignment;
