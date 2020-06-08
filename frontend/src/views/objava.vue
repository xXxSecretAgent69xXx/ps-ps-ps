<template>
    <div>
        <div >
           
            <div class="container">
                <p class="error">{{objavaError}}</p>
  <div class="row">
    <div class="col-sm">
      <div class="w-80 p-3" style="background-color: #eee;">
            <span class="slikicaprofila float-left"></span>
            <h5>Dodano od strane : fake@email.com</h5> <br>
              <div class="border w-90 p-3 ">
                <h6>{{objava.sadrzaj}}</h6>
              </div>
      </div>
    </div>
  </div>
    <div class="row komentar">
        <div class="col-md-2"></div>

        <div class="col-md-8">
            <p class="error">{{komentarError}}</p>
            <div class="form-group">
                <textarea v-model="noviKomentar.sadrzaj" class="form-group komentar" placeholder="Dodaj komentar" cols="30"></textarea>
            </div>
            <div>
                <button @click.prevent="DodajKomentar()" class="btn btn-info my-2 my-sm-0 mr-2">Dodaj komentar</button>
            </div>
        </div>

        <div class="col-md-2"></div>
    </div>
    <br><br>
    <div class="row">
        <div class="col-md-2"></div>

        <div class="col-md-8">
            <h3>Komentari</h3>
            <div >
                <p v-for="komentar in komentari" :key="komentar._id" class="alert alert-secondary jedanKom" >
                    {{komentar.sadrzaj}}
                    <button @click="ObrisiKomentar(komentar._id)" class="btn btn-danger obrisi">Obriši</button>
                </p>
                
            </div>
        </div>

        <div class="col-md-2"></div>
    </div>
</div>

        </div>
        
    </div>
</template>

<script>
import forumkomentari from '@/components/forumkomentari.vue'
import Forum from '../services/forumObjava'
import forumKomentar from '../services/forumKomentar'
export default {
    name: 'objava',
    components: {
        forumkomentari
    },
    data(){
        return{
            objava: {},
            komentarError: '',
            objavaError: '',
            noviKomentar:{
                sadrzaj: ''
            },
            komentari: []            
        }
    },
    async created() {
        await this.DohvatiObjavu()
        await this.DohvatiKomentare()
    },
    methods: {
        async DohvatiObjavu(){
            try {
                let res = await Forum.JednaObjava(this.$route.params.id)
                console.log(res);
                this.objava = res.data
            } catch (error) {
                this.objavaError = error.data
            }
        },
        async DodajKomentar(){
            this.noviKomentar.objava = this.$route.params.id 
            try {
                let res = await forumKomentar.DodajKomentar(this.noviKomentar)
                await this.DohvatiKomentare()
                console.log(res);
            } catch (error) {
                this.komentarError = error.data.error
            }  
        },
        async DohvatiKomentare(){
            try {
                let res = await Forum.Komentari(this.$route.params.id)
                console.log(res);
                this.komentari = res.data
            } catch (error) {
                this.komentarError = error.data.error
            }  
        },
        async ObrisiKomentar(id){
            try {
                let res = await forumKomentar.Obrisi(id)
                console.log(res);
                await this.DohvatiKomentare()
            } catch (error) {
                this.komentarError = error.data.error
            }  
        },
    },
}
</script>

<style lang="css" scoped>

.komentar{
    margin-top: 15px;
}

.jedanKom{
    position: relative;
}

.obrisi{
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 0 5px 5px 0;
}

</style>