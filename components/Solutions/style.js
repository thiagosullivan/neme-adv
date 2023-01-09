import styled from "styled-components";

export const SolutionsContainer = styled.section`
    background-color: #ebe4cf;
    padding: 2.81rem 0;

    .solution__content {
        background-color: #D1C18F;
        max-width: 1650px;
        width: 100%;
        margin-left: auto;
        padding: 3.1rem 0 3.1rem 8.75rem;

        h2 {
            font-family: 'Crimson Pro', serif;
            font-size: 4.5rem;
            color: ${({theme}) => theme.primary};
            text-transform: uppercase;
            margin-bottom: 3.75rem;
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
                    color: ${({theme}) => theme.white};
                }
            }
        }
    }
`