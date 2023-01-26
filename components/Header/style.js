import styled from "styled-components";

export const HeaderContent = styled.header`
    position: fixed;
    max-width: 260px;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    .header__content {
        background-color: ${({theme}) => theme.primary};
        max-width: 260px;
        width: 100%;
        /* height: 360px; */
        padding: 3.1rem 0;
        color: #ffffff;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        z-index: 2;

        @media screen and (max-width: 1150px){
            a {
                img {
                    width: 145px;
                    height: 145px;
                }
            }
        }

        @media screen and (max-width: 800px){
            a {
                img {
                    width: 100px;
                    height: 100px;
                }
            }
        }

        @media screen and (max-width: 680px){
            padding: 2rem 0;

            a {
                img {
                    width: 80px;
                    height: 80px;
                }
            }
        }
        
        .hamb__header {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 100%;
            left: 15%;
            z-index: 2;
            cursor: pointer;
    
            p {
                font-family: 'Raleway', sans-serif;
                text-transform: uppercase;
                font-size: 24px;
                margin-left: 1.25rem;
            }

            @media screen and (max-width: 800px){
                img {
                    width: 29px;
                    height: 19px;
                }

                p {
                    font-size: 18px;
                    margin-left: 1rem;
                }
            }

            @media screen and (max-width: 680px){
                img {
                    width: 20px;
                    height: 15px;
                }
                p {
                    font-size: 16px;
                    margin-left: .6rem;
                }
            }
        }

        .MenuOpen {
            top: 105% !important;
            height: 530px;
            pointer-events: all;

            @media screen and (max-width: 800px){
                padding: 6.5rem 1.2rem 1rem;
                height: 300px;
            }

            @media screen and (max-width: 680px){
                left: 0;
                top: 0 !important;
                height: 163%;
                width: 250%;
                padding: 1rem 1rem 1rem 140px;
            }
        }
        nav {
            position: absolute;
            top: 45%;
            /* top: 105%; */
            background-color: ${({theme}) => theme.primary};
            width: 100%;
            height: 0;
            padding: 8.5rem 1.87rem 1.25rem;
            z-index: -10;
            transition: all 300ms ease-in;
            overflow-y: hidden;
            pointer-events: none;

            @media screen and (max-width: 680px){
                height: 175%;
                width: 0;
                top: 0;
                left: 0;
                padding: 0;
            }

            ul {
                li {
                    font-family: 'Raleway', sans-serif;
                    text-transform: uppercase;
                    font-size: 22px;
                    margin-bottom: 1.3rem;

                    @media screen and (max-width: 1150px){
                        font-size: 18px !important;
                    }

                    @media screen and (max-width: 800px){
                        font-size: 14px !important;
                    }
                }
            }
        }

        &:after {
            content: '';
            background-image: url('https://raw.githubusercontent.com/thiagosullivan/neme-adv/main/assets/menu-after.png');
            width: 100%;
            height: 109px;
            display: block;
            position: absolute;
            top: 100%;
        }
    }

    @media screen and (max-width: 1150px){
        max-width: 220px;
    }

    @media screen and (max-width: 800px){
        max-width: 160px;
    }

    @media screen and (max-width: 680px){
    max-width: 120px;

    .kyZxKG .header__content a img {
        width: 80px;
        height: 80px;
    }
    .kyZxKG .header__content {
        padding: 2rem 0;
    }

    .kyZxKG .header__content .hamb__header img {
        width: 20px;
        height: 15px;
    }
    .kyZxKG .header__content .hamb__header p {
        font-size: 16px;
        margin-left: .6rem;
    }
}
`;