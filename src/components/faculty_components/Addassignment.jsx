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
import { CENTER_ALIGNMENT } from '@elastic/eui/lib/services/alignment';
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
                    <EuiPageBody >
                     
             <h1 style={{}}> Add Assignment</h1>    
            <hr/>
            <div className='container'>
        <EuiFormRow label="Assignment Title">
          <EuiFieldText id="assignmentTitle" placeholder="Enter Assignment Title" display="center"/>
        </EuiFormRow>

        <EuiFormRow label="Select-Assignment Type" >
          <EuiSelect 
            options={[
              { value: 'theory', text: 'Theory' },
              { value: 'Programming', text: 'Programming' },
              
            ]}
            
          />
        </EuiFormRow>
        <EuiFormRow label="Select-Subject" >
          <EuiSelect 
            options={[
              { value: 'theory', text: 'JAVA' },
              { value: 'Programming', text: 'PHP' },
              
            ]}
            
          />
        </EuiFormRow>
        <EuiFormRow label="Select-Semester" >
          <EuiSelect
            options={[
              { value: 'theory', text: 'Sem-2' },
              { value: 'Programming', text: 'Sem-3' },
              
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
        <EuiFormRow>
        <EuiButton>Add Assignment</EuiButton>
        </EuiFormRow>
        </div>
                        {/* <FacultyDashboard/> */}
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }

}
export default Addassignment;
