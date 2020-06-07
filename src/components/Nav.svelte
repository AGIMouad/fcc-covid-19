<script>
export let state;
let isOpen=false;

function toggleNav(){
	isOpen=!isOpen;
}
</script>
<style>
 @media(min-width:769px){

 }
</style>

<nav class="navbar" role="navigation" aria-label="main navigation" style="border-bottom: solid gray 2px!important;">
<div class="navbar-brand">
<a href="/" class="navbar-item" >
<img src="https://information.tv5monde.com/sites/info.tv5monde.com/files/styles/large/public/assets/images/SARS-CoV-2_without_background.png?itok=xL_LaYMy" alt="corona" height="40px">
</a>
<span class="navbar-burger" aria-label="menu" class:is-active={isOpen} on:click={toggleNav} aria-expanded="false">
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
<span aria-hidden="true"></span>
</span>
<div class="navbar-menu" class:is-active={isOpen}>
<div class="navbar-start">
<a href="/" class="navbar-item" class:is-active={state === 'home'}> Home</a>
<a href="/about" class="navbar-item" class:is-active={state === 'about'} > About</a>
</div>
</div>
</div></nav>
