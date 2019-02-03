import React from 'react'

import {
	Box,
	Heading
} from 'grommet'

import FoopetList from './foopet-list'

export default ({ foopets }) => (
	<Box pad='medium'>
		<Heading margin='small'>Hello!</Heading>
		<FoopetList foopets={foopets} />
	</Box>
)