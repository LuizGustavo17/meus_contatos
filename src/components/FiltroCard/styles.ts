import styled from "styled-components";

import { Props} from '.'
type PropsSemLegendaEContador = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLegendaEContador>`
color: ${(props)=> (props.ativo ? '#1E90FF': '#5E5E5E;')};
padding: 8px;
border: 1px solid ${(props)=> (props.ativo ? '#1E90FF': '#A1A1A1')};
background-color: ${(props)=> (props.ativo ? 'fff': '#FCFCFC')};
border-radius: 8px;
`

export const Contador = styled.span`
font-weight:bold;
font-size:24px;
display: block;
`

export const Label = styled.span`
font-size: 14px;`