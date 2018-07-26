import React, { Component } from 'react';
import {
	Container,
	Form,
	FormGroup,
	InputGroup,
	Input,
	Button,
	Jumbotron
} from 'reactstrap';
import { connect } from 'react-redux'; // redux states binding
import { weatherFetch } from '../actions/search_term'; // action creator
import styled from 'styled-components';


// styled components
const StyledButton = styled(Button)`
	background-color: #2C3990 !important;

	&:active{
		background-color: #3763B7 !important;
		box-shadow: 0 0 4px 1px rgba(0,0,0,0.5) !important;
	}
	&:hover{
		box-shadow: 0 0 4px 1px rgba(0,0,0,0.5) !important;
	}
	&:focus{
		box-shadow: 0 0 4px 1px rgba(0,0,0,0.5) !important;
	}
	&:unfocus{
		box-shadow: none !important;
	}
`;

const StyledInput = styled(Input)`

	&:focus{
		box-shadow: 0 0 3px #ccc !important;
		border-color: #ccc;
	}
`;

class SearchBar extends Component{
	constructor(props){
		super(props);

		// binding context
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

		// component states
		this.state = {
			term: ''
		};
	}

	// Handle Input
	onInputChange(e){
		this.setState({ term: e.target.value });
	}

	// Handle Button
	onFormSubmit(e){
		e.preventDefault();

		// calling an action /w search term passed
		this.props.weatherFetch(this.state.term);

	}

	render(){
		return(
			<div>
				<Jumbotron style={{backgroundColor: '#3763B7', color: '#E8EEF8', borderRadius: 0}}>
					<center><h1>Weather Forecast For The Next 5-Day</h1></center>
				</Jumbotron>
				<Container>
					<Form onSubmit={this.onFormSubmit}>
						<FormGroup>
							<InputGroup>
								<StyledInput 
								placeholder="City name e.g: Ranau" 
								value={this.state.term}
								onChange={this.onInputChange}
								required
								/>
								<StyledButton type="submit">Submit</StyledButton>
							</InputGroup>
						</FormGroup>
					</Form>
				</Container>
			</div>
		);
	}
}


// map redux state to component 'props'
const mapStateToProps = ({ weather_data }) => ({
	weather_data: weather_data
});


// list of actions store here
const actions = {
	weatherFetch
};


export default connect(mapStateToProps, actions)(SearchBar);