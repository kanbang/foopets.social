import React from 'react'
import {
	Box,
	Text
} from 'grommet'

export default ({ msg }) => (
	<Box
		margin='small'
	>
		<Text color='status-error'>{msg}</Text>
	</Box>
)