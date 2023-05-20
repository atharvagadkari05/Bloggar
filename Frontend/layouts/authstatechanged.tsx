import { auth } from '../firebase/firebaseclient';
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth"
import useAuth from "../hooks/auth";
import AuthService from "../services/authservice";

//@ts-ignore
export default function AuthStateChanged({ children }) {
	const { setUser } = useAuth();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		AuthService.waitForUser((userCred:any) => {
			setUser(userCred);
			setLoading(false);
		});
     
		//eslint-disable-next-line
	}, []);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return children;
}