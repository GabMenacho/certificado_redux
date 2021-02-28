import { combineReducers } from "redux";

//meu estado inicial é um objeto que é um array chamado Frutas
const estadoInicial = {
    participantes: [
      {nome: "Participante 1"},
      {nome: "Participante 2"}
    ]
  };

  
    //aqui eu passo o conteudo que já tinha mais a ação para adicionar um novo elemento
    function participanteReducer(state = estadoInicial, action) {
        if (action.type ==="ADICIONAR") {
            return { frutas: [ ...state.participantes, {...action.value }] }
        }
  
        else {
            return state;
        }
    };

    function tituloReducer(state = {titulo: ""}, action) {
        if (action.type ==="ALTERAR") {
            return { titulo: action.value}
        }

        else {
            return state;
        }
    };
  
    //combinar todos os reducers, precisa colocar o objeto com todos os reducers, se existir mais de um
    const reducers = combineReducers( {participanteReducer, tituloReducer} );

    export default reducers;