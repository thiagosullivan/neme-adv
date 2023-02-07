import styled from "styled-components";

export const PostContainer = styled.section`
    overflow: hidden;

    .post__txt {
        width: 100%;
        margin: 0 auto;
        position: relative;
        
        .post__txt__img {
            width: 100%;
            height: 314px;
            position: absolute;
            z-index: 1;
            top: -312px;

            @media screen and (max-width: 1340px){
                height: 240px;
                top: -239px;
            }
            @media screen and (max-width: 1340px){
                height: 200px;
                top: -198px;
            }
            @media screen and (max-width: 980px){
                height: 140px;
                top: -138px;
            }
            @media screen and (max-width: 620px){
                height: 100px;
                top: -98px;
            }
            @media screen and (max-width: 620px){
                height: 70px;
                top: -68px;
            }
        }

        .post__txt__container {
            max-width: 980px;
            width: 100%;
            margin: 0 auto;
            padding: 4.3rem 1rem;
    
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

        @media screen and (max-width: 800px){
            .golden_line_post {
                img {
                    width: 100%;
                }
            }
            
            .post__txt__container {
                .post__txt__top {
                    flex-direction: column-reverse;
                    justify-content: center;
                    align-items: center;
                }
            }
            
            .post__txt__container {
                .post__txt__top {
                    .post__img_small {
                        margin-left: 0;
                        margin-bottom: 3rem;
                    }
                }
            }
            
            .post__txt__container {
                .post__txt__top {
                    .post__content {
                        max-width: unset;
                    }
                }
            }
            
            .post__txt__container {
                padding: 4.3rem 2rem;
            }
        }
    }
`;

export const PostBackground = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-repeat: no-repeat;
    padding: 23rem 1rem 30rem;
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
        max-width: 1120px;
        width: 100%;
        height: 10px;
        margin: 0 auto;
    }

    @media screen and (max-width: 800px){
        padding: 20rem 1rem;
    }
    @media screen and (max-width: 680px){
        padding: 16rem 2rem;
    }
`;