import styled from 'styled-components';

import { ReactComponent as IconCircleDecoration } from '../../images/sprite.svg#icon-Line';

import { ReactComponent as IconRunMen } from '../../images/sprite.svg#icon-run-man';
// import { ReactComponent as IconPlayVideo } from '../../images/sprite.svg#icon-play';

// export const IconPlayVideoStyled = styled(IconPlayVideo)`
//   fill: var(--color-white);
//   width: 20px;
//   height: 20px;
//   transform: rotate(90deg);
// `;

export const IconRunMenStyled = styled(IconRunMen)`
  fill: var(--color-white);
  width: 16px;
  height: 16px;
`;

export const IconCircleDecorationStyled = styled(IconCircleDecoration)`
  stroke-width: 2px;
  stroke: var(--color-orange-one);
  width: 185px;
  height: 67px;
  transform: rotate(90deg);
`;
