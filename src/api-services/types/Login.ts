import { UserDto } from "./User";

export interface LoginVariables {
	username: string;
	password: string;
}

export interface LoginResponse {
	user: UserDto;
	message: string;
}
