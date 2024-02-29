import styled from 'styled-components'
import variaveis from '../../styles/variaveis';
import { Botao } from '../../styles';



export const Card = styled.div`
background-color: #FCFCFC;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 16px;
margin-bottom: 32px;
border-radius: 16px;
`;

export const Titulo=styled.h3`
font-size: 18px;
font-weight: bold;
margin-bottom:16px;
`;


export const Email = styled.input`
margin-top: 8px;
color: #8B8B8B;
font-size: 14px;
line-height:24px;
font-family: 'Roboto Mono', monospace;
display: block;
width:100%;
margin-bottom: 8px;
border: none;
background-color: transparent;
`;



export const Telefone = styled.input`
margin-top: 8px;
color: #8B8B8B;
font-size: 14px;
line-height:24px;
font-family: 'Roboto Mono', monospace;
display: block;
width:100%;
margin-bottom: 8px;
border: none;
background-color: transparent;
`;

export const BarraAcoes = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.1);
padding-top: 16px;
`;

export const BotaoCancelarRemover= styled(Botao)`
background-color: ${variaveis.vermelho};
`