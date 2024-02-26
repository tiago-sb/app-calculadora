import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 6rem;
    border-radius: .5rem;
    display: flex;
    justify-content: flex-end;
    
    & {
        input {
            width: 100%;
            height: 6rem;
            background-color: #DDA0DD;
            border: none;
            border-radius: .5rem;
            font-size: 35pt;
            padding: 0 1.5rem;
            font-family: 'Roboto', sans serif;
            color: white;
        }
    }
`