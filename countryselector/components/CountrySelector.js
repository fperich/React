
var CountrySelector = React.createClass({
	getInitialState() {
		return {
			countries: {},
			selected: ''
		}
	},

	componentDidMount() {
		var self = this;
		
		$.getJSON({
			url: './countries.json',
			success: function(res){
				self.setState({
					countries: res.countries,
					selected: self.props.selected
				});
			},
			error: function(err){
				console.log('error', err);
			}
		});
	},

	selectthis(e) {
		var selected = e.target.value;

		this.setState({
			selected: selected
		});

		// do what you want with "selected" country

		if(window){
			window.open('http://www.geonames.org/search.html?country=' + selected, 'popup')
		}
	},

	render() {
		var self = this;
		var options = [];

		_.size(this.state.countries) > 0 ? 
			this.state.countries.map(function(e, i){
				options.push(<option key={ i } value={ e.countryCode }>{ e.countryName }</option>);
			})
		: ''

		return (
			<div className="col-md-4">
				<select id="countries" className="form-control" type="select" value={ this.state.selected } onChange={ this.selectthis }>
					<option value="">Select country</option>
					{options}
			    </select>
			</div>
		);
	}
});

ReactDOM.render( <CountrySelector selected="CL" />, document.getElementById('app') );