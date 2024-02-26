import Input from './components/Input/Input';
import Button from './components/Button/Button';
import { useState } from 'react'

import { Container, Content, Row } from "./styles";

function App() {
  const [ numero, setNumero ] = useState(0)
  const [ primeiroNumero, setPrimeiroNumero ] = useState(0)
  const [ operation, setOperation ] = useState('')
  
  const tela = (num) => {
    setNumero(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const limparTela = () => { 
    setNumero('0') 
    setPrimeiroNumero('0')
    setOperation('')
  }

  const somaNumero = () => {
    if(primeiroNumero == '0') {
        setPrimeiroNumero(String(numero))
        setNumero('')
        setOperation('+')
    } else {
      const soma = Number(primeiroNumero) + Number(numero)
      setNumero(String(soma))
      setOperation('')
    }
  }
  
  const subtraiNumero = () => {
    if(primeiroNumero == '0') {
        setPrimeiroNumero(String(numero))
        setNumero('0')
        setOperation('-')
    } else {
      const subtracao = Number(primeiroNumero) - Number(numero)
      setNumero(String(subtracao))
      setOperation('')
    }
  }
  
  const multiplicaNumero = () => {
    if(primeiroNumero == '0') {
        setPrimeiroNumero(String(numero))
        setNumero('0')
        setOperation('*')
    } else {
      const subtracao = Number(primeiroNumero) * Number(numero)
      setNumero(String(subtracao))
      setOperation('')
    }
  }
  
  const divideNumero = () => {
    if(primeiroNumero == '0') {
        setPrimeiroNumero(String(numero))
        setNumero('0')
        setOperation('/')
    } else {
      const subtracao = Number(primeiroNumero) / Number(numero)
      setNumero(subtracao.toFixed(2))
      setOperation('')
    }
  }

  const resultado = () => {
    if(primeiroNumero !== '0' && operation !== '' && numero !== "0"){
      switch(operation){
        case '+':
          somaNumero()
          break
        case '-':
          subtraiNumero()
          break
        case '*':
          multiplicaNumero()
          break
        case '/':
          divideNumero()
          break
        default:
          limparTela()
      }
    }
  }
  return (
    <div>
      <Container>
        <Content>
        <Input value={numero} />
          <Row>
            <Button label="+" onClick={somaNumero}/>
            <Button label="-" onClick={subtraiNumero}/>
            <Button label="C" onClick={limparTela}/>
            <Button label="=" onClick={resultado}/>
          </Row>
          <Row>
            <Button label="9" onClick={() => tela('9')}/>
            <Button label="8" onClick={() => tela('8')}/>
            <Button label="7" onClick={() => tela('7')}/>
            <Button label="*" onClick={multiplicaNumero}/>
          </Row>
          <Row>
            <Button label="6" onClick={() => tela('6')}/>
            <Button label="5" onClick={() => tela('5')}/>
            <Button label="4" onClick={() => tela('4')}/>
            <Button label="/" onClick={divideNumero}/>
          </Row>
          <Row>
            <Button label="3" onClick={() => tela('3')}/>
            <Button label="2" onClick={() => tela('2')}/>
            <Button label="1" onClick={() => tela('1')}/>
            <Button label="0" onClick={() => tela('0')}/>
          </Row>
        </Content>
      </Container>
    </div>
  )
}

export default App;
