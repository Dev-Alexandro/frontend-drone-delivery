import { title } from 'process';
import styled from 'styled-components';


export const Content = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  .card-calc{
    width: 500px;
    max-width: 1120px;
    height: 450px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;    
    position: relative;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 40px 0 40px;
    background-color: #f3eaea;
    border-radius: 10px;
    box-shadow: 0 0 100px rgba(0,0,0,0.1);

    .title{
        font-size: 30px;
        font-weight: bold;
        color: #000;
        margin-top: 20px;
        text-align: center;
     }

     .button{

        text-align: center;
        margin-top: 20px;

     }
     .div-input {
        
        text-align: center;
        flex-direction: column;
        margin-top: 20px;
        
        .title-input { 
            font-size: 20px;
            font-weight: bold;
            
        }
        .input {
            width: 100px;
            margin-top: 10px;
            
        }
    }
  }

  .card-results{
    width: 500px;
    height: 170px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;    
    position: relative;
    margin-bottom: 50px;
    padding: 0 40px 0 40px;
    background-color: #f3eaea;
    border-radius: 10px;
    box-shadow: 0 0 100px rgba(0,0,0,0.1);

    .describe-result{
        font-size: 15px;
        font-weight: bold;
        color: #000;
        
     }

     .last-deliverieas{

      font-size: 15px;
      font-weight: bold;
      color: #000;
      scroll-behavior: auto;
      overflow: auto;
      height: 100px;

     }

   
  }


`;

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    
    margin: 0 auto;
    flex-direction: column;
    position: relative;
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 0 30px 0 30px;
    background-color: #f3eaea;
    border-radius: 10px;
    box-shadow: 0 0 100px rgba(0,0,0,0.1);
    
    `;








