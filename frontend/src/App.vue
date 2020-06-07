<template>
  <div id="app">
    
    <navbar />
  <!-- <HelloWorld/> -->
  
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import HelloWorld from '@/components/HelloWorld.vue'
import store from '@/store.js'



export default {
  data(){
    return store;  // uspjesno cita iz stora
  },
  name: 'App',
  
  components: {
    Navbar,HelloWorld
  },
  mounted(){ // citamo ucitanje postove s firestorea
    db.collection("posts").orderBy("posted_at").limit(10)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          const data = change.doc.data()
          if (change.type !== "added") return
            const card = {id: change.doc.id, url: data.url, email: data.email, title: this.userEmail, posted_at: data.posted_at}
            this.kartice.unshift(card)
        });
    });
  

  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
