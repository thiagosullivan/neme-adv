import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.primary};
    padding: 2rem 1rem;
    position: relative;
    /* margin-top: 20rem; */

    .footer__content {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        .footer__socialmedia h3, .footer__location__txt h3 {
            font-family: 'Raleway', sans-serif;
            font-weight: 400;
            color: #D7C692;
            margin-bottom: 0.62rem;
        }

        .footer__socialmedia__links {
            display: flex;
            align-items: center;
            gap: 10px;

            a {
                border: 3px solid #ffffff;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                color: #ffffff;
                font-size: 1.3rem;
                transition: all 100ms ease-in;

                &:hover {
                    opacity: .4;
                }
            }
        }

        .footer__location {
            display: flex;
            align-items: flex-end;
            text-align: right;

            .footer__location__txt {
                margin-right: 1rem;

                p {
                    font-family: 'Raleway', sans-serif;
                    font-size: 0.9rem;
                    color: #ffffff;
                }
            }

            .footer__location__map {
                border-radius: 20px;
                overflow: hidden;
            }
        }
    }

    .footer__credits {
        color: #D7C692;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        margin-top: 5rem;
        text-align: center;
    }

    &:before {
        content: '';
        background-image: url('https://raw.githubusercontent.com/thiagosullivan/neme-adv/main/assets/footer-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        height: 238px;
        width: 100%;
        position: absolute;
        top: -80%;
        left: 0;
        z-index: 1;
    }

    @media screen and (max-width: 920px){
        .footer__content {
            flex-direction: column;
            align-items: center !important;
        }
        .footer__location {
            flex-direction: column;
        }
        &:before {
            top: -235px;
        }
        .footer__content a img {
            margin-bottom: 3rem;
        }
        .footer__socialmedia h3 {
            text-align: center;
        }
        .footer__socialmedia {
            margin-bottom: 3rem;
        }
        .footer__location__txt {
            margin-right: 0 !important;
            margin-bottom: 1rem;
            text-align: center;
            width: 100%;
        }
    }

`;