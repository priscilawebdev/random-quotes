import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import { GridList, GridTile } from 'material-ui/GridList'
import TxtField from 'components/Txtfield'
import messages from './messages'
import { Button } from './styles'
import validate from './validate'

const required = value => (value ? undefined : 'Required')

const renderAdd = ({ intl, handleSubmit, submitting, onAdd, openDialog, reset, onRequestClose }) => (
	<Dialog
		title={intl.formatMessage(messages['randomQuotes.containers.quote.createQuote'])}
		open={openDialog}
		modal={false}
		onRequestClose={() => {
			onRequestClose(false)
			reset()
		}}
		bodyStyle={{ overflow: 'inherit' }}
		titleStyle={{ paddingBottom: 0 }}
	>
		<form onSubmit={handleSubmit(onAdd)}>
			<Field
				name='description'
				component={TxtField}
				label={intl.formatMessage(messages['randomQuotes.containers.quote.description'])}
				validate={[required]}
				fullWidth
			/>
			<Field
				name='author'
				component={TxtField}
				label={intl.formatMessage(messages['randomQuotes.containers.quote.author'])}
				validate={[required]}
				fullWidth
			/>
			<GridList cols={2} cellHeight='auto'>
				<GridTile style={{ overflow: 'inherit' }}>
					<Button
						type='button'
						label={intl.formatMessage(messages['randomQuotes.containers.quote.cancel'])}
						buttonStyle={{ height: '50px', lineHeight: '50px' }}
						onClick={() => {
							onRequestClose(false)
							reset()
						}}
						fullWidth
					/>
				</GridTile>
				<GridTile style={{ overflow: 'inherit' }}>
					<Button
						type='submit'
						label={intl.formatMessage(messages['randomQuotes.containers.quote.create'])}
						disabled={submitting}
						buttonStyle={{ height: '50px', lineHeight: '50px' }}
						fullWidth
						primary
					/>
				</GridTile>
			</GridList>
		</form>
	</Dialog>
)

renderAdd.propTypes = {
	openDialog: PropTypes.bool.isRequired,
	submitting: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
	intl: intlShape
}

export const Add = reduxForm({
	form: 'AddQuote',
	validate,
	enableReinitialize: true
})(injectIntl(renderAdd))
