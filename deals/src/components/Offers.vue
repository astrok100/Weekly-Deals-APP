<template>
	<div>
		<h1>{{title}}</h1>


		<div class="row row-offcanvas row-offcanvas-right">

	        <div class="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
	          <div class="list-group">
	          	ABC

	          </div>
	        </div><!--/span-->

	        <div class="col-4 col-md-9">

	          <div class="row">

	            <div v-for="deal in current_deals" :retailer="[deal.retailer]" :promo="deal.promo" class="col-lg-4 col-md-6 col-12 offer">
	            	<!-- {{deal}} -->

	            	<h4>{{deal.name}}</h4>
	            	<div v-html="deal.picture"></div>
	            	<br>
	            	<span>Date_from: {{getDate(deal.date_from.$date)}}</span>

	            	<br>
	            	<span>Date_to: {{getDate(deal.date_to.$date)}}</span>
	            	<br>
	            	<div>
	            		<span>Was Price:</span>
	            		<span v-if="deal.was_price">{{deal.was_price}}</span>
	            		<span v-else="deal.alt_was_price">{{deal.alt_was_price}}</span>
	            	</div>
					<span>Now Price: {{deal.price}}</span>
					<br>
	            	<span>Price_per_unit: {{deal.price_per_unit}}</span>
	            	<hr>
	            </div><!--/span-->

	          </div><!--/row-->

	        </div><!--/span-->

		</div>

	</div>
</template>

<script>
	export default {
		name: 'offers',
		data() {
			return {
				title: 'OFFERS',
				current_deals: []
			}
		},
		methods:{
			getDate: function(dateString){
				return new Date(dateString).toLocaleDateString("en-UK")
			},
			logg: function(data){
				console.log(data)
			}
		},
		created: function() {
			this.$http.get('http://192.168.1.100:5000/api/v1/current').then(
				function(response){
					this.current_deals = response.data
				}
			)
		}
	}	
</script>

<style scoped>
	.offer{
		padding-right: 80px;
		padding-bottom: 50px;
	}
</style>