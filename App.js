import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  AppRegistry,
} from 'react-native';

export default function App() {
  const [modalEx1Visible, setModalEx1Visible] = useState(false);
  const [modalEx2Visible, setModalEx2Visible] = useState(false);
  const [modalEx3Visible, setModalEx3Visible] = useState(false);
  const [modalEx4Visible, setModalEx4Visible] = useState(false);
  const [modalEx5Visible, setModalEx5Visible] = useState(false);
  const [modalEx6Visible, setModalEx6Visible] = useState(false);
  const [modalEx7Visible, setModalEx7Visible] = useState(false);
  const [modalEx8Visible, setModalEx8Visible] = useState(false);
  const [modalEx9Visible, setModalEx9Visible] = useState(false);
  const [modalEx10Visible, setModalEx10Visible] = useState(false);
  const [modalEx11Visible, setModalEx11Visible] = useState(false);
  const [modalEx12Visible, setModalEx12Visible] = useState(false);
  const [modalEx13Visible, setModalEx13Visible] = useState(false);
  const [modalEx14Visible, setModalEx14Visible] = useState(false);
  const [modalEx15Visible, setModalEx15Visible] = useState(false);
  const [modalEx16Visible, setModalEx16Visible] = useState(false);
  const [modalEx17Visible, setModalEx17Visible] = useState(false);
  const [modalEx18Visible, setModalEx18Visible] = useState(false);
  const [modalEx19Visible, setModalEx19Visible] = useState(false);
  const [modalEx20Visible, setModalEx20Visible] = useState(false);


  const [num, setNum] = useState(0);
  const [result, setResult] = useState('');

  
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');

    function limpar(){
        setNum('');
        setNum2('');
        setNum3('');
        setNum4('');
        setResult('');
    }
 

  function verificarMultiplo() {
    const n = parseInt(num);
    if (isNaN(n)) return setResult('Digite um número válido!');
    if (n % 3 === 0 && n % 5 === 0) {
      setResult(`${n} é múltiplo de 3 e 5 ao mesmo tempo.`);
    } else {
      setResult(`${n} não é múltiplo de 3 e 5 ao mesmo tempo.`);
    }
  }; //1

  function Primo() {
    const n = parseInt(num);
    if (isNaN(n)) return setResult('Digite um número válido!');
    if (n <= 1) return setResult(`${n} não é primo`);
    
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return setResult(`${n} não é primo`);
    }
  
    setResult(`${n} é primo`);
  } //2

  function quadrado(){
    setResult(parseFloat(num)**2);
    return setResult;
    } // 3


  function calcularHipotenusa  () {
    const c1 = parseFloat(num);
    const c2 = parseFloat(num2);
    if (isNaN(c1) || isNaN(c2)) return setResult('Informe valores válidos!');
    const h = Math.sqrt(c1 ** 2 + c2 ** 2);
    setResult(`Hipotenusa = ${h.toFixed(2)}`);
  }; //4

  function verificarNumero() {
    const n = parseFloat(num);
    if (n>0) {
      setResult(`${n} é POSITIVO`);
    } else if(n<0){
      setResult(`${n} é NEGATIVO`);
    } else{
        setResult(`${n} é ZERO`);
    }
  }; //5

  function entre() {
    const n = parseFloat(num);
    if (n>=100 && n<=200) {
      setResult(`${n} está entre 100 e 200`);
    } else{
        setResult(`${n} NÃO está entre 100 e 200`);
    }
  }; //6

  function calcularMedia  () {
    const c1 = parseFloat(num);
    const c2 = parseFloat(num2);
    const c3 = parseFloat(num3);
    const c4 = parseFloat(num4);

    const m = ((c1+c2+c3+c4)/4);
    if(m<6){
        setResult(`Aluno Reprovado - média: ${m}`);
    } else{
        setResult(`Aluno Aprovado - média: ${m}`);
    }
  }; //7

  function salario() {
    const sal = parseFloat(num);
    const per = parseFloat(num2);
    
    const novo = (sal+(sal*(per/100)));

    setResult(`O novo salário é R$ ${novo}`);
  }; //8

  function tempo() {
    const dis = parseFloat(num);
    const vel = parseFloat(num2);
    
    const novo = (dis/vel);

    setResult(`O tempo da viagem foi de ${novo} horas`);
  }; //9

  function desconto() {
    const n = parseFloat(num);
    
    const novo = (n - (n*0.10));

    setResult(`O produto com desconto é R$${novo}`);
  }; //10

  function trabalhados(){
    const dias = parseFloat(num);
    const valor = parseFloat(num2);

    const novo = (dias*valor);

    setResult(`O salário é R$ ${novo}`);
  } //11

  function converta(){
    const n = parseFloat(num);

    const hora = (n/3600);
    const min = ((n%3600)/60);

    setResult(`${n} segundos é igual a ${hora} hora e ${min} minutos`);
  } //12

  function volume() {
    const com = parseFloat(num);
    const lar = parseFloat(num2);
    const alt = parseFloat(num3);

    const novo = (com*lar*alt);

    setResult(`O volume é ${novo}`);
  }; //13

  function identificarPoligono() {
    const n = parseInt(num);
  
    if (isNaN(n)) {
      setResult('Digite um número válido');
      return;
    }
  
    if (n === 3) {
      setResult('Triângulo');
    } else if (n === 4) {
      setResult('Quadrado');
    } else if (n === 5) {
      setResult('Pentágono');
    } else if (n === 6) {
      setResult('Hexágono');
    } else if (n === 7) {
      setResult('Heptágono');
    } else if (n === 8) {
      setResult('Octógono');
    } else if (n === 9) {
      setResult('Eneágono');
    } else if (n === 10) {
      setResult('Decágono');
    } else {
      setResult('Figura não identificada');
    }
  }; //14
  

  



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Exercícios de Lógica</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx1Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 1: Múltiplos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx2Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 2: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx3Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 3: Quadrado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx4Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 4: Hipotenusa</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx5Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 5:  +   -   0</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx6Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 6: Entre</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx7Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 7: Média</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx8Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 8: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx9Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 9: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx10Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 10: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx11Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 11: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx12Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 12: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx13Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 13: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx14Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 14: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx15Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 15: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx16Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 16: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx17Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 17: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx18Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 18: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx19Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 19: Primo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalEx20Visible(true)}
      >
        <Text style={styles.buttonText}>Exercício 20: Triângulo</Text>
      </TouchableOpacity>


      {/* Modal Exercício 1 */}
      <Modal visible={modalEx1Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Verificar múltiplos de 3 e 5</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número inteiro"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <Button title="Verificar" onPress={verificarMultiplo} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx1Visible(false);} }/>
        </View>
      </Modal>

        {/* Modal Exercício 2 */}
      <Modal visible={modalEx2Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Verificar número Primo</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número inteiro"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <Button title="Verificar" onPress={Primo} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx2Visible(false);} }/>
        </View>
      </Modal>

       {/* Modal Exercício 3 */}
       <Modal visible={modalEx3Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Calcular Quadrado</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número inteiro"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <Button title="Calcular" onPress={quadrado} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx3Visible(false);} }/>
        </View>
      </Modal>


      {/* Modal Exercício 4 */}
      <Modal visible={modalEx4Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Calcular Hipotenusa</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o cateto 1"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Digite o cateto 2"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <Button title="Calcular" onPress={calcularHipotenusa} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx4Visible(false);} }/>
        </View>
      </Modal>

         {/* Modal Exercício 5 */}
       <Modal visible={modalEx5Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Verificar Número</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <Button title="Verificar" onPress={verificarNumero} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx5Visible(false);} }/>
        </View>
      </Modal>

       {/* Modal Exercício 6 */}
       <Modal visible={modalEx6Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Verificar Número</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite um número"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <Button title="Verificar" onPress={entre} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx6Visible(false);} }/>
        </View>
      </Modal>

      {/* Modal Exercício 7 */}
      <Modal visible={modalEx7Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Calcular Média</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite a 1ª nota"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
           <TextInput
            style={styles.input}
            placeholder="Digite a 2ª nota"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
           <TextInput
            style={styles.input}
            placeholder="Digite a 3ª nota"
            keyboardType="numeric"
            value={num3}
            onChangeText={setNum3}
          />
           <TextInput
            style={styles.input}
            placeholder="Digite a 4ª nota"
            keyboardType="numeric"
            value={num4}
            onChangeText={setNum4}
          />
          <Button title="Calcular" onPress={calcularMedia} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx7Visible(false);} }/>
        </View>
      </Modal>

       {/* Modal Exercício 8 */}
       <Modal visible={modalEx8Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Novo Salário</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o salário"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe o percentual"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <Button title="Calcular" onPress={salario} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx8Visible(false);} }/>
        </View>
      </Modal>

        {/* Modal Exercício 9 */}
        <Modal visible={modalEx9Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Tempo da Viagem</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe a distância em KM"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe a velocidade média"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <Button title="Calcular" onPress={tempo} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx9Visible(false);} }/>
        </View>
      </Modal>

      {/* Modal Exercício 10 */}
      <Modal visible={modalEx10Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Desconto de 10%</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o valor do produto"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
         
          <Button title="Calcular" onPress={desconto} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx10Visible(false);} }/>
        </View>
      </Modal>

      {/* Modal Exercício 11 */}
      <Modal visible={modalEx11Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Salário Final</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe os dias trabalhados"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe o valor da diária"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <Button title="Calcular" onPress={trabalhados} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx11Visible(false);} }/>
        </View>
      </Modal>

      {/* Modal Exercício 12 */}
      <Modal visible={modalEx12Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Conversão</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe os segundos"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
         
          <Button title="Calcular" onPress={converta} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx12Visible(false);} }/>
        </View>
      </Modal>

       {/* Modal Exercício 13 */}
       <Modal visible={modalEx13Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>Volume </Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o comprimento"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
          <TextInput
            style={styles.input}
            placeholder="Informe a largura"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />

          <TextInput
            style={styles.input}
            placeholder="Informe a altura"
            keyboardType="numeric"
            value={num3}
            onChangeText={setNum3}
          />
          <Button title="Calcular" onPress={volume} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx13Visible(false);} }/>
        </View>
      </Modal>

       {/* Modal Exercício 14 */}
       <Modal visible={modalEx14Visible} animationType="slide">
        <View style={styles.modalContent}>
          <Text style={styles.title}>identificar Poligono</Text>
          <TextInput
            style={styles.input}
            placeholder="Informe o número de lados"
            keyboardType="numeric"
            value={num}
            onChangeText={setNum}
          />
         
          <Button title="Verificar" onPress={identificarPoligono} />
          <Text style={styles.result}>{result}</Text>
          <Button title="Fechar" color="tomato" onPress={() => {limpar(); setModalEx14Visible(false);} }/>
        </View>
      </Modal>









    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#FFF0F5',
    flexGrow: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    marginBottom: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#F08080',
    padding: 16,
    marginVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  modalContent: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFC0CB',
  },
  title: {
    fontSize: 25,
    marginBottom: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 18,
    borderRadius: 25,
    marginBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  result: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: '#444',
  },
});



AppRegistry.registerComponent('main', () => App);