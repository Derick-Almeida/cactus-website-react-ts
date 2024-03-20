import * as S from "./style";

import { ICardProps } from "./types";

import { RiShoppingBagLine } from "react-icons/ri";

export const Card = ({ img, price, title, detail = false }: ICardProps) => {
  return (
    <S.card>
      <S.img src={img} alt="cute cactus 3d" />
      <S.h2>{title}</S.h2>

      {detail && (
        <S.detail>
          <S.p>${price}</S.p>
          <S.button>
            <RiShoppingBagLine />
          </S.button>
        </S.detail>
      )}
    </S.card>
  );
};

export default Card;
