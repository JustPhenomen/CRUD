class RegisterService {    
    public static registerUser = async (email: string, password: string, password2: string) => {
        const response = await fetch('http://localhost:8000/register', {
            method: 'POST',
            body: JSON.stringify({ email, password, password2 })
        });

        return response;
    }
}

export { RegisterService };
