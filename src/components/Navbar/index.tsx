import * as S from "./style";

import { RiCactusLine, RiUserLine, RiShoppingCartLine } from "react-icons/ri";

export const Header = () => {
  return (
    <S.header>
      <S.logo>
        <RiCactusLine /> Cactus
      </S.logo>

      <S.ul>
        <S.li>
          <S.a href="#">Home</S.a>
        </S.li>
        <S.li>
          <S.a href="#">News</S.a>
        </S.li>
        <S.li>
          <S.a href="#">Shop</S.a>
        </S.li>
        <S.li>
          <S.a href="#">Care</S.a>
        </S.li>
        <S.li>
          <S.a href="#">Contact</S.a>
        </S.li>
      </S.ul>

      <S.options>
        <RiUserLine />
        <RiShoppingCartLine />
      </S.options>
    </S.header>
  );
};

export default Header;
