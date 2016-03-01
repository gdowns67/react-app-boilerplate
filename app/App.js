var React = require('react');

var App = React.createClass({
	render: function() {
	    return (
            <div>
                <h1>{this.props.now}</h1>
                <ul>
                    { this.props.items.map(item => <li key={item.id}>{item.name}</li>) }
                </ul>
			    <h1>Hello!</h1>
            </div>
		);
	}
});
	
module.exports = App;
