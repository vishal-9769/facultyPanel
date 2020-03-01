import React, { Component,Fragment } from 'react'
import NavBar from './NavigationBar'
//import { DisplayToggles } from './display_toggles';
import {
    EuiPage,
    EuiPageBody,
    EuiPageSideBar,
    EuiFilePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiSpacer,
  EuiSwitch,
  } from '@elastic/eui'
import TreeView from './TreeView'
//import FacultyDashboard from './FacultyDashboard'

export class Addassignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          files: {},
          large: true,
        };
      }
      onChange = files => {
        this.setState({
          files: files,
        });
      };
      renderFiles() {
        if (this.state.files.length > 0) {
          return (
            <ul>
              {Object.keys(this.state.files).map((item, i) => (
                <li key={i}>
                  <strong>{this.state.files[item].name}</strong> (
                  {this.state.files[item].size} bytes)
                </li>
              ))}
            </ul>
          );
        } else {
          return (
            <p>Add some files to see a demo of retrieving from the FileList</p>
          );
        }
      }

    render() {
        return (
            <div>
                <NavBar/>
                <EuiPage>
                    <EuiPageSideBar><TreeView/></EuiPageSideBar>
                    <EuiPageBody>
 <Fragment>
        <EuiFlexGroup>
          <EuiFlexItem grow={2}>
            {/* DisplayToggles wrapper for Docs only */}
            {/* <DisplayToggles
              canReadOnly={false}
              extras={[
                <EuiSwitch
                  compressed
                  label={'large'}
                  checked={this.state.large}
                  onChange={e => {
                    this.setState({ large: e.target.checked });
                  }}
                />,
              ]}>*/}
              <EuiFilePicker 
                id="asdf2"
                
                style={{ maxWidth: '400px' }}
                multiple
                initialPromptText="Select or drag and drop multiple files"
                onChange={files => {
                  this.onChange(files);
                }}
                display={this.state.large ? 'large' : 'default'}
              />
            {/* </DisplayToggles> */}
            <EuiSpacer />
          </EuiFlexItem>
          <br/>
          <EuiFlexItem> 
            <EuiText  style={{ maxWidth: '400px' }}>
                
              <h3>Files attached</h3>
              {this.renderFiles()}
            </EuiText>
          </EuiFlexItem>
        </EuiFlexGroup>
      </Fragment>
                        {/* <FacultyDashboard/> */}
                    </EuiPageBody>
                </EuiPage>
            </div>
        )
    }

}
export default Addassignment;
