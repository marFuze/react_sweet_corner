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
    const { schedule } = this.props;
    console.log('schedule prop:', schedule);

    const rowElements = schedule.map((schedule, index) => {
        return <ScheduleRow key={schedule.pid} index={index} {...schedule} />
    });

    return (
        <table className=''>
            <thead>
                
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

