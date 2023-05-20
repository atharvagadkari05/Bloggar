import { useRouter } from "next/router";
import React from "react";
import useAuth from "./auth";
import { Center, Spinner } from '@chakra-ui/react'

export function withPublic(Component:any) {
	return function WithPublic(props:any) {
		const auth = useAuth();
		const router = useRouter();

		if (auth.user) {
			router.replace("/dashboard/profile");
				
				return (
					<Center>
						<Spinner size='xl' />	
					</Center>
					
				);
		}
		return <Component auth={auth} {...props} />;
	};
}

export function withProtected(Component:any) {
	return function WithProtected(props:any) {
		const auth = useAuth();
		const router = useRouter();

		if (!auth.user) {
			router.replace("/signup");
			//@ts-ignore
			return (
				<Center>
					<Spinner size='xl' />	
				</Center>
				
			);
		}
		return <Component auth={auth} {...props} />;
	};
}