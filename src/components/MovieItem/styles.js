import styled from "styled-components";

export const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
`;

export const LeftCont = styled.div`
  display: inline-block;
`;

export const RightCont = styled.div`
  display: inline-block;
  margin: 0 20px;
`;
export const Image = styled.img`
  height: 230px;
  width: auto;
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Vote = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  border-radius: 6px;
  padding: 2px 6px;
  align-self: flex-start;
`;
export const Title = styled.h2`
  font-size: 1.4;
  margin: 0;
`;
export const Genres = styled.div``;
export const Genre = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;
  :not(:first) {
    border-right: 1px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Description = styled.p``;
export const Date = styled.p`
  color: ${(props) => props.theme.primaryColor};
  margin-top: 8px;
  font-size: 12px;
`;
