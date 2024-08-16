import HeaderBox from '@/components/HeaderBox';

const Home = () => {
	const loggedIn = { firstName: 'Genevieve' };

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Conveniently access and handle your account and transactions.'
					/>
				</header>
			</div>
		</section>
	);
};

export default Home;
