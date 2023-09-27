import { NavigationContainer } from '@react-navigation/native';
import { UsersList } from './src/components/UsersList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserDetails } from './src/components/UserDetails';
import { PostDetails } from './src/components/PostDetails';
import { ErrorPage } from './src/common/ErrorPage';
import { Home } from './src/components/Home';

export type RootStackParams = {
  UsersList: undefined;
  UserDetails: { id: number };
  PostDetails: { id: number };
  Error: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home Page' }} 
        />
        <Stack.Screen
          name="UsersList"
          component={UsersList}
          options={{ title: 'List of Users' }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{ title: 'Details of User' }}
        />
        <Stack.Screen
          name="PostDetails"
          component={PostDetails}
          options={{ title: 'Details of Post' }}
        />
        <Stack.Screen
          name="Error"
          component={ErrorPage}
          options={{ title: 'Error' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
