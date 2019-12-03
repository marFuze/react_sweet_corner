import React from 'react';
import { connect } from 'react-redux';

class ScheduleRow extends React.Component {

    render () {
        const { day, pid } = this.props;

        return (
            <tr className="">
                <td>{ day }</td>
                <td>{ pid } </td>
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps)(ScheduleRow);