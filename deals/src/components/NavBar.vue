<template>
<div class="container">
  <nav class="navbar fixed-top navbar-dark bg-dark">
  	<span class="h1 navbar-brand mb-0">Deals</span>

  	<button v-if="['Offer'].indexOf($route.name)" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navFilter" aria-controls="navFilter" aria-expanded="false" aria-label="Toggle Filter">
      <i class="fa fa-filter" aria-hidden="true">
        <span class="sr-only">Filter</span>
        <span>Filter</span>
      </i>
    </button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSubNav" aria-controls="navbarSubNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarSubNav">
   		<div class="navbar-nav"> 
      	<a class="nav-item nav-link active" href="#">Home</a>
      	<a class="nav-item nav-link" href="#">About</a>
      	<a class="nav-item nav-link" href="#">Terms & Conditions</a>
    	</div>
    </div>

    <div class="collapse navbar-collapse" id="navFilter">
      <div class="navbar-nav"> 
        <a class="nav-item nav-link active" href="#">Lidl</a>
        <a class="nav-item nav-link" href="#">Aldi</a>
      </div>
    </div>

  </nav>
</div>
</template>

<script>
	export default {
		name: 'nav-bar',
    props:['routeMap']
	}
  $(document).on('click',function(e) {
    if(  $(e.target).attr('class') != 'navbar' ) {
      $('.collapse').collapse("hide");
    }
  });
  $(document).on('scroll',function(e) {
    if(  $(e.target).attr('class') != 'navbar' ) {
      $('.collapse').collapse("hide");
    }
  });
  // console.log(routeMap);
</script>

<style>

</style>