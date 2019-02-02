import React from 'react'
import { 
	Box,
	Button,
	Form,
	FormField,
	Layer,
} from 'grommet'

import Error from './error'

export default ({ onClose, onSubmit, error }) => {

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
					{ error && <Error msg={error} /> }
					<Button label='Log in' primary color='accent-1' type='submit' />
				</Form>
			</Box>
		</Layer>
	)
}
