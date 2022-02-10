/* eslint-disable max-len */
const date = "2022-01-22T15:40:00Z" as unknown; //Jan. 22, 2022, 5:40 pm
export const testDate = date as Date;
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

export const mockEvents = {
	"count": 80,
	"next": "http://spacelaunchnow.me/api/3.3.0/event/upcoming/?limit=10&offset=10",
	"previous": null,
	"results": [
		{
			"id": 495,
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/event/495/",
			"name": "Test 1",
			"type": {
				"id": 5,
				"name": "Static Fire"
			},
			"description": "NASA will conduct an RS-25 engine test on the A-1 Test Stand around 20:57 UTC at the Stennis Space Center near Bay St. Louis, Mississippi.",
			"location": "Stennis Space Center, Mississippi",
			"news_url": "https://twitter.com/NASAStennis/status/1491119922839457793",
			"video_url": "https://www.youtube.com/watch?v=chHhfLD3xWI",
			"feature_image": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/event_images/rs-25_engine_te_image_20220208200250.jpg",
			"date": "2022-02-08T20:57:04Z",
			"launches": [],
			"expeditions": [],
			"spacestations": []
		},
		{
			"id": 492,
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/event/492/",
			"name": "Test 2",
			"type": {
				"id": 20,
				"name": "Press Event"
			},
			"description": "SpaceX's CEO Elon Musk will provide an update presentation on the company's Starship project.",
			"location": "Boca Chica, Texas",
			"news_url": "https://twitter.com/elonmusk/status/1489358828202246145",
			"video_url": null,
			"feature_image": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/event_images/starship_presen_image_20220204041630.jpeg",
			"date": "2022-02-11T02:00:00Z",
			"launches": [],
			"expeditions": [],
			"spacestations": []
		},
		{
			"id": 297,
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/event/297/",
			"name": "Test 3",
			"type": {
				"id": 2,
				"name": "Docking"
			},
			"description": "The Progress MS-19 spacecraft is scheduled to autonomously dock to the Poisk module of the ISS.",
			"location": "International Space Station",
			"news_url": null,
			"video_url": "https://www.youtube.com/watch?v=21X5lGlDOfg",
			"feature_image": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/event_images/progress_ms-19__image_20210519134945.jpg",
			"date": "2022-02-17T07:06:00Z",
			"launches": [
				{
					"id": "b89e65d2-db7d-4617-9f47-e26fe954ba0e",
					"url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/b89e65d2-db7d-4617-9f47-e26fe954ba0e/",
					"launch_library_id": null,
					"slug": "https://spacelaunchnow.me/launch/soyuz-21a-progress-ms-19-80p",
					"name": "Soyuz 2.1a | Progress MS-19 (80P)",
					"status": {
						"id": 1,
						"name": "Go"
					},
					"net": "2022-02-15T04:25:40Z",
					"window_end": "2022-02-15T04:25:40Z",
					"window_start": "2022-02-15T04:25:40Z",
					"mission": "Progress MS-19 (80P)",
					"mission_type": "Resupply",
					"pad": "31/6 | Baikonur Cosmodrome, Republic of Kazakhstan",
					"location": "Baikonur Cosmodrome, Republic of Kazakhstan",
					"landing": null,
					"landing_success": null,
					"launcher": null,
					"orbit": "LEO",
					"image": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/soyuz_2.1a_image_20201013143850.jpg"
				}
			],
			"expeditions": [],
			"spacestations": [
				{
					"id": 4,
					"url": "http://spacelaunchnow.me/api/ll/2.2.0/spacestation/4/",
					"name": "International Space Station",
					"status": {
						"id": 1,
						"name": "Active"
					},
					"founded": "1998-11-20",
					"description": "The International Space Station (ISS) is a space station, or a habitable artificial satellite, in low Earth orbit. Its first component was launched into orbit in 1998, with the first long-term residents arriving in November 2000. It has been inhabited continuously since that date. The last pressurised module was fitted in 2011, and an experimental inflatable space habitat was added in 2016. The station is expected to operate until 2030. Development and assembly of the station continues, with several new elements scheduled for launch in 2019. The ISS is the largest human-made body in low Earth orbit and can often be seen with the naked eye from Earth. The ISS consists of pressurised habitation modules, structural trusses, solar arrays, radiators, docking ports, experiment bays and robotic arms. ISS components have been launched by Russian Proton and Soyuz rockets, and American Space Shuttles.",
					"orbit": "Low Earth Orbit",
					"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/spacestation_images/international2520space2520station_image_20190220215716.jpeg"
				}
			]
		}
	]
};

