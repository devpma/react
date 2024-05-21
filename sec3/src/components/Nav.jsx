import { styled } from "styled-components";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [show, setShow] = useState("false");
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const listener = () => {
        if (window.scrollY > 50) {
            setShow("true");
        } else {
            setShow("false");
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);

    return (
        <NavWrapper show={show}>
            <Logo>
                <img alt="Logo" src="/images/apple-logo.png" onClick={() => (window.location.href = '/')}/>
            </Logo>
            <Login>로그인</Login>
            <Input type="text" placeholder="영화를 검색해 주세요." className="nav__input" value={searchValue} onChange={handleChange} />
        </NavWrapper>
    );
}

const Login = styled.a`
    background:rgba(0,0,0,.6);
    padding:8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all .2s ease;

    &:hover {
        background:#f9f9f9;
        color:#000;
        border-color:transparent;
    }
`;

const Input = styled.input`
    position:fixed;
    left:50%;
    transform:translate(-50% ,0);
    background:rgba(0,0,0,.5);
    color:#fff;
    padding:5px;
    border:1px solid lightgray;
`;

const Logo = styled.a`
    padding:0;
    width:70px;
    font-size:0;
    display:inline-block;
    margin-bottom:0;
    img {
        width:100%;
        display:block;
    }
`;

const NavWrapper = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:0 36px;
    letter-spacing:1.6px;
    background: ${props => props.show ? "#000" : "transparent"};
    z-index:3;
`;

export default Nav;
