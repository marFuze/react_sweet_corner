import React from 'react';
import { connect } from 'react-redux';
import { getScheduleData } from '../../../actions';
import ScheduleRow from './schedule-row';

class ScheduleTable extends React.Component {
   
    

    componentDidMount(){
        this.props.getScheduleData();
    }

    render () {

    const { schedules } = this.props;
    
    //this.props && this.props.schedules.schedule && 

    const rowElements = schedules.map((element, index) => {
     
        return <ScheduleRow key={element.pid} index={index} {...element} />
    });
    
    return (
        <table className=''>
            <thead>
                <tr>
                    <th>Day</th>
                    <th>Open</th>
                    <th>Close</th>
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
            schedules: state.schedules.list
        }
    }

    export default connect(mapStateToProps, {
        getScheduleData: getScheduleData
    })(ScheduleTable);

