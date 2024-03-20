import styled, { css } from "styled-components";

interface IButtonStyleProps {
  variant: "contained" | "default";
}

export const section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 8%;
`;

export const img = styled.img`
  max-width: 50%;
  filter: drop-shadow(var(--shadow-img));
`;

export const container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50%;
`;

export const h1 = styled.h1`
  color: var(--white);
  text-transform: uppercase;
  font-size: 4rem;
  margin: 0;
  max-width: 85%;

  > i {
    color: var(--green);
    font-style: normal;
  }
`;

export const span = styled.span`
  color: var(--gray);
  font-size: 1rem;
  max-width: 85%;
`;

export const box = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const button = styled.button<IButtonStyleProps>`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1rem;
  border: 0;

  padding: 0.5rem 0.8rem;

  ${({ variant }) => {
    switch (variant) {
      case "contained":
        return css`
          background: var(--white);
          color: var(--black);

          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;

          border-radius: 20rem;

          > svg {
            background: var(--green);
            border-radius: 50%;
            font-size: 2rem;
            padding: 0.5rem;

            transform: translateX(-0.3rem) rotate(0);
            transition: transform 0.4s;
          }

          &:hover > svg {
            transform: translateX(-0.1rem) rotate(-25deg);
          }
        `;

      default:
        return css`
          background: none;
          color: var(--white);
          text-decoration: underline;
          transition: color 0.4s;

          &:hover {
            color: var(--green);
          }
        `;
    }
  }}
`;
