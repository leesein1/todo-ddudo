import { Outlet } from "react-router-dom";
import styled from "styled-components";
import LeftNav from "../components/LeftNav";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    padding: 1% 10%; /* ✅ 좌우 10% 여백 */
`;

const Header = styled.header`
    height: 60px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid #ccc;
    background-color: #f0f0f0;
`;

const ContentWrapper = styled.div`
    flex: 1;
    display: flex;
    overflow: hidden;
    gap: 1rem;
`;

const Main = styled.main`
    flex: 1;
    overflow-y: auto;
    background-color: #fff;
`;

const RightNav = styled.aside`
    flex: 0 0 200px;
    overflow-y: auto;
    border-left: 1px solid #eee;
`;

export default function Layout() {
    return (
        <Wrapper>
            <Header>헤더</Header>

            <ContentWrapper>
                <LeftNav /> 
                <Main>
                    <Outlet />
                </Main>
                <RightNav>오른쪽</RightNav>
            </ContentWrapper>
        </Wrapper>
    );
}
