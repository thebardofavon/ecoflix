import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <LoginContent>
                    <CTA>
                        <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
                    </CTA>
                    <SignUp>SIGN UP TO WATCH!</SignUp>
                </LoginContent>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 100vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImage = styled.div`
    height: 100%;
    background-image: url("/images/white-wall.jpg");
    // background-image: url("/images/login-background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const LoginContent = styled.div`
    background-color: #000;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
`

const CTA = styled.div`
    padding-top: 13px;
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const CTALogoOne = styled.img`
    width: 100%;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    margin-left: auto;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #098443;
  margin-bottom: 12px;
  width: 80%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;

  &:hover {
    background-color: #19b756;
  }
`;

export default Login