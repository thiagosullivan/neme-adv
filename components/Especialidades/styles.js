import styled from "styled-components";

export const EspecialidadesContainer = styled.section`

    .speciality__contact {
        padding-top: 3.75rem;
        background-image: url('https://raw.githubusercontent.com/thiagosullivan/neme-adv/main/assets/especialidade-bg.png');
        background-size: cover;
        background-repeat: no-repeat;
        height: 500px;

        .speciality__contact_txt {
            max-width: 1100px;
            width: 100%;
            margin: 0 auto;
            padding: 0 1rem;

            h2 {
                font-family: 'Crimson Pro', serif;
                font-size: 3.31rem;
                color: ${({theme}) => theme.primary};
                text-transform: uppercase;
                margin-bottom: 3.37rem;
                font-weight: 400;
    
                strong {
                    font-family: 'Crimson Pro', serif;
                }
            }
    
            a {
                font-family: 'Raleway', sans-serif;
                font-size: 1.78rem;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 280px;
                height: 62px;
                color: ${({theme}) => theme.secondary};
                border: 1px solid ${({theme}) => theme.secondary};
                border-radius: 20px;
            }

            @media screen and (max-width: 980px){
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            @media screen and (max-width: 680px){
                h2 {
                    font-size: 2.5rem !important;
                    margin-bottom: 2.5rem !important;
                }
                a {
                    width: 160px;
                    height: 40px;
                    font-size: 1.1rem;
                    border-radius: 10px;
                }
            }
        }
    }

    .speciality__content {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto 9.3rem;
        display: flex;
        align-items: center;
        padding: 0 1rem;

        h2 {
            font-family: 'Crimson Pro', serif;
            font-size: 4.5rem;
            color: ${({theme}) => theme.primary};
            text-transform: uppercase;
            margin-bottom: 3.37rem;
            margin-right: 9.3rem;
            font-weight: 400;

            strong {
                font-family: 'Crimson Pro', serif;
            }
        }
        ul {
            li {
                display: flex;
                align-items: center;
                margin-bottom: 3.1rem;

                &:last-child {
                    margin-bottom: 0;
                }

                p {
                    font-family: 'Raleway', sans-serif;
                    font-size: 2.68rem;
                    margin-left: 2.1rem;
                }
            }
        }

        @media screen and (max-width: 980px){
            flex-direction: column;

            h2 {
                text-align: center;
                margin-right: 0;
            }
        }

        @media screen and (max-width: 680px){
            margin: 2rem auto 3rem;

             h2 {
                font-size: 2.5rem;
            }

            ul {
                li {
                    margin-bottom: 1.5rem;
                }
            }

            ul {
                li {
                    img {
                        width: 25px;
                        height: 25px;
                    }
                }
            }
            
            ul {
                li {
                    p {
                        margin-left: .5rem;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
`;