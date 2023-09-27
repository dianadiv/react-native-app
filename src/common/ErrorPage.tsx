import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import { RootStackParams } from '../../navigation';
import { Wrapper } from './Wrapper';

export const ErrorPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleGoBack = () => {
    navigation.dispatch(CommonActions.goBack());
  };

  return (
    <Wrapper>
      <TextStyled>There are problems on server</TextStyled>
      <TouchableOpacityStyled onPress={handleGoBack}>
        <TextStyled>Go back</TextStyled>
      </TouchableOpacityStyled>
    </Wrapper>
  );
};

const TextStyled = styled.Text`
  color: white;
  text-align: center;
  font-size: 23px;
  margin: 20px;
`;

const TouchableOpacityStyled = styled.TouchableOpacity`
  backgroundcolor: #4d34a7;
  border-radius: 10px;
  width: 50%;
  margin: 0px auto;
`;
