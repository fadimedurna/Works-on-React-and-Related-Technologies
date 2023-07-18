import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData(); //this hook is used to get the data from the action (e.g. the data from the login action). In this case it returns response for 422 or 421 in Authentiation.js.
  const navigation = useNavigation();
  //navigation.state is a string that can be "idle", "submitting", "success" or "error"

  const [searchParams] = useSearchParams(); //this hook is used to get the query params from the url (e.g. ?mode=login)
  const isLogin = searchParams.get("mode") === "login"; //isLogin is true if the query param is login
  const isSubmmitting = navigation.state === "submitting"; //A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE

  //useSearchParams hook only can be used in components that are rendered by react-router-dom

  return (
    <>
      <Form method='post' className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor='email'>Email</label>
          <input id='email' type='email' name='email' required />
        </p>
        <p>
          <label htmlFor='image'>Password</label>
          <input id='password' type='password' name='password' required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {" "}
            {/* this line means that if the user is in login mode, the link will be signup, otherwise it will be login */}
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmmitting}>
            {isSubmmitting ? "Submitting..." : "Save"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