export const mockLaunches = {
	"count": 2,
	"next": "http://spacelaunchnow.me/api/3.3.0/launch/upcoming/?limit=10&mode=detailed&offset=10",
	"previous": null,
	"results": [
		{
			"id": "testId",
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/testId/",
			"launch_library_id": null,
			"slug": "https://spacelaunchnow.me/launch/soyuz-stbfregat-oneweb-13",
			"name": "First Launch Name",
			"img_url": null,
			"status": {
				"id": 1,
				"name": "Go"
			},
			"net": "2022-02-10T18:09:37Z",
			"window_end": "2022-02-10T18:09:37Z",
			"window_start": "2022-02-10T18:09:37Z",
			"inhold": false,
			"tbdtime": false,
			"tbddate": false,
			"probability": null,
			"holdreason": "",
			"failreason": "",
			"hashtag": null,
			"rocket": {
				"configuration": {
					"id": 171,
					"launch_library_id": 52,
					"url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/171/",
					"name": "Soyuz STB",
					"description": "The 2.1b version adds an upgraded engine (RD-0124) with improved performance to the second stage. First launch took place from Plesetsk Cosmodrome Site 43 on 26 July 2008 with a classified military payload.\r\n\r\nThe 2.1b/ST version is sometimes called Soyuz ST-B.",
					"family": "Soyuz",
					"full_name": "Soyuz STB Fregat",
					"launch_service_provider": {
						"id": 111,
						"url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/111/",
						"name": "Progress Rocket Space Center",
						"featured": false,
						"type": "Commercial",
						"country_code": "RUS",
						"abbrev": "PRSC",
						"description": "Progress Rocket Space Centre, formerly known as TsSKB-Progress, is a space science and aerospace research company which is known for manufacturing launch vehicles and satellites. Most notably, Progress Rocket Space Centre is the manufacturer of Soyuz launch vehicles.",
						"administrator": "Dmitry Baranov",
						"founding_year": "1996",
						"launchers": "",
						"spacecraft": "",
						"launch_library_url": "https://launchlibrary.net/1.4/agency/111",
						"successful_launches": 276,
						"failed_launches": 10,
						"pending_launches": 18,
						"info_url": "https://en.samspace.ru/",
						"wiki_url": "https://en.wikipedia.org/wiki/Progress_Rocket_Space_Centre",
						"logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/progress2520rocket2520space2520center_logo_20210313175054.png",
						"image_url": null,
						"nation_url": null
					},
					"variant": "STB/Fregat",
					"alias": "",
					"min_stage": 3,
					"max_stage": 3,
					"length": 46.3,
					"diameter": 2.95,
					"maiden_flight": "2011-10-21",
					"launch_mass": 312,
					"leo_capacity": 8200,
					"gto_capacity": 3250,
					"to_thrust": null,
					"apogee": null,
					"vehicle_range": null,
					"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/soyuz_stb_image_20211130181029.jpeg",
					"info_url": null,
					"wiki_url": "https://en.wikipedia.org/wiki/Soyuz-2_(rocket)"
				},
				"launcher_stage": [],
				"spacecraft_stage": null
			},
			"mission": {
				"id": 1272,
				"launch_library_id": null,
				"name": "OneWeb 13",
				"description": "A batch of 34 satellites for the OneWeb satellite constellation, which is intended to provide global Internet broadband service for individual consumers. The constellation is planned to have around 648 microsatellites (of which 60 are spares), around 150 kg each, operating in Ku-band from low Earth orbit.",
				"type": "Test Communications",
				"orbit": "Polar Orbit",
				"orbit_abbrev": "PO"
			},
			"pad": {
				"id": 81,
				"agency_id": 115,
				"name": "Soyuz Launch Complex",
				"info_url": null,
				"wiki_url": "https://en.wikipedia.org/wiki/Ensemble_de_Lancement_Soyouz",
				"map_url": "https://www.google.com/maps/?q=5.3019,-52.8346",
				"latitude": "5.3019",
				"longitude": "-52.8346",
				"location": {
					"id": 13,
					"name": "Kourou, French Guiana",
					"country_code": "GUF"
				}
			},
			"infoURLs": [],
			"vidURLs": [],
			"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/soyuz25202.1b_image_20210520085946.jpeg",
			"infographic_url": null
		},
		{
			"id": "2b74e95d-de9d-44e5-aefb-d1e48d9e35e6",
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/2b74e95d-de9d-44e5-aefb-d1e48d9e35e6/",
			"launch_library_id": null,
			"slug": "https://spacelaunchnow.me/launch/astra-rocket-3-elana-41",
			"name": "Second Launch Name",
			"img_url": null,
			"status": {
				"id": 1,
				"name": "Go"
			},
			"net": "2022-02-12T20:00:00Z",
			"window_end": "2022-02-10T21:00:00Z",
			"window_start": "2022-02-10T20:00:00Z",
			"inhold": false,
			"tbdtime": false,
			"tbddate": false,
			"probability": 95,
			"holdreason": "",
			"failreason": "",
			"hashtag": null,
			"rocket": {
				"configuration": {
					"id": 213,
					"launch_library_id": 243,
					"url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/213/",
					"name": "Astra Rocket 3",
					"description": "Astra Rocket 3.0 is the third version and first orbital version of Astra Space's small satellite launch vehicle. It is designed to carry 100kg in LEO.",
					"family": "Astra Rocket",
					"full_name": "Astra Rocket 3",
					"launch_service_provider": {
						"id": 285,
						"url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/285/",
						"name": "Astra Space",
						"featured": true,
						"type": null,
						"country_code": "USA",
						"abbrev": "AS",
						"description": "Astra Space is a launch vehicle company based in San Francisco, California, that develops pump-fed, liquid bipropellant propulsion engines for DARPA and NASA as well as their Astra Rocket launch vehicle.",
						"administrator": "Geoffrey Crowley",
						"founding_year": "2005",
						"launchers": "213",
						"spacecraft": "",
						"launch_library_url": "https://launchlibrary.net/1.4/agency/285",
						"successful_launches": 1,
						"failed_launches": 3,
						"pending_launches": 3,
						"info_url": "https://astra.com/",
						"wiki_url": "https://en.wikipedia.org/wiki/Astra_Space",
						"logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/astra2520space_logo_20210828205410.png",
						"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_images/astra2520space_image_20200216210038.jpg",
						"nation_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/agency_nation/astra2520space_nation_20200216210039.jpg"
					},
					"variant": "3",
					"alias": "",
					"min_stage": 2,
					"max_stage": 2,
					"length": 11.6,
					"diameter": 1.32,
					"maiden_flight": "2020-09-12",
					"launch_mass": null,
					"leo_capacity": 100,
					"gto_capacity": null,
					"to_thrust": 140,
					"apogee": null,
					"vehicle_range": null,
					"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/astra_rocket_3_image_20211012141057.jpg",
					"info_url": null,
					"wiki_url": "https://en.wikipedia.org/wiki/Astra_Space"
				},
				"launcher_stage": [],
				"spacecraft_stage": null
			},
			"mission": {
				"id": 5933,
				"launch_library_id": null,
				"name": "ELaNa 41",
				"description": "Demonstration mission for NASA as part of the agency's CubeSat Launch Initiative. It includes 4 CubeSats developed by three universities and NASA’s John­son Space Center.",
				"type": "Test Flight",
				"orbit": "Low Earth Orbit",
				"orbit_abbrev": "LEO"
			},
			"pad": {
				"id": 27,
				"agency_id": null,
				"name": "Space Launch Complex 46",
				"info_url": null,
				"wiki_url": "https://en.wikipedia.org/wiki/Spaceport_Florida_Launch_Complex_46",
				"map_url": "http://maps.google.com/maps?q=28.4584,-80.5284",
				"latitude": "28.4584",
				"longitude": "-80.5284",
				"location": {
					"id": 12,
					"name": "Cape Canaveral, FL, USA",
					"country_code": "USA"
				}
			},
			"infoURLs": [
				"https://astra.com/nasas-elana-41-mission/"
			],
			"vidURLs": [
				"https://www.youtube.com/watch?v=kr5eccZdIyk",
				"https://www.youtube.com/watch?v=XEYS7d1CHso"
			],
			"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/astra2520rocke_image_20220206175320.jpg",
			"infographic_url": null
		}
	]
};

