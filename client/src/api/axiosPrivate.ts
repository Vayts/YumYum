import { axiosPrivate } from '@src/api/axios';
import { AxiosInstance } from 'axios';
import { IUser } from '@src/types/user.types';

export function generateAxiosWithToken(user: IUser): AxiosInstance {
	const axios = axiosPrivate;
	axiosPrivate.interceptors.request.use(
		(config) => {
			if (!config.headers.Authorization) {
				config.headers.Authorization = `Bearer ${user?.token}`;
			}
			return config;
		}, (error) => Promise.reject(error),
	);
	return axios;
}
