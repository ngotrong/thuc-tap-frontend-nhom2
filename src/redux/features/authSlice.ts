import authApi from '@/utils/authApi';
import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
// import { ILogin } from '../../interfaces/auth.interface';
// import { IUser } from '../../interfaces/user.interface';
// import AuthApi from './../../api/authApi';
// import UserApi from '../../api/userApi';
// import { LoadingStatus } from '../../enums/enum';

export const requestLogin = createAsyncThunk(
	'auth/login',
	async (input: ILogin, thunkAPI) => {
		const response = await authApi.login(input);

		if (!response.success) throw response.message;
		localStorage.setItem('token', JSON.stringify(response.data?.accessToken));
		return response.data;
	},
);

// export const getMe = createAsyncThunk('users/get-me', async (_, thunkAPI) => {
// 	const response = await UserApi.getMe();

// 	if (!response.success) throw response.message;
// 	return response.data;
// });

// export const updateUser = createAsyncThunk(
// 	'users/update',
// 	async (userData: any, thunkApi) => {
// 		const response = await UserApi.update(userData);
// 		if (!response.success) throw response.message;
// 		return response.data;
// 	},
// );
// export const uploadAvatar = createAsyncThunk(
// 	'users/upload-avatar',
// 	async (userData: any, thunkApi) => {
// 		const response = await UserApi.update(userData);
// 		if (!response.success) throw response.message;
// 		return response.data;
// 	},
// );

export const logout = createAsyncThunk('', async (_, thunkAPI) => {
	return null;
});

export interface AuthState {
	currentUser: IUser | null | undefined;
	accessToken: string;
	error: ErrorResponse | null;
	//loading: LoadingStatus;
}
const initialState: AuthState = {
	currentUser: null,
	accessToken: '',
	error: null,
	//loading: LoadingStatus.Pedding,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(requestLogin.fulfilled, (state, action) => {
				state.currentUser = action.payload;
				//state.loading = LoadingStatus.Fulfilled;
				state.error = null;
			})
			.addCase(requestLogin.rejected, (state, action) => {
				state.error = { message: action.error.message ?? '' };
				//state.loading = LoadingStatus.Rejected;
			})
			// .addCase(getMe.fulfilled, (state, action) => {
			// 	state.currentUser = action.payload;
			// 	//state.loading = LoadingStatus.Fulfilled;
			// 	state.error = null;
			// })
			// .addCase(updateUser.fulfilled, (state, action) => {
			// 	state.currentUser = action.payload;
			// 	//state.loading = LoadingStatus.Fulfilled;
			// 	state.error = null;
			// })
			// .addCase(uploadAvatar.fulfilled, (state, action) => {
			// 	state.currentUser = action.payload;
			// 	state.error = null;
			// })
			.addCase(logout.fulfilled, (state, action) => {
				state.currentUser = action.payload;
				state.accessToken = '';
				localStorage.clear();
				//state.loading = LoadingStatus.Fulfilled;
			})
			.addMatcher(
				(action) => action.type.includes('rejected'),
				(state, action) => {
					state.error = {
						message: action.error.message ?? action.payload.message,
						errorCode: action.error.code,
					};
					//state.loading = LoadingStatus.Rejected;
				},
			)
			.addDefaultCase((state, action) => {
				// console.log(`action type: ${action.type}`, current(state));
			});
	},
});

export const {
	// loginStart,
	// loginSuccess,
	// loginFailed,
	// logoutStart,
	// logoutSuccess,
	// logoutFailed,
} = authSlice.actions;
export default authSlice.reducer;
