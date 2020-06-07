<template>
  <div class="hello">
   <h1>Kartice s receptima</h1>
    <div class="card">       
         <div class="card-header text-left">        
             Objavljeno od strane : {{info.email}}     </div>    
             <div class="card-body p-0">         
                 <img class="card-img-top" :src="info.url" alt="Bolonjez"/>
                      </div>        
                      <div class="card-footer text-muted text-left">   
                                  vrijeme kada je stavljeno ili koliko je proslo od toga, komentari, lajkovi mozda 
                                 {{info.posted_at}}
 </div>      </div>

  </div>
</template>

<script>
export default {
  name: 'karticerecepata',
  props: ["info"]
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
