import React from 'react'
import {
	Box,
	Text
} from 'grommet'

export default ({ msg }) => (
	<Box
		alignSelf='left'
		background='status-warning'
		margin='small'
		pad='small'
	>
		<Text color='white'>{msg}</Text>
	</Box>
)