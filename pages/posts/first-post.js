import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';
import { getStatData } from '../../lib/posts';

export default function FirstPost(props) {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
				<link rel="icon" href="/favicon.ico" />
				<Script 
					src="https://connect.facebook.net/en_US/sdk.js" 
					strategy="lazyOnload"
					onLoad={() =>
						console.log(`script loaded correctly, window.FB has been populated`)
					}
				/>
			</Head>
			<h1>First Post</h1>
			<h2>
				{props.stat.claim['4']}
			</h2>
		</Layout>
	);
}

// 运行在服务器端
// build时执行一次
// export async function getStaticProps() {
// 	const statData = await getStatData();
// 	return {
// 		props: {
// 			stat: statData
// 		},
// 	};
// }

// 运行在服务器端
// request时执行
export async function getServerSideProps(context) {
	const statData = await getStatData();
	return {
		props: {
			stat: statData
		},
	};
}