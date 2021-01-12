import SignInSignUpView from "../components/SignInSignUpView";
import React from "react";

export default function SignUpScreen({ navigation }) {
  return <SignInSignUpView navigation={navigation} isSignIn={false} />;
}
