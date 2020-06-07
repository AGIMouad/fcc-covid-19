import axios from 'axios';
import parses from './parses'
async function UsStats(){
    const response = await axios.get('https://covidtracking.com/api/v1/us/current.json');
    return parses.UsStats(response.data)

}
export default{
    UsStats,
};