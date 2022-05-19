import styled, { css } from "styled-components";

export const FiltersWrapper = styled.div`
  position: relative;
`;

export const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

export const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
`;
