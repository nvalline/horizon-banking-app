// Components
import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const Home = async () => {
	const loggedIn = await getLoggedInUser();

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome,'
						user={loggedIn?.name || 'Guest'}
						subtext='Conveniently access and handle your account and transactions.'
					/>
					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={2489.65}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 2423.32 }, { currentBalance: 938.25 }]}
			/>
		</section>
	);
};

export default Home;
