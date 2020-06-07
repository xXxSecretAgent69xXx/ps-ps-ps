<template>
    <div>
        <div>
        <H1>REGISTRIRAJ SE</H1></div>
        <div class="container">
  <div class="row">
    
    <div class="col-sm">
     <form @submit.prevent="registracija">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input v-model="password" type="password" class="form-control"  placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Again Password</label>
    <input v-model="passwordAgain" type="password" class="form-control" placeholder="againPassword" autocomplete="new-password">
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
    name: 'registriranje',
    data(){
      return{
        email: "",      
        password: "",      
        passwordAgain: ""  
      }
    },
    methods: {    
          registracija() { 
            if(this.password !=this.passwordAgain)  alert("Lozinke moraju biti iste "), console.log("error"); 
            
            else{
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
.catch(function(error) {        console.log(error);      });    }  } }
}
</script>
