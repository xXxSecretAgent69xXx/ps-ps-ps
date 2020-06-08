<template>
  <div class="forum">
    <h1>Forum</h1>
    <h5>Ukoliko zelite sudjelovati u raspravama morate biti prijavljeni</h5> <br>
    <p class="error">{{error}}</p>
    <div class="col-sm">
      <div class="w-80 p-3" style="background-color: #eee;">
            <div class="slikicaprofila"></div>
            
           <div class="form-group">
                      <input v-model="body.sadrzaj" type="text" placeholder="Unesi što te zanima ili ti nije jasno?"  class="form-control">
                    </div> <br>
<div>
                      <a @click="Objavi()" class=" btn btn-info my-2 my-sm-0 mr-2">Dodaj</a>
                    </div>

      </div>
    </div> <br> 
    <forumkomentari class="objava" v-for="objava in objave" :key="objava._id" :info="objava" /> <br>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import forumkomentari from '@/components/forumkomentari.vue'
import Forum from '../services/forumObjava'
export default {
  name: 'forum',
  components: {
    forumkomentari
  },
  data(){
    return {
      body: {
        sadrzaj: ''
      },
      objave: [],
      error: ''
    }
  },
  async created() {
    await this.SveObjave()
  },
  methods: {
    async Objavi(){
      try {
        let res = await Forum.DodajObjavu(this.body)
        console.log(res);
        await this.SveObjave()
      } catch (error) {
        this.error = error.data.error
      }
    },
    async SveObjave(){
      try {
        let res = await Forum.SveObjave()
        console.log(res);
        this.objave = res.data.objave
      } catch (error) {
        this.error = error.data
      }
    }
  },
}
</script>

<style lang="css" scoped>
  .objava{
    margin: 20px 0 20px 0;
  }

  .error{
    color: red;
  }
</style>