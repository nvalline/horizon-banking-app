import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

// Components
import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
	const currentPage = Number(page as string) || 1;
	const loggedIn = await getLoggedInUser();
	const accounts = await getAccounts({ userId: loggedIn.$id });

	if (!accounts) return;

	const accountsData = accounts?.data;

	const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

	const account = await getAccount({ appwriteItemId });

	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
					<HeaderBox
						type='greeting'
						title='Welcome,'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Conveniently access and handle your account and transactions.'
					/>
					<TotalBalanceBox
						accounts={accountsData}
						totalBanks={accounts?.totalBanks}
						totalCurrentBalance={accounts?.totalCurrentBalance}
					/>
				</header>
				<RecentTransactions
					accounts={accountsData}
					transactions={account?.transactions}
					appwriteItemId={appwriteItemId}
					page={currentPage}
				/>
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={accounts?.transactions}
				banks={accountsData?.slice(0, 2)}
			/>
		</section>
	);
};

export default Home;
