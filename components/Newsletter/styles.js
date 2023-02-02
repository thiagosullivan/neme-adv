import { lighten } from "polished";
import styled from "styled-components";

export const NewsletterContainer = styled.section`
    background-color: #E5E5E5;
    padding-bottom: 15rem;

    .newsletter__content {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        padding: 5.62rem 1rem;

        h2 {
            font-size: 3.31rem;
            font-family: 'Crimson Pro',serif;
            color: ${({theme}) => theme.primary};
            text-transform: uppercase;
            text-align: center;
        }
        p {
            color: ${({theme}) => theme.secondary};
            text-align: center;
            font-size: 2.68rem;
            font-family: 'Raleway', sans-serif;
            margin-bottom: 3.75rem;
        }

        .newsletter__input {
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                max-width: 675px;
                width: 100%;
                height: 62px;
                border-radius: 20px;
                border: 1px solid ${({theme}) => theme.secondary};
                padding-left: 1rem;
                color: ${({theme}) => theme.secondary};
                background-color: transparent;
                font-size: 1.68rem;
                margin-right: 1rem;
                outline: none;

                &::placeholder {
                    color: ${({theme}) => theme.secondary};
                }
            }
            button {
                width: 120px;
                height: 62px;
                background-color: ${({theme}) => theme.secondary};
                border-radius: 20px;
                border: none;
                font-size: 1.68rem;
                color: #ffffff;
                transition: all 150ms ease-in;

                &:hover {
                    background-color: ${({ theme }) => lighten(0.1, theme.secondary)}
                }
            }
        }

        @media screen and (max-width: 720px){
            h2 {
                font-size: 2.21rem;
            }
            p {
                font-size: 1.8rem;
            }

            .newsletter__input {
                input {
                    width: 70%;
                }
            }
        }

        @media screen and (max-width: 550px){
            .newsletter__input {
                input {
                    height: 50px;
                    font-size: 1.2rem;
                    border-radius: 10px;
                }
            }
            .newsletter__input {
                button {
                    height: 50px;
                    font-size: 1.2rem;
                    border-radius: 10px;
                }
            }
        }
    }

    @media screen and (max-width: 420px){
        padding-bottom: 7rem;

        .newsletter__content {
            .newsletter__input {
                flex-direction: column;
    
                input {
                    margin-right: 0;
                    margin-bottom: 1rem;
                    width: 100%;
                }
            }
        }

        .newsletter__content {
            padding: 3.6rem 1rem;
        }
    }
`;
