import { ReactNode } from 'react';
import styled from 'styled-components/native';

type Props = {
  children: ReactNode;
};

export const Wrapper: React.FC<Props> = ({ children }) => {
  return <ViewStyled>{children}</ViewStyled>;
};

const ViewStyled = styled.View`
  backgroundcolor: #100f1f;
  height: 100%;
  padding: 10px;
`;
