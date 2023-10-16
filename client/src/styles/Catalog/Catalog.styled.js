import styled from "styled-components";

export const StyledCatalog = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px auto;
    width: 80%;
    background: linear-gradient(180deg, rgba(186, 226, 248,0.8) 0%, rgba(128, 220, 240,0.8) 100%);
    border-radius: 20px
   `;

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ flexdir }) => flexdir || 'row'};
    padding: 20px;
    margin: 20px;
    gap: 10px;
    width: 70%;
    border-radius: 15px;
    background: rgba(240,240,250,0.7);
    box-shadow: 0px 0px 16px rgb(206, 226, 248);

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        flex: 1;

        h3{
            height: 20%;
        }
    }

    img{
        display: block;
        width: 80%;
    }
`;