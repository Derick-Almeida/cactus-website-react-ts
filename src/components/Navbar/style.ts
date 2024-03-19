import styled from "styled-components";

export const header = styled.header`
  color: var(--white-color);
  font-weight: 600;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 12%;
`;

export const logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  user-select: none;

  > svg {
    color: var(--first-color);
  }
`;

export const ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.55rem;
`;

export const li = styled.li`
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: var(--first-color);
  }
`;

export const a = styled.a``;

export const options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: color 0.3s;

  > svg:hover {
    cursor: pointer;
    color: var(--first-color);
  }
`;
