import styled from "styled-components";

export const section = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10rem 15%;
`;

export const container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const h2 = styled.h2`
  color: var(--white);
  text-transform: uppercase;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const p = styled.p`
  color: var(--gray);
  font-size: 0.9rem;
`;

export const cards = styled.div`
  width: 50%;
  display: grid;

  > :nth-child(odd) {
    transform: rotate(-5deg);
  }

  > :nth-child(even) {
    justify-self: flex-end;
    transform: rotate(5deg);
  }

  > div {
    margin-top: -2rem;

    h2 {
      text-align: center;
    }
  }
`;
