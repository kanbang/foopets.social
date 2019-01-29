import React from 'react'

import { 
	Box, 
	Button, 
	Form,
	FormField,
	Layer 
} from 'grommet'

export default ({ onClose, onSubmit }) => {

	return (
		<Layer 
			position='right'
			full='vertical'
			onClickOutside={onClose}
		>
			<Box pad='medium'>
				<Form onSubmit={onSubmit}>
					<FormField label='name' name='name' required />
					<FormField label='username' name='username' required />
					<FormField label='password' name='password' type='password'  required />
					<Button label='Sign up' primary color='accent-2' type='submit' />
				</Form>
			</Box>
		</Layer>
	)
}