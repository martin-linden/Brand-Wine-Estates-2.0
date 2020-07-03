import React from 'react';
import styled from 'styled-components';
import Logo from '../images/bwe-logo.png';
import InstaLogo from '../images/insta-logo.svg';
import MailLogo from '../images/mail-logo.svg';
import PhoneLogo from '../images/phone-logo.svg';

const HeroCardWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	height: 600px;
	width: 900px;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.85);
	align-items: center;
	@media (max-width: 1090px) {
		height: 500px;
		width: 700px;
	}
	@media (max-width: 808px) {
		height: 100%;
		width: 100%;
		justify-content: center;
	}
	#intro-text-wrapper {
		text-align: center;
	}
	#intro-text {
		font-size: 24px;
	}
	#logo {
		width: 200px;
		margin-top: 10%;
		margin-bottom: 20px;
	}
	#contact-logos {
		width: 25px;
		vertical-align: top;
		margin-right: 10px;
	}
	ul {
		list-style-type: none;
		margin-bottom: 10%;
	}
	li {
		margin: 10px;
		padding: 15px;
	}
	a {
		margin: 0;
		padding: 0;
		color: inherit;
		text-decoration: none;
		&:hover {
			color: darkgray;
		}
	}
	img {
		margin: 0;
		padding: 0;
	}
`;

const ConstructionHeroCard = () => {
	return (
		<HeroCardWrapper>
			<img id="logo" alt="Brand Wine Estates Logo" src={Logo} />
			<div id="intro-text-wrapper">
				<p id="intro-text">Hemsidan är under uppbyggnad</p>
				<p>Under tiden får du gärna kontakta oss genom följande sätt:</p>
			</div>

			<ul>
				<li>
					<img id="contact-logos" alt="Instagram logotype" src={PhoneLogo} />Frida
					Brunnström: +46 700 43 3010
				</li>
				<li>
					<img id="contact-logos" alt="Instagram logotype" src={MailLogo} />
					<a href="mailto:frida@brandwineestates.com" className="send-email-link">
						frida@brandwineestates.com
					</a>
				</li>
				<li>
					<img id="contact-logos" alt="Instagram logotype" src={InstaLogo} />
					<a href="https://www.instagram.com/brandwineestates/?hl=sv">
						Brand Wine Estates på Instagram
					</a>
				</li>
			</ul>
		</HeroCardWrapper>
	);
};

export default ConstructionHeroCard;
