import { createContext, useContext, useState } from "react";
// import { signInwithGoogle,logout } from "../services/authservice";
import AuthService from "../services/authservice";
//@ts-ignore
const authContext = createContext();

export default function useAuth() {
	return useContext(authContext);
}

export function AuthProvider(props) {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");

	const loginWithGoogle = async () => {
		const { error, user } = await AuthService.loginWithGoogle();
		setUser(user ?? null);
		setError(error ?? "");
	};

	const logout = async () => {
		await AuthService.logout();
		setUser(null);
	};
	const value = { user, error, loginWithGoogle, logout, setUser };

	return <authContext.Provider value={value} {...props} />;
}