import styled from "styled-components";

export const DiscoverWrapper = styled.main`
  padding: 35px;
  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`;

export const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const MobilePageTitle = styled.h1`
  display: none;
`;

export const TotalCount = styled.strong`
  display: block;
`;
