import { API_URL } from '@/constants';
import type { IUser } from '@/entities/user';
import { Result, ok, err } from 'neverthrow';

class AuthController {
	constructor() {}

	static async validate(): Promise<boolean> {
		const session = localStorage.getItem('session');
		return !!session;
	}

	async register(name: string, username: string, password: string): Promise<Result<string,string>> {
		try {
			const response = await fetch(`${API_URL}/auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name,
					username,
					password
				})
			});

			if (!response.ok) {
				const errorText = await response.text();
				return err(errorText);
			}

			const jsonData = await response.json();
			const token = jsonData['token'];
			return ok(token);
		} catch (error) {
			return err('An error occurred during registration');
		}
	}

	async login(username: string, password: string): Promise<Result<string,string>> {
		try {
			const response = await fetch(`${API_URL}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			});
			if (!response.ok) {
				const errorTxt = await response.text();
				return err(errorTxt);
			}
			const jsonData = await response.json();
			const token = jsonData['token'];
			return ok(token);
		} catch (error) {
			return err('An Error occurred during registration');
		}
	}
	async saveToken(token: string) {
		localStorage.setItem('session', token);
	}

	async fetchSelf(): Promise<IUser| null> {
		try{
			const response = await fetch(`${API_URL}/auth/self`,{
				method:'GET',
				headers: await this.getDefaultHeaders()
			},);
			if(!response.ok){
				alert(response.text);
			}
			const jsonResponse = await response.json();
			const jsonData = jsonResponse["data"]
			return {
				name:jsonData["name"],
				username: jsonData["username"],
				createdAt: jsonData["createdAt"],
				updatedAt: jsonData["updatedAt"]
			} satisfies IUser
		}
		catch(error){
			alert(error)
			return null;
		}
	}

	async getDefaultHeaders(){
		return {
			'Content-Type' : 'application/json',
			'Authorization': `Bearer ${await this.fetchToken()}`
		}

	}

	async fetchToken(): Promise<string> {
		return localStorage.getItem('session')!;
	}
}

export default AuthController;
