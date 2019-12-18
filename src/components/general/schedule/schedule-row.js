import React from 'react';
import { connect } from 'react-redux';

class ScheduleRow extends React.Component {

    render () {
        const { close, day, open } = this.props;

        return (
            <tr className="schedule-row">
                
                <td>{ day } </td>
                <td>{ open } - {close}</td>
                
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(ScheduleRow);