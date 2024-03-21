import * as S from "./style";

import Card from "../../components/Card";

import cactus1 from "../../assets/3.svg";
import cactus2 from "../../assets/6.svg";
import cactus3 from "../../assets/5.svg";

export const News = () => {
  return (
    <S.section>
      <S.container>
        <S.h2>new plants for you home</S.h2>
        <S.p>
          Select new ornamental plants for home decoration and obtain an atmosphere of harmony and
          freshness.
        </S.p>
      </S.container>
      <S.cards>
        <Card img={cactus1} title="gymnocalycium cactus" />
        <Card img={cactus2} title="lily pad succulent" />
        <Card img={cactus3} title="rebutia cactus" />
      </S.cards>
    </S.section>
  );
};

export default News;
