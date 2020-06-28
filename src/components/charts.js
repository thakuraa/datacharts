import React from 'react';
import {Bar} from 'react-chartjs-2';
const Chart = ({state,xLabel,yLabel}) => {
    return(
        <div>
            <Bar data={state} options={{title:{display:true,text:`${yLabel} per ${xLabel}`},legend:{display:true,position:'right'}}} />
        </div>
    )
}

export default Chart