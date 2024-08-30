import Image from 'next/image';
import { topCategoryStyles } from '@/constants';
import { cn } from '@/lib/utils';

// Components
import { Progress } from './ui/progress';

const Category = ({ category }: CategoryProps) => {
	const {
		bg,
		circleBg,
		text: { main, count },
		progress: { bg: progressBg, indicator },
		icon
	} = topCategoryStyles[category.name as keyof typeof topCategoryStyles] ||
	topCategoryStyles.default;

	return (
		<div className={cn('gap-[18px] flex p-4 rounded-xl', bg)}>
			<figure className={cn('flex-center size-10 rounded-full', circleBg)}>
				<Image src={icon} height={20} width={20} alt={main} />
			</figure>
			<div className='w-full flex flex-col flex-1 gap-2'>
				<div className='text-14 flex justify-between'>
					<h2 className={cn('font-medium', main)}>{category.name}</h2>
					<h3 className={cn('font-normal', count)}>{category.count}</h3>
				</div>

				<Progress
					value={(category.count / category.totalCount) * 100}
					className={cn('h-2 w-full', progressBg)}
					indicatorClassName={cn('h-2 w-full', indicator)}
				/>
			</div>
		</div>
	);
};

export default Category;