export const mockCurrentLaunch = {
	"id": "testId",
	"url": "http://spacelaunchnow.me/api/ll/2.2.0/launch/testId/",
	"launch_library_id": null,
	"slug": "https://spacelaunchnow.me/launch/soyuz-stbfregat-oneweb-13",
	"name": "Test Launch Title",
	"img_url": null,
	"status": {
		"id": 1,
		"name": "Go"
	},
	"net": "2022-02-10T18:09:37Z",
	"window_end": "2022-02-10T18:09:37Z",
	"window_start": "2022-02-10T18:09:37Z",
	"inhold": false,
	"tbdtime": false,
	"tbddate": false,
	"probability": null,
	"holdreason": "",
	"failreason": "",
	"hashtag": null,
	"rocket": {
		"configuration": {
			"id": 171,
			"launch_library_id": 52,
			"url": "http://spacelaunchnow.me/api/ll/2.2.0/config/launcher/171/",
			"name": "Soyuz STB",
			"description": "The 2.1b version adds an upgraded engine (RD-0124) with improved performance to the second stage. First launch took place from Plesetsk Cosmodrome Site 43 on 26 July 2008 with a classified military payload.\r\n\r\nThe 2.1b/ST version is sometimes called Soyuz ST-B.",
			"family": "Soyuz",
			"full_name": "Soyuz STB Fregat",
			"launch_service_provider": {
				"id": 111,
				"url": "http://spacelaunchnow.me/api/ll/2.2.0/agencies/111/",
				"name": "Progress Rocket Space Center",
				"featured": false,
				"type": "Commercial",
				"country_code": "RUS",
				"abbrev": "PRSC",
				"description": "Progress Rocket Space Centre, formerly known as TsSKB-Progress, is a space science and aerospace research company which is known for manufacturing launch vehicles and satellites. Most notably, Progress Rocket Space Centre is the manufacturer of Soyuz launch vehicles.",
				"administrator": "Dmitry Baranov",
				"founding_year": "1996",
				"launchers": "",
				"spacecraft": "",
				"launch_library_url": "https://launchlibrary.net/1.4/agency/111",
				"successful_launches": 276,
				"failed_launches": 10,
				"pending_launches": 18,
				"info_url": "https://en.samspace.ru/",
				"wiki_url": "https://en.wikipedia.org/wiki/Progress_Rocket_Space_Centre",
				"logo_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/logo/progress2520rocket2520space2520center_logo_20210313175054.png",
				"image_url": null,
				"nation_url": null
			},
			"variant": "STB/Fregat",
			"alias": "",
			"min_stage": 3,
			"max_stage": 3,
			"length": 46.3,
			"diameter": 2.95,
			"maiden_flight": "2011-10-21",
			"launch_mass": 312,
			"leo_capacity": 8200,
			"gto_capacity": 3250,
			"to_thrust": null,
			"apogee": null,
			"vehicle_range": null,
			"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launcher_images/soyuz_stb_image_20211130181029.jpeg",
			"info_url": null,
			"wiki_url": "https://en.wikipedia.org/wiki/Soyuz-2_(rocket)"
		},
		"launcher_stage": [],
		"spacecraft_stage": null
	},
	"mission": {
		"id": 1272,
		"launch_library_id": null,
		"name": "OneWeb 13",
		"description": "A batch of 34 satellites for the OneWeb satellite constellation, which is intended to provide global Internet broadband service for individual consumers. The constellation is planned to have around 648 microsatellites (of which 60 are spares), around 150 kg each, operating in Ku-band from low Earth orbit.",
		"type": "Test Communications",
		"orbit": "Test Orbit",
		"orbit_abbrev": "PO"
	},
	"pad": {
		"id": 81,
		"agency_id": 115,
		"name": "Soyuz Launch Complex",
		"info_url": null,
		"wiki_url": "https://en.wikipedia.org/wiki/Ensemble_de_Lancement_Soyouz",
		"map_url": "https://www.google.com/maps/?q=5.3019,-52.8346",
		"latitude": "5.3019",
		"longitude": "-52.8346",
		"location": {
			"id": 13,
			"name": "Kourou, French Guiana",
			"country_code": "GUF"
		}
	},
	"infoURLs": [],
	"vidURLs": [],
	"image_url": "https://spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com/media/launch_images/soyuz25202.1b_image_20210520085946.jpeg",
	"infographic_url": null
};

export const testLaunch = {
	id: "testId",
	launchName: "testName",
	launchImg: "testImgUrl",
	launchDate: testDate3,
	rocketId: 88
};
export const testLaunches = [
	{
		id: "testId",
		launchName: "testName",
		launchImg: "testImgUrl",
		launchDate: testDate3,
		rocketId: 88
	},
	{
		id: "testId2",
		launchName: "testName2",
		launchImg: "testImgUrl2",
		launchDate: testDate3,
		rocketId: 89
	}
];
