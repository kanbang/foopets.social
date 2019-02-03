import React from 'react'

import {
	Box,
	Button,
	Heading,
	Form,
	Layer,
	FormField,
} from 'grommet'

export default ({ onCreate, onClose }) => (
	<Layer 
		position='center' 
		onClickOutside={onClose}
		onEsc={onClose}
	>
		<Box pad='medium' gap='small' width='medium'>
			<Heading level={3} margin='none'>New description</Heading>
			<Form onSubmit={(args) => {
				onCreate(args.value.title)
				onClose()
			}}>
				<FormField label='Title' name='title' required />
				<Box direction='row' justify='between'>
					<Button label='Cancel' color='status-warning' onClick={onClose} />
					<Button primary label='Add' alignSelf='end' type='submit' />
				</Box>
			</Form>
		</Box>
	</Layer>
)