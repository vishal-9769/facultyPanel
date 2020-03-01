import React, { Component } from 'react';
import { EuiIcon, EuiTreeView, Link} from '@elastic/eui';

export class TreeView extends Component {
    showAlert = () => {
        alert('You squashed a bug!');
      };
    
      render() {
        const items = [
          {
            label: 'Dashboard',
            id: 'dashboard',
          },
          {
            label: 'Assignment',
            id: 'dept',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                 label:'Add Assign', 
                 //<Link to="./Addassignment">Add Assign</Link>,
              //onClick={()=>window.alert("Recent Activity")}>
                                
              //   {/* //window.alert('Button clicked')}> */}
                
              // </EuiButtonEmpty> ,
                
                 id: 'addAssign',
                 icon: <EuiIcon type="document" />,
                
              },
              {
                label: 'View Assign',
                id: 'viewAssign',
                icon: <EuiIcon type="document" />,
                
              },
            ],
          },
          {
            label: 'Quiz',
            id: 'quiz',
            icon: <EuiIcon type="folderClosed" />,
            iconWhenExpanded: <EuiIcon type="folderOpen" />,
            isExpanded: true,
            children: [
              {
                label: 'Add Quiz',
                id: 'addQuiz',
                icon: <EuiIcon type="document" />,
              },
              {
                label: 'View Quiz',
                id: 'viewQuiz',
                icon: <EuiIcon type="document" />,
              },
            ],
          },
          {
            label: 'Reports',
            id: 'reports',
            icon: <EuiIcon type="document" />,
          },
        ];
    
        return (
          <div style={{ width: '13rem' }}>
            <EuiTreeView items={items} aria-label="Sample Folder Tree" />
          </div>
        );
      }
    }

export default TreeView;
