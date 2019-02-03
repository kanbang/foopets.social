import React from 'react'

import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import {
	Box,
	Button,
	Grid,
	Heading,
	Menu
} from 'grommet'

const Layout = ({ children, username, onLogout, history }) => (
	<Grid
		fill={true}
		rows={['auto', 'flex']}
		columns={['auto', 'flex']}
		areas={[
			{ name: 'navbar', start: [0, 0], end: [1, 0] },
			{ name: 'content', start: [0, 1], end: [1, 1] }
		]}
	>
		{/* Redirects if no user is logged in */}
		{ !username && <Redirect to='/' />}

		<Box
			pad={{ horizontal: 'small', vertical: 'none' }}
			gridArea='navbar'
			direction='row'
			justify='between'
			border='bottom'
		>
			<Button onClick={() => history.push('/home')}>
				<Heading color='brand' level={3} margin='none'>Home</Heading>
			</Button>
			<Menu
				label={username}
				items={[
					{ 
						label: 'Logout', 
						onClick: () => {
							onLogout()
							history.push('/')
					 	}
					}
				]}
			/>
		</Box>
		<Box
			pad='small'
			gridArea='content'
		>
			{children}
		</Box>
	</Grid>
)

export default withRouter(Layout)