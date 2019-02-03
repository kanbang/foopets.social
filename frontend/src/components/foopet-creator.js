import React from 'react'

import { withRouter } from 'react-router'

import AddDescription from './add-description'

import {
	Box,
	Button,
	Heading,
	Grid,
	Form,
	FormField,
	Image
} from 'grommet'


const FoopetCreator = class extends React.Component {

	state = {
		creatingDescription: false,
		name: '',
		avatar_url: '',
		descriptions: []
	}

	startAddingDescription = () => {
		this.setState({ creatingDescription: true })
	}

	stopAddingDescription = () => {
		this.setState({ creatingDescription: false })
	}

	createDescription = (title) => {
		this.setState(state => {
			return {
				...state,
				descriptions: [
					...state.descriptions,
					{ title }
				]
			}
		})
	}

	updateName = (name) => {
		this.setState({ name })
	}

	updateAvatarUrl = (avatar_url) => {
		this.setState({ avatar_url })
	}

	handleSubmit = (foopet) => {
		this.props.onSubmit(foopet)
		this.props.history.push('/home')
	}

	render = () => (
		<div>
			<Box
				pad='medium'
			>
				<Heading margin='small'>Create a foopet!</Heading>
		
				<Grid
					rows={[
						'small', 'small'
					]}
					columns={[
						'flex', 'flex'
					]}
					gap='medium'
					areas={[
						{ name:'left', start: [0, 0], end: [0, 1] },
						{ name:'right', start: [1, 0], end: [1, 1] }
					]}
				>
					{/* Preview */}
					<Box gridArea='left' pad='medium' >
						{this.state.avatar_url === ''
						? 
						<Heading size='small' color='accent-2'>Preview</Heading>
						:
						<Image fit='contain' src={this.state.avatar_url} />}
					</Box>
	
					{/* Construction */}
					<Box gridArea='right' pad='medium' >
						<Form onSubmit={args => {
							this.handleSubmit({
								...args.value,
								name: this.state.name,
								avatar_url: this.state.avatar_url
							})
						}}>
							<FormField 
								label='Name'
								name='name'
								value={this.state.name}
								onChange={e => 
									this.updateName(e.target.value)} />

							<FormField 
								label='Avatar url' 
								name='avatar_url' 
								value={this.state.avatar_url}
								onChange={e => 
									this.updateAvatarUrl(e.target.value)} />

							{this.state.descriptions.map(desc => (
								<FormField 
									label={desc.title}
									name={desc.title} />
							))}

							<Button 
								margin='small' 
								color='accent-1' 
								label='Add description' 
								onClick={this.startAddingDescription} />

							<Button 
								primary 
								margin='small' 
								label='Create' 
								type='submit' />
						</Form>
					</Box>
				</Grid>
			</Box>

			{ this.state.creatingDescription 
				&& <AddDescription
					onClose={this.stopAddingDescription}
					onCreate={this.createDescription} />}
		</div>
	)
}

export default withRouter(FoopetCreator)