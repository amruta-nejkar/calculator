import styled, {css, styledComponent} from "styled-components";

export const MainDiv = styled.div`
    display:inline-grid;
    grid-template-columns:auto auto auto auto;
    grid-gap:10px 10px;
    background-color:gray;
    border:2px solid black;
    margin-left:400px;
    box-shadow:inset 2px 2px 5px 3px gray;
`
export const Button = styled.button`
    border:1px solid black;
    text-align:center;
    font-size:30px;
    width:80px;
    height:50px;
    background-color:#FFF;
    margin:10px;
`
export const ResultDiv = styled.input`
    width:410px;
    height:100px;
    background-color:gray;
    margin-left:398px;
    margin-top:50px;
    border:2px solid black;
    box-shadow:inset 2px 2px 2px 2px gray;
    text-align:right;
    padding-right:20px;
    color:black;
    font-size:30px;
`