import styled from 'styled-components'

export const StyledList = styled.ul`
    list-style: none;
    text-transform: uppercase;
    color: #868686;
    max-height: 300px;
    overflow-y: auto;
    padding: 15px 50px 0 50px;
    
    &::-webkit-scrollbar {
        display: none;
      }

    .item{
        margin-bottom: 30px;        
    }

    li{
        background-color: #FFF;
        width: 100%;
        padding: 15px 25px;
    }

    .delete{
        position: absolute;
        top: -15px;
        left: -10px;
        width: 25px;
        height: 25px;
    }

    .small{
        width: 10px;
        height: 10px;
    }
`;
 