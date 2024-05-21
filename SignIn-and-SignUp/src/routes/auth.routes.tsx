import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import { SignIn } from "../../Pages/SignIn";
import { SignUp } from "../../Pages/SignUp";
const Auth = createNativeStackNavigator();
export const AuthRoutes: React.FunctionComponent = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name="SigIn" component={SignIn}></Auth.Screen>
      <Auth.Screen name="SigUp" component={SignUp}></Auth.Screen>
    </Auth.Navigator>
  );
}
