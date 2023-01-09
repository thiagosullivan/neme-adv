import styled from "styled-components";

export const NewsContainer = styled.section`
    margin: 3rem 0;

    h2 {
        font-family: 'Crimson Pro', serif;
        font-size: 4.5rem;
        color: ${({theme}) => theme.primary};
        text-transform: uppercase;
        margin-top: 2rem;
        margin-bottom: 6.25rem;
        text-align: center;
    }
`;