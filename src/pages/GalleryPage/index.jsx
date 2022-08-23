import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ImageCard from '../../components/ImageCard';
import Loader from '../../components/Loader';
import SearchBar from '../../components/SearchBar';
import { GET_IMAGES } from '../../services/gallery';
// import { createClient } from 'pexels';

const GalleryPage = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const [query, setQuery] = useState('Nature');

	useEffect(() => {
		fetchData(1);
	}, []);

	const fetchData = async (p) => {
		const res = await GET_IMAGES(p, query);
		if (p !== 1) {
			setData({
				...data,
				page: res.page,
				photos: [...data.photos, ...res.photos],
			});
		} else {
			setData(res);
		}
		if (loading) {
			setLoading(false);
		}
	};

	const handleSearchSubmit = async (text) => {
		setQuery(text);
		const res = await GET_IMAGES(1, text);
		if (res) {
			setData(res);
		}
	};
	if (loading) return <Loader />;
	return (
		<div className='container py-10'>
			<SearchBar submit={handleSearchSubmit} />
			<InfiniteScroll
				dataLength={data.photos.length} //This is important field to render the next data
				next={() => fetchData(data.page + 1 || 1)}
				hasMore={data.total_results > data.page * data.per_page + 1}
				loader={<Loader />}
				refreshFunction={() => {
					fetchData(1);
				}}
				pullDownToRefresh
				pullDownToRefreshThreshold={50}
				pullDownToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
				}
				releaseToRefreshContent={
					<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
				}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4'>
					{data.photos.map((item, index) => (
						<ImageCard key={index} image={item} />
					))}
				</div>
			</InfiniteScroll>
		</div>
	);
};

export default GalleryPage;
