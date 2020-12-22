import axios from 'axios';
const url = "http://covid19.mathdro.id/api";

export const fetchData = async () =>{
    try {
        const response = await axios.get(url);
        console.log(response);
        
    } catch (error) {
        
    }
}