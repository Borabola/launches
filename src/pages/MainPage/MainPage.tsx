import { MainPage as MainPageContainer } from "containers/MainPage";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../App/hooks";
import { useAuth } from "../../contexts/AuthContext";
import { requireAuthorization } from "../../redux/auth/sliceReducer";
import { useGetEventsQuery } from "../../redux/services/api";
import { AuthorizationStatusEnum } from "../../types/Enums";

export const MainPage: FC = () => {
	const { data: events = null, isFetching: isEventsFetching } = useGetEventsQuery();

	const authContext = useAuth();

	if (authContext === null) {
		return null;
	}
	const { currentUser } = authContext;
	const dispatch = useAppDispatch();

	useEffect(
		() => {
			if (currentUser) {
				dispatch(requireAuthorization(AuthorizationStatusEnum.AUTH));
			}
		},
		[currentUser]
	);

	return (
		<MainPageContainer
			events={events}
			isEventsFetching={isEventsFetching}
		/>
	);
};
