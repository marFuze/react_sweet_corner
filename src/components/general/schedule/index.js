import React from 'react';
import { connect } from 'react-redux';
import { getScheduleData } from '../../../actions';
import ScheduleRow from './schedule-row';

class ScheduleTable extends React.Component {
    componentDidMount(){
        this.props.getScheduleData();
    }


    render () {

    console.log('schedule table props:', this.props);
    // const { schedule } = this.props;

    // const rowElements = schedule.map((schedule, index) => {
    //     return <ScheduleRow key={schedule.id} index={index} {...grade} />
   //);

    return (
        <table className=''>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {rowElements}
            </tbody>
        </table>
    );
    }
}

    function mapStateToProps(state){
        return {
            schedule: state.schedule.list
        }
    }

    export default connect(mapStateToProps, {
        getScheduleData: getScheduleData
    })(ScheduleTable);

