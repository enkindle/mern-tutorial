var BugFilter = React.createClass({
	render: function(){
		return (
			<div>This component will be a bug filter</div>
		)
	}
});

var BugTable = React.createClass({
	render: function(){
		return (
			<div>This component will be a table that lists the bugs</div>
		)
	}
});

var BugAdd = React.createClass({
	render: function(){
		return (
			<div>This component will be a form to add new bugs</div>
		)
	}
});

var BugList = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter />
				<hr />
				<BugTable />
				<hr />
				<BugAdd />
			</div>
		)
	}
});

ReactDOM.render(
	<BugList />,
	document.getElementById('main')
);