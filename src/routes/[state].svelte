<script context="module">
export async function preload(page){
  return { state:page.params['state']};
}
</script> 

<script>
import CovidStat from '../components/CovidStat.svelte';
import CovidChart from '../components/CovidChart.svelte';
import TableContent  from '../components/TableContent.svelte';
export let state;
</script>

<svelte:head>
<title>Covid 19 - {state}</title>
</svelte:head>

<CovidStat />

<CovidChart />