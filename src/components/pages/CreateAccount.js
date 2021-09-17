import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const CreateAccount = () => {
  const history = useHistory();
  const [createAccountReq, setCreateAccountReq] = useState('');
  const { createAccountWithEmailAndPassword } = useAuth();

  // Sign in user and return boolean, then redirect to homepage
  const onCreateAccountWithEmailAndPassword = async () => {
    try {
      const res = await createAccountWithEmailAndPassword(createAccountReq.firstName[0],createAccountReq.lastName[0],createAccountReq.email[0], createAccountReq.password[0]);
      console.log(res);
      if (res) {
        history.push('/overview');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Store Email and Password in useState when input changes
  const handleCreateAccountChange = (e) => {
    setCreateAccountReq({ ...createAccountReq, [e.target.name]: [e.target.value] });
  };

  return (
    <section id="CreateAccount">
      <div className="name">
        <div className="input-fields">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" onChange={handleCreateAccountChange} />
        </div>
        <div className="input-fields">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" onChange={handleCreateAccountChange} />
        </div>
      </div>

      <div className="input-fields">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={handleCreateAccountChange} />
      </div>

      <div className="input-fields">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" onChange={handleCreateAccountChange} />
      </div>

      <button type="submit" id="btnSignIn" onClick={onCreateAccountWithEmailAndPassword}>
        Create Account
      </button>
    </section>
  );
};

export default CreateAccount;
