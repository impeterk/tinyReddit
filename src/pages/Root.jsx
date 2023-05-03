import Navbar from '..//components/NavBar'
import { Outlet } from 'react-router-dom'
import SubredditList from '../components/SubredditList'

export default function Root() {
	return (
		<>
			<Navbar />
			<div className='columns mx-4 py-1 is-desktop'>
				<div className='is-8 is-offset-1 my-1 px-1'>
					<Outlet />
				</div>
				<div className='column is-one-quarter'>
				<SubredditList />
			</div>
		</div>
		</>
	)
}

