import { auth } from '../firebase/firebaseclient';
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth"
import useAuth from "../hooks/auth";
import AuthService from "../services/authservice";
import { Center,Spinner } from '@chakra-ui/react';

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
		return (
			<Center>
				<Spinner size='xl' />	
			</Center>
			
		);
	}

	return children;
}