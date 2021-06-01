import styled from "styled-components";

export const SET_USER_DATA = "SET_USER_DATA"
export const SET_AUTH = "SET_AUTH"
export const SET_ERROR = "SET_ERROR"

export const LogBtn = styled.button`
    background: rgb(255, 165, 0);
    width: 100%;
    border-radius: 10px;
    font-size: 30px;
    color:white;
    padding: 7px;
    cursor:pointer;
`;

export const MainWindow = styled.div`
    background: black;
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    text-align:center;
    font-family: 'Times New Roman', Times, serif; 
    font-size: 250%; 
    color: white;
    font-weight: bold;
    width: 30%;
    height: 40%;
`;

export const SignIn = styled.label`
    color:white;
`;

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    text-align:left;
    font-weight: normal;
`;

export const Label = styled.label`
    margin-bottom: 10px;
`;

export const Input = styled.input`
    margin-bottom: 20px;
    background: rgb(211, 211, 211);
    height:30px;
    border-radius: 7px;
    padding-bottom: 9px;
    padding-top: 9px;
    padding-left:20px;
    font-weight: bold;
    font-size: 20px;
`;


export const TableInfo = styled.div`
    border-radius: 10px;
    background-color: black;
    height: 130px;
    width: 400px;
    font-family: 'Times New Roman', Times, serif; 
    font-size: 150%; 
    color: rgb(176, 196, 222);
    font-weight: bold;
`;

export const Container = styled.div`
    position: relative;
    background-image: url(https://img.gazeta.ru/files3/979/10633979/upload-simpsons29-pic4_zoom-1500x1500-85586.jpg);
    background-size: cover;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;