class AuthManager {
    private currentAuthToken: string;

    constructor() {
        this.currentAuthToken = '';
    }

    public register = async (email: string, password: string, password2: string): Promise<void> => {
        return await this.loginTypeAction('register', { email, password, password2 }, false);
    }

    public login = async (email: string, password: string): Promise<void> => {
        return await this.loginTypeAction('login', { email, password });
    }

    public updateAuthToken = async () => {
        return await this.loginTypeAction('relogin', this.currentAuthToken);
    }

    public logout = () => {
        localStorage.removeItem('authToken');
    }

    public getAuthToken = () => {
        return this.currentAuthToken;
    }

    public loginTypeAction = async (action: 'login' | 'relogin' | 'register', value: any, containToken = true) => {
        const response = await fetch(`http://localhost:8000/${action}`, {
            method: 'POST',
            body: JSON.stringify(value)
        });
        const data = await response.json();

        if (containToken) {
            this.currentAuthToken = data.token;
            localStorage.setItem('authToken', data.token);
        }

        return data;
    }
}

export { AuthManager };
