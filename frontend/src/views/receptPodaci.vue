<template>
  <div class="recepti">

<h1>Podatci o receptu</h1>
    
<div>
<div class="modal-header">
              
            </div>

    
</div>
      <div class="modal-body">
          <div v-if="pic" class="row">
            <div class="col-md-2 form-group"></div>
            <div class="col-md-8 form-group"><img :src="url"></div>
            <div class="col-md-2 form-group"></div>
          </div>

          <div class="row">
            <div class="col-md-4"></div>

            <div class="col-md-4">
              <p class="error">{{receptError}}</p>
              <div class="form-group">Naziv
                <input v-model="podaci.naziv" type="text" placeholder="Naziv recepta"  class="form-control">
              </div>

              <div class="form-group "> Opis
                <input v-model="podaci.opis"  type="text" placeholder="Opis recepta"  class="form-control">
              </div>

              <div class="form-group">Vrijeme pripreme
                <input v-model="podaci.vrijemePripreme" type="text" placeholder="Vrijeme pripreme"  class="form-control">
              </div>

              <div class="form-group"> Sastojci
                <input v-model="podaci.sastojci" type="text" placeholder="Sastojci za pripremu"  class="form-control">
              </div>

              <div class="form-group"> Način pripreme
                <textarea v-model="podaci.priprema" type="text" placeholder="Način pripreme"  class="form-control priprema" />
              </div>

              <div>
                <a @click.prevent="Update()" class="btn btn-info my-2 my-sm-0 mr-2">Update</a>
              </div>
            </div>
            
            <div class="col-md-4"></div>
          </div>
          <br><br><br><br>

          <div class="row">
            <div class="col-md-2"></div>

            <div class="col-md-8">
              <p class="error">{{komentarError}}</p>
              <div class="form-group">
                <textarea v-model="komentar.sadrzaj" class="form-group komentar" placeholder="Dodaj komentar" cols="30"></textarea>
              </div>
              <div>
                <button @click.prevent="PostKomentar()" class="btn btn-info my-2 my-sm-0 mr-2">Dodaj komentar</button>
              </div>
            </div>

            <div class="col-md-2"></div>
          </div>
          <br><br>
          <div class="row">
            <div class="col-md-2"></div>
            
            <div class="col-md-8">
              <h3>Komentari</h3>
              <div v-for="komentar in komentari" :key="komentar._id">
                <p class="alert alert-secondary jedanKom" >
                  {{komentar.sadrzaj}}
                  <button @click.prevent="ObrisiKomentar(komentar._id)" class="btn btn-danger obrisi">Obriši</button>
                </p>
                
              </div>
              
              
            </div>

            <div class="col-md-2"></div>
          </div>

      </div>
 

      
           
     </div>
  
  
</template>

<script>
import Recept from '../services/recept'
import ReceptKomentar from '../services/receptKomentar'
export default {
  data(){
    return{
      podaci: {},
      receptError: '',
      komentarError: '',
      pic: false,
      url: '',
      komentar:{
        sadrzaj: '',
        recept: ''
      },
      komentari: []
    }
  },
  async created() {
    await this.getRecept()
    await this.getKomentari()
  },
  methods: {
    async Update(){
      this.podaci.sastojci = this.podaci.sastojci.split(',').map((sastojak) =>{
        return {sastojak}
      })
      const noviPodaci = {
        "naziv": this.podaci.naziv,
        "opis": this.podaci.opis,
        "vrijemePripreme": this.podaci.vrijemePripreme,
        "sastojci": this.podaci.sastojci,
        "priprema": this.podaci.priprema
      }
      try {
        let res = await Recept.UpdateRecept(this.$route.params.id, noviPodaci)
        console.log(res);
      } catch (error) {
        this.receptEerror = error.data
      }
    },
    async PostKomentar(){
      this.komentar.recept = this.$route.params.id
      try {
        let res = await ReceptKomentar.ObjaviKomentar(this.komentar)
        this.komentar = ''
        await this.getKomentari()
      } catch (error) {
        this.komentarError = error.data.error
      }
    },
    async getRecept(){
      try {
        let res = await Recept.JedanRecept(this.$route.params.id)
        let slika = await Recept.ReceptSlika(this.$route.params.id)
        if(slika.data.size !== 0) this.pic = true
        this.url = `${slika.config.baseURL}/recept/${this.$route.params.id}/slika`
        this.podaci = res.data
        this.podaci.sastojci = res.data.sastojci.map((sastojak) =>{
          return sastojak.sastojak
        }).join(',')
      } catch (error) {
        this.receptEerror = error.data
      }
    },
    async getKomentari(){
      try {
        let komentari = await Recept.ReceptKomentari(this.$route.params.id)
        this.komentari = komentari.data
      } catch (error) {
        this.komentarError = error.data
      }
    },
    async ObrisiKomentar(id){
      try {
        let res = await ReceptKomentar.ObrisiKomentar(id)
        console.log(res);
        await this.getKomentari()
      } catch (error) {
        this.komentarError = error.data
      }
       
    }
  },
}
</script>

<style>
.error{
  color: red;
}

img{
  max-width:100%;
  max-height:100%;
}

.komentar{
  margin: 0px;
  width: 100%;
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