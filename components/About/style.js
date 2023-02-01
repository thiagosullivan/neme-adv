import styled from "styled-components";

export const AboutContainer = styled.section`
    max-width: 1100px;
    width: 100%;
    margin: 4.37rem auto 10rem;
    padding: 0 1rem;
    position: relative;

    h2 {
        color: ${({theme}) => theme.primary};
        font-family: 'Crimson Pro', serif;
        font-weight: 400;
        font-size: 3.31rem;
        text-transform: uppercase;
        margin-bottom: 3.5rem;

        strong {
            font-family: 'Crimson Pro', serif;
        }
    }

    .golden_lines {
        position: absolute;
        left: -57%;
        top: 15%;

        @media screen and (max-width: 1100px){
            img {
                width: 80%;
            }
        }

        @media screen and (max-width: 800px){
        }

        @media screen and (max-width: 680px){
            top: 11%;

            img {
                height: 7px;
            }
        }

        @media screen and (max-width: 645px){
        }
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

    .about_img {
        margin-bottom: 3.1rem;
        width: 100%;
        height: 380px;
        position: relative;

        @media screen and (max-width: 1150px){
            height: 280px;
        }

        @media screen and (max-width: 800px){
            height: 200px;
        }
    }

    @media screen and (max-width: 1660px){
        width: 85%;
        margin-top: 1rem;
    }

    @media screen and (max-width: 1150px){

    }

    @media screen and (max-width: 1100px){
        h2 {
            font-size: 2.7rem;
        }
    }

    @media screen and (max-width: 900px){
        h2 {
            font-size: 2.2rem;
        }
        p {
            font-size: 1.2rem;
            text-align: justify;
        }
    }

    @media screen and (max-width: 800px){
        margin-bottom: 4rem;
    }

    @media screen and (max-width: 680px){

    }

    @media screen and (max-width: 680px){
        h2 {
            font-size: 1.8rem;
        }
        p {
            font-size: 1rem;
        }
    }
`;