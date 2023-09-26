import { Wrapper } from "./Wrapper"
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation";

export const Home: React.FC = () => {
    const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

    const handlePress = () => {
        navigation.navigate('UsersList');
    };

    return (
        <Wrapper>
            <TextStyled>Hello!</TextStyled>
            <TouchableOpacityStyled onPress={handlePress}>
                <TextStyled>Show all Users</TextStyled>
            </TouchableOpacityStyled>
        </Wrapper>
    )
}

const TextStyled = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 23px;
  margin: 20px;
`;

const TouchableOpacityStyled = styled.TouchableOpacity`
backgroundColor: #4d34a7;
border-radius: 10px;
width: 50%;
margin: 0px auto;
`;