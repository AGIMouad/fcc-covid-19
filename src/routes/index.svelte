<script context="module">
import request from '../data/request.js'

	export async function preload(){
		try{
			const UsStats = await request.UsStats();
			return {UsStats};
		}
		catch(e){
			console.log(e);
		}
	}
</script>
<script>
import CovidStat from '../components/CovidStat.svelte';
import CovidChart from '../components/CovidChart.svelte';
import TableContent  from '../components/TableContent.svelte';

export let UsStats;
console.log(UsStats, "usStats");
</script>
<svelte:head>
<title>Covid 19 US Tracker</title>
</svelte:head>
<div class="section header">
	<div class="container">
	<h1>Covid 19 - US</h1>
	</div>
</div>
<CovidStat />

<CovidChart />
<TableContent />
