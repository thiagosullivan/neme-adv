import styled from "styled-components";

export const PostContainer = styled.section`
    overflow: hidden;

    .post__txt {
        max-width: 980px;
        width: 100%;
        margin: 4.3rem auto 0;
        padding: 0 1rem;

        .post__txt__top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            margin-bottom: 4.37rem;

            .post__content {
                max-width: 590px;
                width: 100%;
                font-family: 'Newsreader', serif;
                font-size: 1.37rem;
                line-height: 32px;

                p {
                    font-size: 18px;
                    margin-bottom: 2.25rem;

                    img {
                        width: 100%;
                    }
                }
                h1, h2, h3, h4 {
                    margin-bottom: 2.25rem;
                }
            }

            .post__img_small {
                width: 250px;
                height: 250px;
                position: relative;
                margin-left: 1rem;
            }
        }
    }
`;

export const PostBackground = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 23rem 0 30rem;
    position: relative;

    h1 {
        font-size: 3rem;
        font-family: 'Crimson Pro', serif;
        color: ${({theme}) => theme.white};
        max-width: 735px;
        text-align: center;
        margin: 0 auto 1rem;
        z-index: 1;
        position: relative;
    }

    &:after {
        content: '';
        background-image: url('https://raw.githubusercontent.com/thiagosullivan/neme-adv/main/assets/post-ind-img-2.png');
        background-size: 100%;
        background-repeat: no-repeat;
        width: 100%;
        height: 314px;
        display: block;
        position: absolute;
        bottom: -35px;
    }

    .layer__bg {
        background-color: rgba(10, 61, 91, 0.6);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .golden_line_post {
        z-index: 1;
        position: relative;
        display: flex;
        justify-content: center;
    }
`;