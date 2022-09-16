import './Authentication.scss'
import { SignUpForm, SignInForm } from "../../components/components.index/index"

const Authentication = () => {
  
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
 