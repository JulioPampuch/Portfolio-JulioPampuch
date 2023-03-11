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

    color: ${({ theme }) => theme.neutrals['text']};

    @media (min-width: 768px) and (max-width: 1023px) { 
      font-size: 22.5px;
    }

    @media (max-width: 767px) {
      font-size: 20px;
    }
`

export default Title