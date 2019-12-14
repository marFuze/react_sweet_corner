import React from 'react';
import { connect } from 'react-redux';

class ScheduleRow extends React.Component {

    render () {
        const { close, day, open } = this.props;

        console.log("schedule row this.props:", this.props);

        return (
            <tr className="">
                
                <td>{ day } </td>
                <td>{ open }</td>
                <td>{ close }</td>
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(ScheduleRow);