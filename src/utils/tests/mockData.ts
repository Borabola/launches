export const testDate = "2022-01-22T15:40:00Z" as Date; //Jan. 22, 2022, 5:40 pm
const testDate2 = (Date.now() + 5000).toString();
const testDate3 = (new Date(500000000000)).toString(); // Nov 05 1985 06:23:20 GMT+0530 (IST)

export const testEvents = [
	{
		id: 33,
		eventName: "testName",
		eventImg: "testImgUrl",
		eventDate: testDate,
	}
];

export const testCurrentLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	videoURLs: "testVideoUrl",
	rocketDescription: "testDescription",
	launchDestination: "testOrbit",
	launchMission: "testMissionType",
	launchDate: testDate2,
};

export const testLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	launchDate: testDate3,
	rocketId: 88
};
