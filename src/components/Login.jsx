import styled from "styled-components"

const Login = (props) => {
    return (
        <Container>
            <Content>
                <LoginContent>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="a-logo"/>
                    <SignUp>SIGN UP TO WATCH!</SignUp>
                    <Description>
                        This is a sample UI clone for a streaming platform made by Anushka using ReactJS.
                    </Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="another-logo"/>
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
    background: url("/images/white-wall.jpg") center center / cover
      no-repeat fixed;
    background-position: bottom;
    position: absolute;
    opacity: 0.8;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`

const LoginContent = styled.div`
    position: fixed;
    background-color: #000;
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    
`

const CTALogoOne = styled.img`
    margin-top: 20px;
    width: 100%;
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #098443;
  margin-bottom: 12px;
  width: 90%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-right: auto;
  margin-left: auto;

  &:hover {
    background-color: #19b756;
    cursor: pointer;
  }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 14px;
    margin: 0 0 24px;
    letter-spacing: 0.8px;
    margin: 0 0 24px;
`

const CTALogoTwo = styled.img`
  max-width: 550px;
  margin-bottom: 30px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

export default Login