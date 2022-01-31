import styled, { createGlobalStyle } from 'styled-components';
import Input from './Input';
import Button from './Button';
const Login = () => {
    return <LoginStyle>
        <HeaderLogin> Авторизация</HeaderLogin>
        <InputContainer>
            <Input type={"text"} placeholder="Логин" />
            <Input type={"password"} placeholder="Пароль" />
        </InputContainer>
        <ButtonContainer>
            <Button content={"Войти"} />
        </ButtonContainer>
    </LoginStyle>
};


const LoginStyle = styled.div`{
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
}`;

const HeaderLogin = styled.h2`
    margin: 3rem 0 3rem 0;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
height: 20%;
width: 100%;
`;

const ButtonContainer = styled.div`
margin: 4rem 0 2rem 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;
export default Login;