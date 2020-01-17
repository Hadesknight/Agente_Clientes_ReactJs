import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    padding: 40px;

    border: 2px solid #eee;
    border-radius: 10px;
    box-shadow: 0 5px 25px -15px rgba(0, 0, 0, 0.75);

    h1 {
        font-size: 20px;
        margin-bottom: 20px;
        color: #666;
        border-bottom: 1px solid #666;
    }
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: bold;

    @media (max-width: 600px) {
        font-size: 25px;
    }
`;

export const SubTitle = styled.span`
    font-size: 20px;
    color: #444;
    padding-top: 10px;
`;

export const Border = styled.div`
    width: 100%;
    border: 1px solid #eee;
    margin: 30px auto;
`;

export const Address = styled.span`
    font-size: 18px;
    color: #444;
    padding: 4px;
`;
