<template>
    <div class="hello">
   <nav class="navbar custom-nav  navbar-expand-lg navbar-light " style="background-color: #6d6c96;">
     <div class="container">
        <router-link class="navbar-brand" to="/">Naslovnica</router-link>
        <router-link class="navbar-brand" to="/onama">O nama</router-link>
        <router-link class="navbar-brand" to="/forum">Forum</router-link>
        <!-- <router-link v-if="authenticated" class="navbar-brand" to="/recepti">Recepti</router-link> -->
        <router-link  class="navbar-brand" to="/recepti">Recepti</router-link>
        
         <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>  -->

        
        
        
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav mr-auto">
          </ul>

          <form class="form-inline my-2 my-lg-0">
            
           
           
     <div class="pretraga">
         <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
                  <input v-model="terminalpretrage" class="form-control mr-sm-2" type="search" placeholder="Trazi nesto" aria-label="Search">
                </form>
        </div>

          </form>
        </div>
      </div>
      
    </nav>
    <div class="container">
 
    
   
    <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-2">FOODGET</h1>
    <router-link class="btn btn-info my-2 my-sm-0 mr-2" to="/dodavanjerecepata">Dodaj recept</router-link>
    
     <router-link v-if="!authenticated" class="btn btn-info my-2 my-sm-0 mr-2 btn-lg" to="/prijava">Prijava</router-link> 
                 <span v-if="authenticated"> 
                <b>Prijavljeni ste kao :</b>  {{ email }}  <br>
                {{terminalpretrage}}
                  <a @click="logout" class="btn btn-info my-2 my-sm-0 mr-2" href="#">Logout</a> 
                   
                   <router-link  class="btn btn-info my-2 my-sm-0 mr-2" to="profil">Postavke profila</router-link><br><br>
                   <router-link class="btn btn-info my-2 my-sm-0 mr-2" to="/dodavanjerecepata">Dodaj recept</router-link>
                   
                </span> 
                
    
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
  name: "Navbar",
  props: {
    msg: String
  },
  
  methods:{
      logout() {
      firebase.auth().signOut()
    }
  },
  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("Korisnik je prijavljen s meilom " + user.email)
        this.authenticated = true
        this.email = user.email
        //redirekcija na home stranicu // naziv home je definiran u routes/index.js
        if (this.$route.name !== 'naslovnica')
          this.$router.push({name: 'naslovnica'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        console.log("Neuspješna lozinka pokusaj te ponovo ili izradite racun")
        this.authenticated = false


        //redirekcija na prijava
       /*  if (this.$route.name !== 'prijava')
          this.$router.push({name: 'prijava'}).catch(err => console.log(err)) */
      }
    });

     // citanje iz baze al nam ovdje ne treba jer je u app.vue
 /* db.collection("posts").orderBy("posted_at").limit(10).onSnapshot(snapshot => 
    {  snapshot.docChanges().forEach(change => {  
        const data = change.doc.data()    
        
        if (change.type !== "added") { 
          // reagiramo samo ako je riječ o dodavanju novog posta    
            return    }    
            const card = { // prilagođavamo Firestore post na naš post.    
              id: change.doc.id, // jedinstveni Firestore id dokumenta     
               url: data.url,    
                 email: data.email,   
                    title: 'Some title', // ne dolazi iz baze, možemo li to popraviti?   
                       posted_at: data.posted_at    };    
                       this.kartice.unshift(card); // dodaj na početak Array-a
                         }); }); */
   

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@media (min-width: 992px) { 
    
    .navbar.custom-nav{
      padding-top:16px;
      padding-bottom:16px;
      background: rgba(172, 0, 0, 0.774) !important;
    }
    .navbar-brand{
      color:azure;
    }
   }

.btn3:hover{
  transform: rotate(360deg);
      transition-duration: 1s;
}

</style>