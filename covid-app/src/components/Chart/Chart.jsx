import React,{useState,useEffect} from 'react';
import fetchDailyData from '../../api';
import {Line} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ()=>{

    const [dailyData,setDailyData] = useState({});

    useEffect(() =>{
        const fetchAPI =async () =>{
            setDailyData(await fetchDailyData());
        } 
        console.log(dailyData);
        fetchAPI();
    },[dailyData]);

    const lineChart = (
        dailyData[0]
        ? <Line
        data={{
            labels:'',
            datasets:[{},{}],
        }} : null
        />
    )
       
    
    return(
        <div>

        </div>
    )
}
export default Chart;