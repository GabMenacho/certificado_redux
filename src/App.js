import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import certificado from '../src/App.css'

function App() {
  const [inputParticipantes, setInputParticipantes] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("");
  
  //redux, aqui chamamos no state os reducers, onde ficam armazenados nossos reducers
  const objetoParticipantes = useSelector((state) => state.participanteReducer.participantes); //função de callback que recebe o estado, tudo o que tiver na store, os reducers
  const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
  //o const objetoFrutas faz o papel de um array

  const dispatch = useDispatch();

  function adicionarFruta(event) {
    event.preventDefault();

    const objParticipante = {
      nome: inputParticipantes
    }
    //executa a função de envio para a store. A value é o valor que vai ser adicionado, o objeto
    dispatch({type:"ADICIONAR", value: objParticipante});
  }
  
  // nova função de evento para alterar título
  function alterarTitulo(event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value});
  }

  return (
    <div>

      <form>
        <label>Título</label>
        <input 
        placeholder="Digite um título para a sua lista" 
        value={inputTitulo}
        onChange={alterarTitulo}
        />
      </form>

      <h1>{stateTitulo}</h1>

      <form onSubmit = {adicionarFruta}>
        
        <input placeholder = "Digite uma fruta" 
        value={inputParticipantes} 
        onChange={(event) => setInputParticipantes(event.target.value)} />

        <button>Enviar</button>

      </form>

      <div>
      {objetoParticipantes.map((participante, index) => {
        return(
          <li key={index}>{participante.nome}</li>
        )
      })}
      </div>

      <div id="certificado">
        <h1>Certificado Digital</h1>
        
        <br />
        <br />
        <p>Atribuimos o presente certificado a:
        <p><strong><center>{inputParticipantes}, </center> </strong></p> 
        <br />
        <br />
        <br />
        Por ter realizado o curso "Horas de Sono que valem Ouro"
         no modo online com 48 horas de duração ininterruptas, aplicando as técnicas 
         de "Conchinha", "Som de Baleia Azul" e "Travesseiro com sachês de Camomila". </p>
         
         <h4> São Paulo, 28 de Fevereiro de 2021</h4>
      </div>
    </div>
  );
}

export default App;
