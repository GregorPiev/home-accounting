export class AuthService {
    private isAuthenticated: bolean = false;

    login() {
        this.isAuthenticated = true;
    }
}