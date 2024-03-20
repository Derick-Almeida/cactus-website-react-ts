import styled from "styled-components";

export const img = styled.img`
  position: absolute;
  top: -6rem;
  left: 0;
  right: 0;
  width: 14.5rem;
  transform: scale(1.2);
  transition: transform 0.4s;
`;

export const card = styled.div`
  position: relative;
  width: 15rem;
  padding: 9rem 1rem 1.5rem 1rem;

  border-radius: 1.5rem;
  border: 2px solid var(--light-green);
  background: var(--gradient-card);

  &:hover ${img} {
    transform: scale(1.2) translateY(-0.5rem);
  }
`;

export const h2 = styled.h2`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1.3rem;
`;

export const detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const p = styled.p`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 600;
`;

export const button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;
  padding: 0.3rem;

  font-size: 1.5rem;
  cursor: pointer;
`;
