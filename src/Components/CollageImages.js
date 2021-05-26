import React from 'react';
import styled from 'styled-components';

export const CollageImages = () => {
	return (
		<Main>
			<CollageContainer>
				<ArtPicsBiggest
					src='../assets/200Ylva_landoff_lindberg_collage.gif'
					alt='Collage'
				/>
				<ArtPics
					src='../assets/199collage stigande svan, smal.jpg'
					alt='Collage'
				/>
				<ArtPics
					src='../assets/198collage bäver med paraply, small.jpg'
					alt='Collage'
				/>
				<ArtPics
					src='../assets/196collage papperssvan och lax.jpg'
					alt='Collage'
				/>
				<ArtPics
					src='../assets/197collage bäver möter papperssvan.jpg'
					alt='Collage'
				/>

				<ArtPics src='../assets/194Swimming beaver collage.gif' alt='Collage' />
				<ArtPicsBiggest
					src='../assets/195Swimming beaver collage.gif'
					alt='Collage'
				/>
			</CollageContainer>
			<CollageContainer>
				<ArtPicsBigger
					src='../assets/293master of fine arts and other things.jpg'
					alt='Collage'
				/>
				<ArtPicsBigger
					src='../assets/292my studio is my cave or he illusion of a solution73x55cm.gif'
					alt='Collage'
				/>
			</CollageContainer>
			<CollageContainer>
				<ArtPics src='../assets/291parenthood1.gif' alt='Collage' />
				<ArtPics src='../assets/290parenthood2.gif' alt='Collage' />
				<ArtPics src='../assets/289parenthood3.gif' alt='Collage' />
				<ArtPics src='../assets/288parenthood4.gif' alt='Collage' />
				<ArtPics src='../assets/287exhibition1.gif' alt='Collage' />
				<ArtPics src='../assets/286exhibition2.gif' alt='Collage' />
			</CollageContainer>
		</Main>
	);
};

const ArtPicsBiggest = styled.img`
	width: 100%;
	margin: 5px;
	@media (min-width: 820px) {
		width: 100%;
	}
`;
const ArtPicsBigger = styled.img`
	width: 100%;
	margin: 5px;

	@media (min-width: 820px) {
		width: auto;
		height: 400px;
		&:hover {
			transition: 0.4s ease;
			height: 500px;
		}
	}

	@media (min-width: 1200px) {
		width: auto;
	}
	@media (min-width: 2000px) {
		height: 700px;
	}
`;

const ArtPics = styled.img`
	width: 100%;
	margin: 5px;

	@media (min-width: 820px) {
		width: auto;
		height: 300px;
		&:hover {
			transition: 0.4s ease;
			height: 400px;
		}
	}

	@media (min-width: 1200px) {
		height: 350px;
		width: auto;
	}
	@media (min-width: 2000px) {
		height: 450px;
	}
`;

const Main = styled.div`
	height: 100%;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;

const CollageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto 0;
	flex-direction: column;

	@media (min-width: 820px) {
		flex-direction: row;
		flex-wrap: wrap;
	}

	@media (min-width: 1200px) {
		max-width: 2000px;
	}
`;
