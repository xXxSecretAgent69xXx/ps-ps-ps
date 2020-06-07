
<template>
  <div class="recepti">

<h1>DODAVANJE RECEPATA</h1>
    <h2>Dodaj novi recept</h2>
    
   
<div>
<div class="modal-header">
              
            </div>

    
</div>
      <div class="modal-body">

                <div class="row">
                  <!-- main product -->
                  <div class="col-md-4">
                    
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <input type="text" placeholder="Naziv recepta"  class="form-control">
                    </div>

                    <div class="form-group ">
                      <input type="text" placeholder="Opis recepta"  class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Vrijeme pripreme"  class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Sastojci za pripremu"  class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" placeholder="Način pripreme"  class="form-control">
                    </div>
            <!-- ZASAD SAMO URL  -->
                    <form @submit.prevent="postNewImage" class="form-inline mb-5">   
            <div class="form-group">    
                <label for="imageUrl">Image URL</label>     
                 <input v-model="newImageUrl" type="text" class="form-control ml-2" id="imageUrl" placeholder="Enter the image URL">  
           </div>    
           <button type="submit" class="btn btn-primary ml-2">Post image</button> 
            </form> 
                    <div>
                      <a class="btn btn-info my-2 my-sm-0 mr-2">Dodaj</a>
                    </div>
                  </div>
                  
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    

                    
                    

                  </div>
                </div>

                

            </div>
 

      
           
     </div>
  
  
</template>
<script>


import karticerecepata from '@/components/karticerecepata.vue'
import store from '@/store.js'
export default {
  name:"recepti",
  components: {
    karticerecepata
  },
  data(){
    return store;
  },
  methods: {    postNewImage() {  
           db.collection("posts").add({      
         url: this.newImageUrl,      
           email: this.email,   
                posted_at: Date.now()  
                   })  
                    console.log("uspjesnoste dodali sliku") }  }
}
</script>

<style scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

