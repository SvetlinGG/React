import { useContext, useState } from "react";
import { UserContext} from '../../contexts/UserContext'

const containerStyle = {
    minHeight: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3f4f6",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  };

  const cardStyle = {
    width: "320px",
    padding: "24px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
  };

  const titleStyle = {
    marginBottom: "16px",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
  };

export default function ControlledLogin(){

    const initialFormValues = {
        email: '',
        password: ''
    }

    const {loginHandler} = useContext(UserContext);
    const [formValues, setFormValues] = useState(initialFormValues)

    const submitHandler = (e) => {
        // Stop page refresh
        e.preventDefault();

        // Call login handler
        loginHandler(formValues.email, formValues.password)

        // Clean up form
        setFormValues(initialFormValues);
    }

    // const emailChangeHandler =(e) => {
    //     setFormValues( state => ({
    //         ...state,
    //         email: e.target.value,
    //     }))
    // }

    // const passwordChangeHandler = (e) => {
    //     setFormValues( state => ({
    //         ...state,
    //         password: e.target.value,
    //     }))
    // }

    const changeHandler = (e) => {
        setFormValues( state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
 
    return (
        <>
        <div style={containerStyle}>
            <form style={cardStyle} onSubmit={(submitHandler)} >
                <h2 style={titleStyle}>Controlled Login</h2>

        <input
          type="email"
          id='email'
          name="email"
          value={formValues.email}
          onChange={changeHandler}
          placeholder="Email"
          style={inputStyle}
          required
        />

        <input
          id='password'
          type="password"
          name="password"
          value={formValues.password}
          onChange={changeHandler}
          placeholder="Password"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Sign in
        </button>
      </form>
    </div>
    </>
    )
}