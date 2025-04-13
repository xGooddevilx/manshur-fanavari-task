export type Role = "admin" | "user";

export interface User {
	id: number;
	username: string;
	password: string;
	name: string;
	role: Role;
}

export type UserDto = Omit<User, "password">;
export interface UsersApiResponse {
	users: UserDto[];
  }
  