import axios from 'axios';
const url = "http://covid19.mathdro.id/api";

export const fetchData = async () =>{
    try {
        const {data} = await axios.get(url);

        const modifiedData = {

        }

        return data;
        
    } catch (error) {
        
    }
}