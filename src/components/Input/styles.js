import styled from 'styled-components'
import digitalDisplay from '../../../src/digital_display.ttf'

export const InputContainer = styled.div`
  @font-face {
    font-family: 'digital';
    src: url(${digitalDisplay}) format('truetype');
  }

  width: 100%;
  height: 6rem;
  border-radius: .5rem;
  display: flex;
  justify-content: flex-end;

  input {
    width: 100%;
    height: 6rem;
    background-color: #AFAFAF;
    border: none;
    border-radius: .5rem;
    font-size: 35pt;
    padding: 0 1.5rem;
    font-family: 'digital', sans-serif;
    color: white;
  }
`
