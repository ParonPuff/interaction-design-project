<template>
  <div class="navbar">
    <div class="Menu">
      <va-button @click="ShowMenu()"><span class="material-icons">menu</span></va-button>
    </div>

    <div class="Search" @click="ShowSearch()">
      <va-input v-model="value" placeholder="Search">
        <span class="material-icons">search</span>
      </va-input>
    </div>

    <div class="Notifications">
      <va-button>
         <span class="material-icons">notifications</span>
      </va-button>
    </div>
  </div>
  <dialog closed id="mainDialog">
    <div class="modalContainer"><component :key="CurrentModal" :is="CurrentModal" @Navigate="ChangeModal" @exitDialog="ExitMenu"/></div>
  </dialog>
</template>

<script>
import MenuScreen from './components/MenuScreen.vue'
import SearchScreen from './components/SearchScreen.vue'                                                                   
import Database from './database/dbFunctions';
export default {

  name: 'App',
  components: {
    MenuScreen: MenuScreen, 
    SearchScreen: SearchScreen,
  },
  data(){
    return{
      value: "",
      mainDialog: null,
      CurrentModal: MenuScreen, SearchScreen,
    };
  },
  mounted(){
    this.mainDialog = document.getElementById("mainDialog");
    Database.created();
  },

  methods:{
    ShowSearch(){
      this.CurrentModal = SearchScreen;
      this.mainDialog.showModal()
    },
    ExitSearch(){
      this.mainDialog.close();
    },
    ShowMenu(){
      this.CurrentModal = MenuScreen;
      this.mainDialog.showModal()
    },
    ExitMenu(){
      this.mainDialog.close();
    },
    ChangeModal(newModal){
      this.CurrentModal = newModal;
    }
  }
}
</script>

<style>
  :root{
    --darkGrey: #666666;
    --lightGrey: #979797;
    --offWhite: #EEEEEE;
    --blue: #0088cc;
    --red: #EE2E31;
    --yellow: #FCBF49;
  }
  body{
    background-image: url("./MapBackground.png");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .navbar{
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .Menu{
    align-self: left;
  }
  .Search{
    align-self: center;
  }
  .Notifications{
    align-self: right;
  }
  .modalContainer{
    width: 75vw;
  }
  dialog{
    background-color: #d9d9d9;
    border: none;
    border-radius: 5px;
    height: 75vh;
  }
</style>
