import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1100px;
    width: 100%;
    margin: 4.37rem auto 10rem;
    position: relative;

    h2 {
        color: ${({theme}) => theme.primary};
        font-family: 'Crimson Pro', serif;
        font-weight: 400;
        font-size: 3.31rem;
        text-transform: uppercase;
        margin-bottom: 2.81rem;

        strong {
            font-family: 'Crimson Pro', serif;
        }
    }

    .golden_lines {
        position: absolute;
        left: -57%;
        top: 17%;
    }

    p {
        margin-bottom: 3.1rem;
        color: ${({theme}) => theme.primary};
        font-family: 'Raleway', sans-serif;
        font-size: 1.5rem;
        line-height: 1.3;

        &:first-child {
        }
    }

    img {
        margin-bottom: 3.1rem;
    }
`;