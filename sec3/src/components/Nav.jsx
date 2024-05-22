import { styled } from "styled-components";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase";

const initialUserData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : {}

const Nav = () => {
    const [show, setShow] = useState("false");
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [userData, setUserData] = useState(initialUserData);
    const porvider = new GoogleAuthProvider()
    const auth = getAuth(app);

    const listener = () => {
        if (window.scrollY > 50) {
            setShow("true");
        } else {
            setShow("false");
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(!user) {
                navigate('/');
            } else if (user && pathname === '/') {
                navigate('/main');
            }
        })
    }, [auth, navigate])

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

    const handleAuth = () => {
        signInWithPopup(auth,porvider)
        .then((result) => {
            console.log("Logged In", result);
            setUserData(result.user)
            localStorage.setItem('userData', JSON.stringify(result.user));
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
        setUserData({});
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <NavWrapper show={show}>
            <Logo>
                <img alt="Logo" src="/images/apple-logo.png" onClick={() => (window.location.href = '/')}/>
            </Logo>
            { pathname === '/' ? (
                <Login onClick={handleAuth}>로그인</Login>
            ) : (
                <Input type="text" placeholder="영화를 검색해 주세요." className="nav__input" value={searchValue} onChange={handleChange} />
            )}

            {pathname !== '/' ? 
            <SignOut>
                <UserImg src={userData.photoUrl} alt={userData.displayName}/>
                <DropDown>
                    <span onClick={handleLogout}>
                        Sign Out
                    </span>
                </DropDown>
            </SignOut> 
            : null
            }
        </NavWrapper>
    );
}

const UserImg = styled.img`
    border-radius:50%;
    width:100%;
    height:100%;
`


const DropDown = styled.div`
    position:absolute;
    top:48px;
    right:0px;
    background-color:rgb(19, 19, 19);
    border:1px solid rgba(151, 151, 151, .34);
    border-radius:4px;
    box-shadow:rgb(0 0 0 /50%) 0 0 18px 0;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100%;
    opacity:0;
`
const SignOut = styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    &:hover {
        ${DropDown} {
            opacity:1;
            transition-duration: 1s;
        }
    }
`;

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
