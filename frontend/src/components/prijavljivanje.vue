<template>
    <div>
        <div>
        <H1>PRIJAVI SE</H1></div>
        <div class="container">
  <div class="row">
    
    <div class="col-sm">
     <form  @submit.prevent="login">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input  v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    
  </div>
</div>
        
    </div>
</template>


<script>
export default {
    name: 'prijavljivanje',
    data(){
      return{
        email: '',
        password:'',
      }
    },
    methods: {
    login () { // 4 
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
        alert("Nepoznata sifra, pokusaj te ponovno")
      });
    }
}
}
</script>
