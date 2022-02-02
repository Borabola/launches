import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthorizationStatusEnum } from "../../types/Enums";

const initialState = {
	authorizationStatus: AuthorizationStatusEnum.UNKNOWN,
};

const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		requireAuthorization(
			state, action: PayloadAction<AuthorizationStatusEnum>
		) {
			state.authorizationStatus = action.payload;
		},
		logout(state) {
			state.authorizationStatus = AuthorizationStatusEnum.NO_AUTH;
		},
	},
});

export const { requireAuthorization, logout } = userSlice.actions;

export default userSlice.reducer;
