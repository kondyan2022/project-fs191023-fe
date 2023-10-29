import styled from 'styled-components';

// export const MainWindow = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   background: var(--color-modal-window);
//   top: 0;
//   left: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Modal = styled.div`
  position: relative;
  border-radius: 12px;
  border: 1px solid var(--accent-color-border);
  background: #10100f;
`;

export const ButtonClose = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: inherit;
  position: absolute;
  top: 14px;
  right: 14px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;

export const SvgClose = styled.svg`
  width: 20px;
  height: 20px;

  stroke: var(--color-modal-btn-close);
`;
