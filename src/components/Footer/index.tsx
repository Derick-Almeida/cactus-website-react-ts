import * as S from "./style";

import {
  RiCactusLine,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <S.footer>
      <S.container>
        <S.logo>
          <S.h3>
            <RiCactusLine /> Cactus
          </S.h3>

          <S.ul>
            <S.li>Choose the best plnts for your home</S.li>
          </S.ul>
        </S.logo>
        <S.content>
          <div>
            <S.h3>company</S.h3>
            <S.ul>
              <S.li>About Us</S.li>
              <S.li>Products</S.li>
              <S.li>Features</S.li>
            </S.ul>
          </div>

          <div>
            <S.h3>information</S.h3>
            <S.ul>
              <S.li>Blogs & News</S.li>
              <S.li>Contacts Us</S.li>
              <S.li>FAQs</S.li>
            </S.ul>
          </div>

          <div>
            <S.h3>social media</S.h3>
            <S.ul>
              <S.li>
                <RiFacebookCircleFill />
                <RiInstagramFill />
                <RiTwitterXFill />
              </S.li>
            </S.ul>
          </div>
        </S.content>
      </S.container>

      <S.copright>&copy; all rights reserverd by dérick silva</S.copright>
    </S.footer>
  );
};

export default Footer;
