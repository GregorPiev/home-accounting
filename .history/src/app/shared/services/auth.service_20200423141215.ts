export class AuthService {
    private isAuthenticated: boolean = false;

    login() {
        this.isAuthenticated = true;
    }

    logout() {
        this.isAuthenticated = false;
    }

    isLogin() {
        return this.isAuthenticated;
    }
}
