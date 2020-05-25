export class AuthService {
    private isAuthenticated: bolean = false;

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
