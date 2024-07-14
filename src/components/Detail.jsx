import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>

            <Background>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="" 
                />
            </Background>

            {/* <ImageTitle>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="" 
                />
            </ImageTitle> */}

        </Container>
    )
};

const Container = styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px) {
        width: initial;
        }
    }
`;
export default Detail;