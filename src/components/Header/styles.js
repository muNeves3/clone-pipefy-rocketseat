import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  padding:  0 30px;
  background: #7159c1;
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .personal {
    display: flex;
    flex-direction: column;
  }

  .personal .perfilImg {
    height: 35px;
    width: 35px;

    margin-bottom: 5px;
    cursor: pointer;
  }

  .profile {
    display: flex;
    align-items: center;
    margin-left: 50px;
  }

  .profile .bell {
    width: 27px;
    height: 27px;
    margin-right: 10px;

    cursor: pointer;
  }

  .personal a {
    background-color: #9178e3;
    
    color: white;
    text-decoration: none;
    text-align: center;

    border: none;
    padding: 7px;
    border-radius:2px;
    cursor:pointer;
  }

  .personal span::before {
    content: "+";
    color: #FFF;
  }
`;
