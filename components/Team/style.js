import styled from "styled-components";

export const QuemSomosContainer = styled.section`
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;

    h2 {
        color: ${({theme}) => theme.primary};
        font-family: 'Crimson Pro', serif;
        font-weight: 700;
        font-size: 3.31rem;
        text-transform: uppercase;
        margin-bottom: 3.5rem;
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
    .quem__img {
        margin-right: 1.5rem;

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
`