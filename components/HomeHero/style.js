import styled from "styled-components";

export const HeroContainer = styled.section`
    background-image: url('https://raw.githubusercontent.com/thiagosullivan/neme-adv/main/assets/backgound-hero-min.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 1280px;
    position: relative;

    .home__hero__txt {
        max-width: 700px;
        width: 100%;
        /* margin: 0 auto; */
        padding-top: 4.2%;
        margin-left: 18%;

        h1 {
            font-family: 'Crimson Pro', serif;
            font-size: 3.31rem;
            color: ${({theme}) => theme.white};
            text-transform: uppercase;
            margin-bottom: 3.37rem;
            font-weight: 400;

            strong {
                font-family: 'Crimson Pro', serif;
            }
        }

        p {
            font-family: 'Raleway', sans-serif;
            color: ${({theme}) => theme.white};
            font-size: 1.5rem;
            line-height: 1.5;
        }

        @media screen and (max-width: 1600px){
            margin-left: 25%;
        }

        @media screen and (max-width: 1150px){
            margin-left: 30%;
            width: 70%;
        }

        @media screen and (max-width: 850px){
            max-width: 500px;
            padding-top: 4rem;
            margin-left: 180px;

            h1 {
                font-size: 2.8rem;
            }
            p {
                font-size: 1.2rem;
            }
        }
        @media screen and (max-width: 680px){
            margin-left: 140px;
            padding-top: 1.2rem;
        }
    }
    .home__hero__bottom {
        position: absolute;
        bottom: 12%;
        left: 50%;
        transform: translateX(-50%);

        h2 {
            color: ${({theme}) => theme.primary};
            font-family: 'Crimson Pro', serif;
            font-weight: 400;
            font-size: 3.31rem;
            text-transform: uppercase;
            text-align: center;

            strong {
                font-family: 'Crimson Pro', serif;
            }
        }
        a {
            border: 1px solid ${({theme}) => theme.secondary};
            border-radius: 20px;
            color: ${({theme}) => theme.secondary};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 193px;
            height: 62px;
            margin: 2.5rem auto 0;
            font-family: 'Raleway', sans-serif;
            font-size: 1.68rem;
        }

        @media screen and (max-width: 680px){
            h2 {
                font-size: 2.5rem;
            }
            a {
                width: 160px;
                height: 40px;
                font-size: 1.3rem;
                border-radius: 10px;
            }
        }
    }

    @media screen and (max-width: 1600px){
        height: 1000px;
    }

    @media screen and (max-width: 680px){
        background-position: bottom right;
        height: 770px;
    }

    @media screen and (max-width: 670px){
        .home__hero__txt {
            padding-top: 3rem;
            padding-right: 2rem;
        }
        .home__hero__txt {
            h1 {
                font-size: 2rem;
            }
        }
    }
    @media screen and (max-width: 500px){
        .home__hero__txt {
            h1 {
                font-size: 1.5rem;
                margin-bottom: 2rem;
            }
        }
        .home__hero__txt {
            p {
                font-size: 1rem;
            }
        }
    }
`;