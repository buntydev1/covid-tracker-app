import React,{useState,useEffect} from 'react';
import fetchDailyData from '../../api';
import {Line,Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data:{confirmed,recovered,deaths},country})=>{

    const [dailyData,setDailyData] = useState([]);

    useEffect(() =>{
        const fetchAPI =async () =>{
            setDailyData(await fetchDailyData());
        } 
        console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length 
        ? ( 
        <Line
        data={{
            labels:dailyData.map(({date}) => new Date(date).toLocaleDateString()),
            datasets:[{
                data:dailyData.map((data) => data.confirmed),
                label: 'Infected',
                borderColor:'rgb(0, 217, 255)',
                fill:true
            },{
                data:dailyData.map((data) => data.deaths),
                label: 'deaths',
                borderColor:'red',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill:true
            },{
                data: dailyData.map((data) => data.recovered),
                label: 'Recovered',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
        ],
        }} 
        />
    ) : null
    );

    const barChart = (
        confirmed
        ?(
            <Bar 
                data={{
                    labels:['Infected','Recovered','Deaths'],
                    datasets:[{
                        labels:'People',
                        backgroundColor:['rgb(0, 217, 255)','rgb(0, 255, 0)','rgb(255, 0, 0)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                    }]
                }}
                options={{
                    legend:{ display:false},
                    title:{ display: true, text: `current state in ${country}`}
                }}
            />
        ) : null
    );
       
    
    return(
        <div className={styles.container}>
            {country? barChart : lineChart}
        </div>
    )
}
export default Chart;