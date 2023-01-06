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
    }
`;