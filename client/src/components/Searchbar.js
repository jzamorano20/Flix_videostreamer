import React from 'react';

class SearchBar extends React.Component {
	handleChange = (event) => {
		this.setState({
			term: event.target.value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
    this.props.onSearchTermChange(this.state.term);
	}
	render() {
		return (
			<>
			<h2 className="text-center">
				<div className="w-200px h-100px justify-content-center">
					<form onSubmit={this.handleSubmit} type="text">
						<div className="">
							<label htmlFor="video-search">
								<input
								onChange={this.handleChange}
								name="video-search"
								type="text"
								placeholder="Search video...">
								</input>
							</label>
						</div>
					</form>
				</div>
			</h2>
			</>
		)
	}
}
export default SearchBar;
