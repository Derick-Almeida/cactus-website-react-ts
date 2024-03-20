import styled from "styled-components";

export const footer = styled.footer`
  background: var(--black-color);
  margin: 0 12%;
  padding: 3rem 0;
`;

export const container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const logo = styled.div`
  max-width: 10rem;
`;

export const content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
`;

export const h3 = styled.h3`
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.2rem;
  white-space: nowrap;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    color: var(--green);
    font-size: 1.5rem;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const li = styled.li`
  color: var(--gray);
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  > svg {
    font-size: 1.5rem;
  }
`;

export const copright = styled.span`
  color: var(--gray);
  text-transform: capitalize;
  margin-top: 5rem;

  display: flex;
  justify-content: center;
`;
