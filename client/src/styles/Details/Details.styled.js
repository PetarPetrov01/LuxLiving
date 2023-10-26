export const DetailsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    min-height: 100%;
    color: rgb(40, 60, 99);
    flex: 1;
    font-size: 1.1em;
    
    @media (max-width: 780px){
        width: 90%;
        height: 80%;
    }
`;

export const DetailsCardHeaders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30%;
    width: 90%;

    border-bottom: 4px solid rgba(55, 82, 135,0.8);
    h1{
        margin: 5px 0 0 0;
    }

    h2{
        margin: 10px 0 10px 0;
    }
`;

export const DetailsInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 90%;
    font-size: 1.2em;

    h4{
        margin: 15px 0px 0px 0px;
    }
    
    p{
        text-align: justify;
    }

    @media (max-width: 780px){
        h3{
            font-size: 0.9em;
        }
    }
`;
export const StyledControlls = styled.div`
    display: flex;
    justify-content: center;
    width: 80%;
    gap: 20px;
    margin: 10px 0 20px 0;
`;

export const StyledButton = styled.button`
    color: white;
    cursor: pointer;
    //background-color: rgba(107, 204, 238, 0.8);
    width: 30%;
    height: 40px;
    border: none;
    border-radius: 20px;
    font-size: 1.3em;
    background: rgba(55, 82, 135,0.7);
    transition: all 0.2s;
    
    &:hover{
        box-shadow: 0px 0px 3px rgba(55, 125, 200, 0.8);
        background-color: rgba(53, 125, 200, 0.8);
    }

    @media (max-width: 780px){
        width: 40%;
    }
`;
