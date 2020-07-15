import React, { useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
const Chart = ({state,xLabel,yLabel,handleDownload,setPredict,label}) => {
    useEffect(()=>{
        setPredict(label)
    },[label,setPredict])
    return(
        <div>
            <Bar data={state} options={{title:{display:true,text:`${yLabel} per ${xLabel}`},responsive: true,maintainAspectRatio: false,legend:{display:true,position:'right'}}} />
            <button onClick={handleDownload}>Download</button>
        </div>
    )
}

export default Chart