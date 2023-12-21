import React, { useState } from "react";
import "../assets/Login.css";
import {auth} from "../firebase";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


function Login() {
	const [email, setemail] = useState("");
	// console.log(email);
	const [password, setpassword] = useState("");
	const navigatTo = useNavigate();

	function signIn(e) {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) {
					navigatTo("/");
				}
			})
			.catch((Error) => {
				console.log(Error);
				alert(Error)
			});
	}
	function register(e) {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				if (userCredential) {
					navigatTo("/");
				}
			})
			.catch((Error) => {
				console.log(Error);
			});
	}
	return (
		<>
			<div className="outerWrapper"><br />
			<div className="formWrapper">
					<form className="form">
						<h1>sign-in</h1> <br />
						<label htmlFor=""> E-mail</label>
						<br />
						<input
							className="inputs"
							type="text"
							value={email}
							placeholder="ahsjd@gmail.com"
							onChange={(e) => setemail(e.target.value)}
						/>
						<br />
						<br />
						<label htmlFor="">Password</label>
						<br />
						<input
							className="inputs"
							type="text"
							value={password}
							placeholder="password"
							onChange={(e) => setpassword(e.target.value)}
						/>
						<br />
						<br />
						<Link to="/">
							<button onClick={signIn} className="signin-button" type="submit">
								sign-in
							</button>
						</Link>
						<p>
							By signing-in you agree to the AMAZON FAKE CLONE conditon ofuse
							&sale.please see our privacy notice,our cookies notice and our
							interest-based Ads notice.
						</p>
						<Link to="/">
							<button onClick={register} className="account-button">
								creat your Amazon account
							</button>
						</Link>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
