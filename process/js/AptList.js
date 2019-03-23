var React = require('react')

var AptList = React.createClass({

	handleDelete: function () {
		this.props.onDelete(this.props.whichItem)
	},

	render() {

		return (

			<li className='pet-info media'>

				<div className='media-left'>
					<button className='pet-delete btn btn-xs btn-danger' onClick={this.handleDelete}>
						<span className='glyphicon glyphicon-remove'></span>
					</button>
				</div>

				<div className='peat-head'>

					<span className='pet-name'>{this.props.singleItem.petName}</span>
					<span className='apt-date pull-right'>{this.props.singleItem.aptDate}</span>

				</div>

				<div className='owner-name'>

					<span className='label-item'>Owner:</span>
					{this.props.singleItem.ownerName}

				</div>

				<div className='apt-notes'>
					{this.props.singleItem.aptNotes}
				</div>

			</li>

		)
		
	}

});

module.exports = AptList;