import styled from "styled-components"

const Title = (props) => {
  return (
    <TitleStyled>{props.title}</TitleStyled>
  )
}

const TitleStyled = styled.h2`
    width: 90%;
    font-size: 23px;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px;
`

export default Title