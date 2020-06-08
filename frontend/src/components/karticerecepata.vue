<template>
  <div class="hello">
   <h1>Kartice s receptima</h1>
    <div class="card">  
        <router-link :to="{ name: 'receptPodaci', params: {id: info._id} }"> 
         <div class="card-header text-left">{{info.naziv}}</div> 
        </router-link>    
            <div v-if="pic" class="card-body p-0">         
              <img  class="card-img-top" :src="url" alt="Slika"/>
            </div>  
                
            <div class="card-footer text-muted text-left">   
              Objavljeno:
              {{new Date(info.createdAt).getDate()}}.{{new Date(info.createdAt).getMonth()}}.{{new Date(info.createdAt).getFullYear()}}
              <div title="Obrisi" class="delete" @click="ObrisiRecept(info._id)">
                <i class="fas fa-folder-minus fa-lg"></i>
              </div>
            </div>  
           
    </div>

  </div>
</template>

<script>
import Recept from '../services/recept'
export default {
  name: 'karticerecepata',
  props: ["info"],
  data(){
    return{
      url: '',
      blob: '',
      pic: false
    }
  },
  async created() {
    
    let res = await Recept.ReceptSlika(this.info._id)
    console.log(res);
    if(res.data.size !== 0) this.pic = true
    this.url = `${res.config.baseURL}/recept/${this.info._id}/slika`

  },
  methods: {
    async ObrisiRecept(id){
      try {
        let res = await Recept.Obrisi(id)
        console.log(res);
        window.location.reload()
      } catch (error) {
        console.log(error);
      }
    }
  },
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

img{
  object-fit: contain ;
}

.delete{
  cursor: pointer;
}
</style>
