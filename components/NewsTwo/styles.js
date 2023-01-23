import styled from "styled-components";

export const NewsTwoContainer = styled.section`
    margin: 3rem auto;
    max-width: 1100px;
    width: 100%;

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