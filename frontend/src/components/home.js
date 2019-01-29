import React from 'react'

import {
	Box,
	Heading
} from 'grommet'


export default ({ username }) => (
	<Box pad='medium' margin='small'>
		<Heading>Hi {username}!</Heading>
	</Box>
)