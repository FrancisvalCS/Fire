import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      token: 'Carregando...',
      nome: '',
      idade: ''
    };

    let firebaseConfig = {
      apiKey: "AIzaSyByPTQtZi_XyA_8hbeeLGp3vBftunLFpDo",
      authDomain: "reactapp-f5547.firebaseapp.com",
      databaseURL: "https://reactapp-f5547.firebaseio.com",
      projectId: "reactapp-f5547",
      storageBucket: "reactapp-f5547.appspot.com",
      messagingSenderId: "875597826568",
      appId: "1:875597826568:web:a5d648d51cc57c69e31fbd",
      measurementId: "G-BZRPTR8FY4"
    };
    // Initialize Firebase
    if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
    }
    /*firebase.analytics();*/

    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    })

    firebase.database().ref('usuarios').child(1).on('value', (snapshot) =>{
        let state = this.state;
        state.nome = snapshot.val().nome;
        state.idade = snapshot.val().idade;
        this.setState(state);
    });

  }
  render(){
    const {token, nome, idade} = this.state;

    return(
      <div>
          <h1>Token: {token}</h1>  
          <h1>Nome: {nome}</h1>
          <h1>Idade: {idade}</h1>
      </div>
    );
  }
}