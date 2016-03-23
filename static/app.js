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
			React.createElement(
				'form',
				{ name: 'bugAdd' },
				React.createElement('input', { type: 'text', name: 'owner', placeholder: 'Owner' }),
				React.createElement('input', { type: 'text', name: 'title', placeholder: 'Title' }),
				React.createElement(
					'button',
					{ onClick: this.handleSubmit },
					'Add Bug'
				)
			)
		);
	},

	handleSubmit: function (e) {
		e.preventDefault();
		var form = document.forms.bugAdd;
		this.props.addBug({ owner: form.owner.value, title: form.title.value, status: 'New', priority: 'P1' });
		// Clear the form values
		form.owner.value = '';
		form.title.value = '';
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
			React.createElement('hr', null),
			React.createElement(BugAdd, { addBug: this.addBug })
		);
	},

	addBug: function (bug) {
		console.log('Adding bug:', bug);
		var bugsModified = this.state.bugs.slice();
		bug.id = this.state.bugs.length + 1;
		bugsModified.push(bug);
		this.setState({ bugs: bugsModified });
	}
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));