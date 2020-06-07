<template>
    <div>
        <div >
           
            <div class="container">
  <div class="row">
    
    <div class="col-sm">
      <div class="w-80 p-3" style="background-color: #eee;">
            <span class="slikicaprofila float-left"></span>
            <h5>Dodano od strane : fake@email.com</h5> <br>
            <div class="border w-90 p-3 ">
             <h6>Imam problem....</h6>
             

            </div>


      </div>
    </div>
    
  </div>
</div>

        </div>
        
    </div>
</template>

<script>
import store from '@/store.js'
export default {
    data(){
    return store;
    },
    


}
</script>

<style scoped>
.slikicaprofila {
  
     height: 50px;
  width:50px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  /* float: left; */

}
</style>