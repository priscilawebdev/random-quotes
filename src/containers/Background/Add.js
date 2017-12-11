import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm, reset as resetOnSubmit } from 'redux-form'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import { GridList, GridTile } from 'material-ui/GridList'
import TextInput from 'components/TextInput'
import FileInput from 'components/FileInput'
import Button from 'components/Button'
import messages from './messages'
import validate from './validate'

const handleReset = (result, dispatch) => dispatch(resetOnSubmit('AddBackground'))

const renderAdd = ({ intl, handleSubmit, submitting, onAdd, openDialog, reset, onRequestClose }) => (
	<Dialog
		title={intl.formatMessage(messages['randomQuotes.containers.background.createBackground'])}
		open={openDialog}
		modal={false}
		onRequestClose={() => {
			onRequestClose()
			reset()
		}}
		bodyStyle={{ overflow: 'inherit' }}
		titleStyle={{ paddingBottom: 0 }}
	>
		<form onSubmit={handleSubmit(onAdd)}>
			<Field
				name='file'
				component={FileInput}
				accept='image/*'
				label={intl.formatMessage(messages['randomQuotes.containers.background.chooseAnImage'])}
				fullWidth
			/>
			<Field
				name='from'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.background.from'])}
				fullWidth
			/>
			<Field
				name='by'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.background.by'])}
				fullWidth
			/>
			<Field
				name='link'
				component={TextInput}
				label={intl.formatMessage(messages['randomQuotes.containers.background.link'])}
				fullWidth
			/>
			<GridList cols={2} cellHeight='auto'>
				<GridTile style={{ overflow: 'inherit' }}>
					<Button
						type='button'
						label={intl.formatMessage(messages['randomQuotes.containers.background.cancel'])}
						onClick={() => {
							onRequestClose()
							reset()
						}}
						fullWidth
					/>
				</GridTile>
				<GridTile style={{ overflow: 'inherit' }}>
					<Button
						type='submit'
						label={intl.formatMessage(messages['randomQuotes.containers.background.create'])}
						disabled={submitting}
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
	reset: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
	submitting: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	intl: intlShape
}

export const Add = reduxForm({
	form: 'AddBackground',
	validate,
	enableReinitialize: true,
	onSubmitSuccess: handleReset
})(injectIntl(renderAdd))
