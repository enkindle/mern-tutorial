var bugData = [// array of bug objects
{
	id: 1,
	priority: 'P1',
	status: 'Open',
	owner: 'Tester',
	title: 'App crashes constantly...I literally can\'t even'
}, {
	id: 2,
	priority: 'P2',
	status: 'New',
	owner: 'Testes',
	title: 'Looks like crap'
}];

// bug row
var BugRow = React.createClass({
	displayName: 'BugRow',

	render: function () {
		console.log('Rendering BugRow:', this.props.bug);
		return React.createElement(
			'tr',
			null,
			React.createElement(
				'td',
				null,
				this.props.bug.id
			),
			React.createElement(
				'td',
				null,
				this.props.bug.status
			),
			React.createElement(
				'td',
				null,
				this.props.bug.priority
			),
			React.createElement(
				'td',
				null,
				this.props.bug.owner
			),
			React.createElement(
				'td',
				null,
				this.props.bug.title
			)
		);
	}
});

// bug filtering component
var BugFilter = React.createClass({
	displayName: 'BugFilter',

	render: function () {
		console.log('Rendering BugFilter');
		return React.createElement(
			'div',
			null,
			'This component will be a bug filter'
		);
	}
});

// bug display table component
var BugTable = React.createClass({
	displayName: 'BugTable',

	render: function () {
		console.log('Rendering BugTablem, num items:', this.props.bugs.length);
		var bugRows = this.props.bugs.map(function (bug) {
			return React.createElement(BugRow, { key: bug.id, bug: bug });
		});
		return React.createElement(
			'table',
			null,
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					React.createElement(
						'th',
						null,
						'Id'
					),
					React.createElement(
						'th',
						null,
						'Status'
					),
					React.createElement(
						'th',
						null,
						'Priority'
					),
					React.createElement(
						'th',
						null,
						'Owner'
					),
					React.createElement(
						'th',
						null,
						'Title'
					)
				)
			),
			React.createElement(
				'tbody',
				null,
				bugRows
			)
		);
	}
});

// add a bug component
var BugAdd = React.createClass({
	displayName: 'BugAdd',

	render: function () {
		console.log('Rendering BugAdd');
		return React.createElement(
			'div',
			null,
			'This component will be a form to add new bugs'
		);
	}
});

// the entire bug tracking application
var BugList = React.createClass({
	displayName: 'BugList',

	getInitialState: function () {
		return { bugs: bugData };
	},

	render: function () {
		console.log("Rendering bug list, num items:", this.state.bugs.length);
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Bug Tracker'
			),
			React.createElement(BugFilter, null),
			React.createElement('hr', null),
			React.createElement(BugTable, { bugs: this.state.bugs }),
			React.createElement(
				'button',
				{ onClick: this.testNewBug },
				'Add Bug'
			),
			React.createElement('hr', null),
			React.createElement(BugAdd, null)
		);
	},

	testNewBug: function () {
		var nextId = this.state.bugs.length + 1;
		this.addBug({ id: nextId, priority: 'P2', status: 'New', owner: 'Pieata', title: 'Warning on the console' });
	},

	addBug: function (bug) {
		console.log('Adding bug:', bug);
		var bugsModified = this.state.bugs.slice();
		bugsModified.push(bug);
		this.setState({ bugs: bugsModified });
	}
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));