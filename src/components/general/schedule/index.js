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
    const { schedules } = this.props;

    const rowElements = schedules.map((schedule, index) => {
        return <ScheduleRow key={schedule.id} index={index} {...schedule} />
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
            schedules: state.schedules
        }
    }

    export default connect(mapStateToProps, {
        getScheduleData: getScheduleData
    })(ScheduleTable);

