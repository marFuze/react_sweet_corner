import React from 'react';
import axios from 'axios';

export default props => {
    axios.get('/data/schedule.json').then(data => {console.log('data:',data);}
    )

    return(
        <div>Schedule</div>
    );
}