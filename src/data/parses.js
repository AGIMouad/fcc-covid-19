
import format from './format';
import moment from 'moment'

function UsStats(data){
    const [usStatRaw] = data;

    return{
        cases: format.number(usStatRaw.positive),
        deaths: format.number(usStatRaw.death),
        recovered: format.number(usStatRaw.recovered),
        ventilator: format.number(usStatRaw.onVentilatorCurrently),
        hospitalized: format.number(usStatRaw.hospitalized),
        icu: format.number(usStatRaw.inIcuCurrently),
        test: format.number(usStatRaw.totalTestResults),
        updated: moment(usStatRaw.lastModified).format('LLLL'),

    }
};
/* 
[{"date":20200606,"states":56,"positive":1916053,"negative":17862820,"pending":1796,"hospitalizedCurrently":30909,"hospitalizedCumulative":216259,"inIcuCurrently":6754,"inIcuCumulative":8920,"onVentilatorCurrently":3476,"onVentilatorCumulative":750,"recovered":500849,"dateChecked":"2020-06-06T00:00:00Z","death":103947,"hospitalized":216259,"lastModified":"2020-06-06T00:00:00Z","total":19780669,"totalTestResults":19778873,"posNeg":19778873,"deathIncrease":746,"hospitalizedIncrease":1007,"negativeIncrease":524103,"positiveIncrease":23326,"totalTestResultsIncrease":547429,"hash":"ec8ad700549425fcbea2a43cc84a1d9d5bdc84dc"}]*/
export default{
    UsStats,
};