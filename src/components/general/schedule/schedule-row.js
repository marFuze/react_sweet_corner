import React from 'react';
import { connect } from 'react-redux';

class ScheduleRow extends React.Component {

    render () {
        const { day, time } = this.props;

        return (
            <tr className="">
                <td>{ day }</td>
                <td>{ time} </td>
            </tr>
        );
    }

}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps, {

})(ScheduleRow);