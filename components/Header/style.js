import styled from "styled-components";

export const HeaderContent = styled.header`

    .header__content {
        background-color: #0a3d5b;
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
        }

        .MenuOpen {
            top: 105% !important;
            height: 530px;
            pointer-events: all;
        }
        nav {
            position: absolute;
            top: 45%;
            /* top: 105%; */
            background-color: #0a3d5b;
            width: 100%;
            height: 0;
            padding: 8.5rem 1.87rem 1.25rem;
            z-index: -10;
            transition: all 300ms ease-in;
            overflow-y: hidden;
            pointer-events: none;

            ul {
                li {
                    font-family: 'Raleway', sans-serif;
                    text-transform: uppercase;
                    font-size: 22px;
                    margin-bottom: 1.3rem;
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
`;