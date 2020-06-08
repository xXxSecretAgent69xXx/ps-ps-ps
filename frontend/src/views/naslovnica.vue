<template>
  <div class="naslovnica">
    <p class="error">{{error}}</p>
    
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
       <div class="col-12"><karticerecepata class="recept" v-for="k in recepti" :info="k" :key="k._id" /> 
 </div>    
          
          <!-- <div class="col-4">      2. stupac NASUMICNI RECEPTI  <karticerecepata v-for="k in recepti" :info="k" :key="k.id" /> </div> 
          

           <div class="col-4">      3. stupac  S NAJVIŠE KOMENTARA ILI NAJBOLJI  <karticerecepata v-for="k in recepti" :info="k" :key="k.id" /> </div>  -->
           </div>
     </div>
  
  
</template>
<script>
import karticerecepata from '@/components/karticerecepata.vue' 
import store from '@/store.js'
import Recept from '../services/recept'

export default {
  name:"naslovnica",
  components: {
    karticerecepata
  },
  data(){
    return{
      recepti: [],
      error: ''
    }  
  },
  async created() {
    try {
      let res = await Recept.SviRecepti()
      console.log(res);
      this.recepti = res.data.recepti
    } catch (error) {
      this.error = error.data
    }
  },

     
}
</script>

<style lang="css">
  .recept{
    margin: 0 300px 0 300px;
  }

  .error{
    color: red
  }

  @media only screen and (max-width: 991px){
    .recept{
    margin: 0 10% 0 10%;
    }
  }
  @media only screen and (max-width: 450px){
    .recept{
    margin: 0 2% 0 2%;
    }
  }
</style>