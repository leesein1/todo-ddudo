import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
`;

const Left = styled.div`
    flex: 1;
    background-color: #1da1f2; /* 트위터 블루 */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 2rem;
`;

export default function Layout() {
    return (
        <Wrapper>
            {/* 좌측 로고 */}
            <Left>
                <div>🐦 Todo-ddudo</div>
            </Left>

            {/* 우측 로그인 / 가입 폼 */}
            <Right>
                <FormWrapper>
                    <Outlet />
                </FormWrapper>
            </Right>
        </Wrapper>
    );
}
