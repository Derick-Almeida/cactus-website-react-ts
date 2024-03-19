import * as S from "./style";

import { FaArrowRight } from "react-icons/fa";
import cactus from "../../assets/9.svg";

export const Home = () => {
  return (
    <S.section>
      <S.img src={cactus} alt="cute cactus 3d" />

      <S.container>
        <S.h1>
          ornamental <i>plants</i> for your home
        </S.h1>
        <S.span>
          We desig ornamental plnts for your home in-house for an original style and quality you
          won't find nywhere eise
        </S.span>

        <S.box>
          <S.button variant="contained">
            <FaArrowRight /> go to shop
          </S.button>
          <S.button variant="default">more details</S.button>
        </S.box>
      </S.container>
    </S.section>
  );
};

export default Home;
