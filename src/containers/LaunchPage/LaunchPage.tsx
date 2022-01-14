const LaunchPage = () => {
	return (
        <PageLayout>
			{(!isCurrentFetching && currentLaunch) ?
				<>
					<LaunchHero launch={currentLaunch} />

					<Container maxWidth="lg">
						<section className={classes.pageContent} >

							<LaunchPageContent launch={currentLaunch} />
						</section>
					</Container>
				</>
				:
				<>
					<Loader />
					{lunchCurrentError &&
						<Typography
							variant="h3"
							textAlign="center"
						>
							{lunchCurrentError}
						</Typography>
					}
				</>

			}
        </PageLayout>
	);
};

export default LaunchPage;
