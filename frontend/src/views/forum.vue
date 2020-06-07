<template>
  <div class="forum">
    <h1>Forum</h1>
    <h5>Ukoliko zelite sudjelovati u raspravama morate biti prijavljeni</h5> <br>
    <div class="col-sm">
      <div class="w-80 p-3" style="background-color: #eee;">
            <div class="slikicaprofila"></div>
            
           <div class="form-group">
                      <input type="text" placeholder="Unesi što te zanima ili ti nije jasno?"  class="form-control">
                    </div> <br>
<div>
                      <a class=" btn btn-info my-2 my-sm-0 mr-2">Dodaj</a>
                    </div>

      </div>
    </div> <br> 
    <forumkomentari/> <br>
    <forumkomentari/> <br>
    <forumkomentari/> <br>
    <forumkomentari/>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import forumkomentari from '@/components/forumkomentari.vue'

export default {
  name: 'forum',
  components: {
    forumkomentari
  }
}
</script>