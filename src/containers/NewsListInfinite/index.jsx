import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsCard from '../../components/NewsCard';
import { GET_ALL_NEWS } from '../../services/news';
import NewsSkleton from '../NesSkelot';
const NewsListInfinite = ({ category }) => {
	const [loading, setLoading] = useState(true);
	const [news, setNews] = useState({});
	const [page, setPage] = useState(1);

	useEffect(() => {
		getNews(1);
	}, []);

	const getNews = async (p) => {
		const res = await GET_ALL_NEWS(20, category.id, p);
		if (p === 1) {
			setLoading(false);
			setNews(res);
		} else {
			setLoading(false);
			setNews({
				...news,
				articles: [...news.articles, ...res.articles],
			});
		}
	};
	if (loading)
		return (
			<div>
				<div className='flex justify-between mb-3 mt-10 '>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5'></div>
					<div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5'></div>
				</div>
				<NewsSkleton count={8} />
			</div>
		);
	return (
		<div>
			<InfiniteScroll
				dataLength={news.articles.length} //This is important field to render the next data
				next={() => {
					getNews(page + 1);
					setPage(page + 1);
				}}
				hasMore={news.totalResults > page * 20}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
				refreshFunction={() => {
					getNews(1);
					setPage(1);
				}}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
				}
			>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
					{news.articles.map((item, index) => (
						<NewsCard key={index} item={item} />
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
};

export default NewsListInfinite;
