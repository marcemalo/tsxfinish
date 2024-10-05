import { useEffect } from "react";
import { useSignInMutation } from "../../redux/api/auth";
import { signIn } from "../../redux/slice/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { User } from "../../types/auth";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [signInRequest, { data, isSuccess }] = useSignInMutation();
  const user : User = {
    email: "john@mail.com",
    password: "changeme",
  };
  const handleSignIn = () => {
    signInRequest(user);
  };

  useEffect(() => {
    if(isSuccess && data?.accessToken){
      dispatch(signIn({token: data.accessToken}))
    }
  }, [isSuccess, data?.accessToken])
  return (
    <div>
      <button onClick={handleSignIn}>Click</button>
    </div>
  );
};

export default Login;
