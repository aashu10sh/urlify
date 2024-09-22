import { API_URL } from '@/constants';
import { Result, ok, err } from 'neverthrow';


class AuthController {
    constructor() {}

    static async validate(): Promise<boolean> {
        const session = localStorage.getItem('session');
        return !!session;
    }

    async register(name: string, username: string, password: string): Promise<Result<string, string>> {
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
	async saveToken(token : string )  {
		localStorage.setItem("session", token);
	}

	async fetchToken() : Promise<string> {
		return localStorage.getItem("session")!;
	}
}

export default AuthController;