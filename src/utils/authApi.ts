import Api from './api';

class AuthApi {
	private baseUrl: string;
	constructor() {
		this.baseUrl = '/auth';
	}

	async getMe(): Promise<ApiResponse<IUser>> {
		return Api.GET<ApiResponse<IUser>> ('/users' + '/get-me');
	}

	async login(loginInfomation: ILogin): Promise<ApiResponse<IUser>> {
		return Api.POST<ApiResponse<IUser>>(
			this.baseUrl + '/login',
			loginInfomation,
		);
	}

	async register(singupInfomation: IRegister): Promise<ApiResponse<any>> {
		return Api.POST<ApiResponse<any>>(
			this.baseUrl + '/register',
			singupInfomation,
		);
	}

	async refreshToken(): Promise<ApiResponse<IToken>> {
		return Api.POST<ApiResponse<IToken>>(this.baseUrl + 'refresh', {});
	}
}

export default new AuthApi();
