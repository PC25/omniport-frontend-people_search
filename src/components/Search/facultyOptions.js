import React, { Component } from 'react'
import { Dropdown, Grid } from 'semantic-ui-react'

import blocks from '../../css/app.css'

class FacultyOptionsComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const { designationOptions, designation, departmentOptions, department, dropdownChange } = this.props
        return(
            <div styleName='blocks.menu-student-filters'>
                <Grid columns={4}>
                    <Grid.Column styleName = "blocks.menu-faculty_items">
                    <Dropdown
                        name='designation'
                        onChange={(e, { name, value }) => dropdownChange(name, value)}
                        placeholder="Designation"
                        options={designationOptions}
                        selection
                        clearable
                        scrolling
                        search
                        value={designation}
                    />
                    </Grid.Column >
                    <Grid.Column styleName = "blocks.menu-faculty_items">
                    <Dropdown
                        name='department'
                        onChange={(e, { name, value }) => dropdownChange(name, value)}
                        placeholder="Department"
                        options={departmentOptions}
                        selection
                        clearable
                        scrolling
                        search
                        value={department}
                    />
                    </Grid.Column>
                </Grid>
                </div>
        )
    }
}

export default FacultyOptionsComponent
