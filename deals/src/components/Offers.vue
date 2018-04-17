<template>
    <div class="container">
        <div class="row-offer row">
            <div v-for="deal in current_deals" :retailer="[deal.retailer]" :promo="deal.promo" class="offer col-offer col-6 col-md-4 col-lg-3">
                <div class="jumbotron jumbotron-offer">
                    <div class="row row-header">
                        <h6 class="col-9">{{deal.name}}</h6>
                        <span class="col-3">
                            <img id="retailer-logo" :src="retailer_log[deal.retailer]" :alt="deal.retailer">
                        </span>
                    </div>
                    <div><span class>{{getDate(deal.date_from.$date)}} - {{getDate(deal.date_to.$date)}}</span></div>

                    <div v-html="deal.picture"></div>
                    <div>
                      <span v-if="deal.was_price">
                        <span>Was Price:</span>
                        <span>€{{deal.was_price}}</span>
                      </span>
                      <span v-else-if="deal.alt_was_price">
                        Promo: {{deal.alt_was_price}}
                      </span>
                      <span v-else>
                        Was Price: N/A
                      </span>
                    </div>
                    <div><span>Current Price: €{{deal.price}}</span></div>
                    <div><span>Price per unit: {{deal.price_per_unit}}</span></div>
                </div>
            </div>  <!--/for v-->
        </div> <!--/row-->
    </div>
</template>

<script>
    export default {
        name: 'offers',
        data() {
            return {
                retailer_log:{
                    "Lidl": require("../assets/Lidl.svg"),
                    "Aldi": require("../assets/Aldi.png")
                },
                current_deals: [],
                promos: []
            }
        },
        methods:{
            getDate: function(dateString){

                var options = { timezone: 'GMT', year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString("en-GB", options)
            }
        },
        created: function() {
            this.$http.get('http://192.168.1.124:5000/api/v1/current').then(
                function(response){
                    this.current_deals = response.data.offers
                    this.promos = response.data.promo
                }
            )
        }
    }

</script>

<style scoped>

    .jumbotron-offer{
        padding: 0.7rem;
        margin-bottom: 1rem;
    }
    #retailer-logo{
        height: 40px;
        width: 33px;
        float: right;
        text-align: center;
    }
    .col-offer{
        padding: 0.2rem;
    }
    .row-offer{
        margin-top: 4rem;
    }
    .row-header{
        padding: 0.2rem;
        
    }


</style>