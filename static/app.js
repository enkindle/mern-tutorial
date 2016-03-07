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
			React.createElement('hr', null),
			React.createElement(BugAdd, null)
		);
	}
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));