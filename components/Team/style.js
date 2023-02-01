import styled from "styled-components";

export const QuemSomosContainer = styled.section`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    h2 {
        color: ${({theme}) => theme.primary};
        font-family: 'Crimson Pro', serif;
        font-weight: 700;
        font-size: 3.31rem;
        text-transform: uppercase;
        margin-bottom: 3.5rem;
    }

    @media screen and (max-width: 1660px){

    }

    @media screen and (max-width: 1400px){

        /* padding-right: 2rem; */
        width: 85%;
    }

    @media screen and (max-width: 1150px){


        /* .golden_lines img {
            width: 100%;
        } */
        .golden_lines_left img {
            left: 0;
            width: 80%;
        }
    }
    @media screen and (max-width: 980px){
        h2 {
            text-align: center;
        }
    }
    @media screen and (max-width: 680px){
        /* margin-left: 140px; */
    }
    @media screen and (max-width: 680px){
        h2 {
            font-size: 2.2rem;
        }
    }
`

export const QuemSomosCard = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    color: ${({theme}) => theme.primary};
    margin-bottom: 4rem;

    .golden_lines {
        position: absolute;
        left: -48%;
        top: -8%;
    }
    .golden_lines_left {
        position: absolute;
        right: -48%;
        top: -8%;
    }
    @media screen and (max-width: 680px){
        .golden_lines img {
            height: 7px;
        }
        .golden_lines_left img {
            height: 7px;
        }
    }
    .quem__img {
        margin-right: 1.5rem;

        .quem__img__avatar {
            width: 285px;
            height: 285px;
            position: relative;
        }

        .quem__socialm {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 1.25rem;

            a {
                transition: all 150ms ease-out;

                &:hover {
                    opacity: .5;
                }
            }
            .socialm_fb {
                color: #3C5A99;
                border: 3px solid #3C5A99;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.4rem;
            }
            .socialm_tw {
                color: #33CCFF;
                border: 3px solid #33CCFF;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.4rem;
            }
            .socialm_li {
                color: #007AB9;
                border: 3px solid #007AB9;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.4rem;
            }
        }
    }

    .quem__txt {
        max-width: 780px;

        h3 {
            font-family: 'Crimson Pro', serif;
            font-weight: 700;
            font-size: 2.81rem;
            margin-bottom: .2rem;
        }
        span {
            font-family: 'Raleway', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            display: block;
        }
        p {
            font-family: 'Raleway', sans-serif;
            font-size: 1.75rem;
        }
    }

    @media screen and (max-width: 980px){
        flex-direction: column;
        align-items: center;

        .quem__img {
            margin-right: 0 !important;
            margin-bottom: 2rem;
        }
        .quem__txt {
            h3 {
                font-size: 2.2rem;
                text-align: center;
            }
        }
        .quem__txt {
            span {
                font-size: 1.3rem;
                text-align: center;
            }    
        }
        .quem__txt {
            p {
                font-size: 1.3rem;
                text-align: justify;
            }
        }
    }

    @media screen and (max-width: 680px){
        h2 {
            font-size: 2.2rem;
        }
        .quem__img {
            .quem__img__avatar {
                width: 200px;
                height: 200px;
            }
        }
        .quem__img {
            margin-bottom: 1rem;
        }
        .quem__txt {
            h3 {
                font-size: 1.8rem;
            }
        }
        .quem__txt {
            p {
                font-size: 1.1rem;
            }
        }
        .quem__img {
            .quem__socialm {
                margin-top: .7rem;
            }
        }
    }
`