var bugData = [		// array of bug objects
	{
		id : 1,
		priority : 'P1',
		status : 'Open',
		owner : 'Tester',
		title : 'App crashes constantly...I literally can\'t even'
	},
	{
		id : 2,
		priority : 'P2',
		status : 'New',
		owner : 'Testes',
		title : 'Looks like crap'
	}
];

// bug row
var BugRow = React.createClass({
	render: function(){
		return (
			<tr>
				<td>{this.props.bug.id}</td>
				<td>{this.props.bug.status}</td>
				<td>{this.props.bug.priority}</td>
				<td>{this.props.bug.owner}</td>
				<td>{this.props.bug.title}</td>
			</tr>
		)
	}
});

// bug filtering component
var BugFilter = React.createClass({
	render: function(){
		return (
			<div>This component will be a bug filter</div>
		)
	}
});

// bug display table component
var BugTable = React.createClass({
	render: function(){
		var bugRows = this.props.bugs.map(function(bug){
			return <BugRow key={bug.id} bug={bug} />
		});
		return (
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Status</th>
						<th>Priority</th>
						<th>Owner</th>
						<th>Title</th>
					</tr>
				</thead>
				<tbody>
					{bugRows}
				</tbody>
			</table>
		)
	}
});

// add a bug component
var BugAdd = React.createClass({
	render: function(){
		return (
			<div>This component will be a form to add new bugs</div>
		)
	}
});

// the entire bug tracking application
var BugList = React.createClass({
	getInitialState : function(){
		return (
			{ bugs: bugData }
		)
	},

	render: function(){
		return (
			<div>
				<h1>Bug Tracker</h1>
				<BugFilter />
				<hr />
				<BugTable bugs={ this.state.bugs } />
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