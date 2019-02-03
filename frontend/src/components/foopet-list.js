import React from 'react'

import { Link } from 'react-router-dom'

import {
	Box,
	Button,
	Grid,
	Heading,
	Image
} from 'grommet'

export default ({ foopets }) => (
	<div>
		{ foopets.length 
			?
			<Grid
				rows='medium'
				columns='small'
				gap='medium'
				alignContent='center'
			>
				{ foopets.map(foopet => (
					<Box
						pad='small'
						elevation='medium'
					>
						<Image fit='contain' src={foopet.avatar_url} />
						<Heading size='small'>{foopet.name}</Heading>
					</Box>
				)) }

			</Grid>
			:
			<Box pad='medium' margin='medium'>
				You've got no foopets yet :(
			</Box> 
		}

		<Link to='/new'>
			<Button primary label='Create foopet' margin='medium' color='accent-1' />
		</Link>
	</div>
)