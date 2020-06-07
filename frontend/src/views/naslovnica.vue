<template>
  <div class="naslovnica">
    
      <div ><!-- PREMJESTIO SAM JE U DODAVANJERECEPATA -->
         <!-- <form @submit.prevent="postNewImage" class="form-inline mb-5">   
            <div class="form-group">    
                <label for="imageUrl">Image URL</label>     
                 <input v-model="newImageUrl" type="text" class="form-control ml-2" id="imageUrl" placeholder="Enter the image URL">  
           </div>    
           <button type="submit" class="btn btn-primary ml-2">Post image</button> 
            </form>  -->
      </div>
      <div class="row">     
       <!-- listanje postova -->
       <div class="col-4">    1. stupac ZADNJE DODANI RECEPTI <karticerecepata v-for="k in kartice" :info="k" :key="k.id" /> 
 </div>    
          
          <div class="col-4">      2. stupac NASUMICNI RECEPTI  <karticerecepata v-for="k in kartice" :info="k" :key="k.id" /> </div> 
          

           <div class="col-4">      3. stupac  S NAJVIŠE KOMENTARA ILI NAJBOLJI  <karticerecepata v-for="k in kartice" :info="k" :key="k.id" /> </div> 
           </div>
     </div>
  
  
</template>
<script>
import karticerecepata from '@/components/karticerecepata.vue' 
import store from '@/store.js'

export default {
  name:"naslovnica",
  components: {
    karticerecepata
  },
  data(){
    return store;
    
  },
  computed: {
      /* filter(){
        return this.kartice.filter(k => 
        k.naslov.includes(store.terminalpretrage) || k.vrijeme.includes(store.terminalpretrage))
      } */
    },
     
}
</script>