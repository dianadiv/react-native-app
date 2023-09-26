import styled from "styled-components/native"
import { TouchableOpacity, View } from "react-native"
import React from "react"
import { Post } from "../../types/Post"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParams } from "../../navigation"

type Props = {
    post: Post
}

export const PostItem: React.FC<Props> = ({post}) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
    
    const handlePress = () => {
        navigation.navigate('PostDetails', { id: post.id });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <ViewStyled>
                <TitleStyled>{post.title}</TitleStyled>
                <TextStyled numberOfLines={2}>{post.body}</TextStyled>
            </ViewStyled>
        </TouchableOpacity>
    )
}

const ViewStyled = styled.View`
backgroundColor: #4d34a7;
margin-vertical: 10px;
border-radius: 10px;
`;

const TitleStyled = styled.Text`
font-size: 18px;
padding: 5px;

color: black;
background-color: #808080;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
`;

const TextStyled = styled.Text`
font-size: 18px;
padding: 5px;

color: white;
`;
