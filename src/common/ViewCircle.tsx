import styled from "styled-components/native";

import Icon from 'react-native-vector-icons/FontAwesome5';

export const ViewCircle: React.FC = () => {
    return (
        <ViewCircleStyled>
            <Icon name="user" size={20} color="#fff" />
        </ViewCircleStyled>
    )
}

const ViewCircleStyled = styled.View`
    width: 40px;
    height: 40px;
    
    border-radius: 50px;
    backgroundColor: #220540;

    align-self: center;
    display: flex;
    justify-content: center;
    padding-left: 11px;
`;
