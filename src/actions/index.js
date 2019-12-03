import types from './types';
import axios from 'axios';

export function getScheduleData(){
    return async  function (dispatch) {
        const resp = await axios.get('/data/schedule.json');

        console.log('Get Schedule Data Response', resp);

        dispatch({
            type: types.GET_SCHEDULE_DATA,
            schedules: resp.data
        });
    }
}