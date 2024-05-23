import styled from "styled-components";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        localStorage.setItem("userData", JSON.stringify(result.user));
        navigate("/main");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignUp = () => {
    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          localStorage.setItem("userData", JSON.stringify(result.user));
        })
        .catch((error) => {
          console.log(error.message);
          alert("Enter your exact Email and Password");
        });
    } else {
      alert("Enter your exact Email and Password");
    }
  };

  const handleSignIn = () => {
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          localStorage.setItem("userData", JSON.stringify(result.user));
        })
        .catch((error) => {
          console.log(error.message);
          alert("Enter your exact Email and Password");
        });
    } else {
      alert("Enter your exact Email and Password");
    }
  };

  return (
    <Container>
      <Center>
        <Logo src="/images/apple-gray-logo.svg" alt="로고" />
        <HeadingText>회원가입/로그인</HeadingText>
        <Wrapper>
          <GoogleButton onClick={handleAuth}>Sign in with Google</GoogleButton>
        </Wrapper>
        <Wrapper>
          <Text
            value={email}
            onChange={emailHandler}
            placeholder="Email"
            required
          />
          <Text
            value={password}
            onChange={passwordHandler}
            type="password"
            placeholder="Password"
            required
          />
          <BtnWrap>
            <Btn onClick={handleSignIn}>Sign In</Btn>
            <Btn onClick={handleSignUp}>Sign Up</Btn>
          </BtnWrap>
        </Wrapper>
      </Center>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
`;

const HeadingText = styled.h1`
  font-size: 1.9rem;
  color: rgb(225, 225, 225, 0.8);
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: rgb(225, 225, 225, 0.8);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.input`
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, 0.04);
  width: 410px;
  font-weight: 400;
  margin-bottom: 0.8rem;
  cursor: text;
  outline: none;
  color: #fff;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.08);
  }
  &:focus {
    outline: 2px solid rgb(20, 100, 218);
  }
`;
const Button = styled.button`
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  font-weight: 400;
  cursor: pointer;
`;

const GoogleButton = styled(Button)`
  background-color: rgba(225, 225, 225);
  color: #111;
  width: 442px;
  margin: 1.5rem 0 2.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 19px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 330px;
`;

const Btn = styled(Button)`
  background-color: rgb(72, 74, 78);
  color: #fff;
  width: 160px;
  margin-top: 1rem;
  font-size: 18px;

  &:hover {
    background-color: rgb(6, 2, 4);
  }
`;

export default LoginPage;
