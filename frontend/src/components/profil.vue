<template>
  <div class="products">
      <div class="container">

        <div class="">
            <div class="">
              <div class="">
                    <h3>Postavke Profila</h3>
                 <p>
                   Promjeni sifru
                 </p>
                 <input type="button" @click="resetPassword" value="Posalji na mail" class="btn btn-success ">
              </div>
              
            </div>
          </div>


         
              </div>
            </div>
         

</template>

<script>


export default {
  name: "profil",
  
  props: {
    msg: String
  },

  data(){
    return {
        
        account:{
           
            email:null,
           
        } 
    }
  },
  
  methods:{
      resetPassword(){
          const auth = firebase.auth();          
          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
               console.log("Nova sifra je poslana")
               alert("Nova sifra je poslana")
          }).catch((error) =>  {
              console.log(error);
          });
      },
      /*  updateProfile(){
          this.$firestore.profile.update(this.profile);
          console.log("uspjesno je azurirano")
      },  */
      
  },
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>