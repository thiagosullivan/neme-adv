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

    @media screen and (max-width: 980px){
        h2 {
            font-size: 3.5rem;
        }
    }

    @media screen and (max-width: 980px){
        .slider__container {
            margin-left: 15%;
        }
    }

    @media screen and (max-width: 820px){
        .slider__container {
            margin-left: 8%;
        }
    }

    @media screen and (max-width: 770px){
        .slider__container {
            /* margin-left: 8%; */
        }
    }

    @media screen and (max-width: 680px){
        h2 {
            font-size: 2.5rem;
        }
        .slider__container {
            margin-left: 3%;
        }
        .slider_card {
            display: flex !important;
            flex-direction: column;
            align-items: center;
        }
        .slider_card img {
            width: 80%;
        }
        .slider_card h3 {
            width: 90%;
            margin-left: 3%;
        }
    }

    @media screen and (max-width: 670px){
        margin: 3rem 0 1rem;
    }
`;