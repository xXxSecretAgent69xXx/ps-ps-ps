<template>
   <div class="pretraga">
              <form class="form-inline my-2 my-lg-0 mr-auto ml-5">
                  <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Pretraži forum" aria-label="Search">
               </form>
            </div>
</template>

<script>
import _ from 'lodash'
import Forum from '@/services/forumObjava'
export default {
   data(){
      return{
         search: ''
      }
   },
   watch: {
      search:
         _.debounce(async function(val) {
            this.$store.forumPretraga = val
            try {
               let res = await Forum.SveObjave(val)
               console.log(res);
               this.$store.objave = res.data.objave
            } catch (error) {
               console.log(error);
            }
         }, 500)
   },
}
</script>