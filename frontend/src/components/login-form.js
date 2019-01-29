import React from 'react'
import { 
	Box,
	Button,
	Form,
	FormField,
	Layer,
} from 'grommet'

export default ({ onClose, onSubmit }) => {

	return (
		<Layer 
			position='left'
			full='vertical'
			onClickOutside={onClose}
		>
			<Box pad='medium'>
				<Form onSubmit={onSubmit}>
					<FormField label='username' name='username' required />
					<FormField label='password' name='password' type='password' required />
					<Button label='Log in' primary color='accent-1' type='submit' />
				</Form>
			</Box>
		</Layer>
	)
}
