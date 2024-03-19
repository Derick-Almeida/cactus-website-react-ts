import styled from "styled-components";

export const header = styled.header`
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 12%;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 9;
  backdrop-filter: blur(20px);
`;

export const logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

  user-select: none;
  cursor: pointer;

  > svg {
    color: var(--green);
    font-size: 1.3rem;
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
    color: var(--green);
  }
`;

export const a = styled.a``;

export const options = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: color 0.3s;

  > svg {
    font-size: 1.3rem;
  }
`;
