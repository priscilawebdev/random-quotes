import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import { Field, reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import { GridList, GridTile } from 'material-ui/GridList'
import TxtField from 'components/Txtfield'
import FileInput from 'components/FileInput'
import messages from './messages'
import { Button } from './styles'
import validate from './validate'

const renderAdd = ({ intl, handleSubmit, submitting, onAdd, openDialog, reset, progress, onRequestClose }) => (
	<Dialog
		title={intl.formatMessage(messages['randomQuotes.containers.background.createBackground'])}
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
				name='file'
				component={FileInput}
				accept='image/*'
				progress={progress}
				label={intl.formatMessage(messages['randomQuotes.containers.background.chooseAnImage'])}
				fullWidth
			/>
			<Field
				name='from'
				component={TxtField}
				label={intl.formatMessage(messages['randomQuotes.containers.background.from'])}
				fullWidth
			/>
			<Field
				name='link'
				component={TxtField}
				label={intl.formatMessage(messages['randomQuotes.containers.background.link'])}
				fullWidth
			/>
			<Field
				name='by'
				component={TxtField}
				label={intl.formatMessage(messages['randomQuotes.containers.background.by'])}
				fullWidth
			/>
			<GridList cols={2} cellHeight='auto'>
				<GridTile style={{ overflow: 'inherit' }}>
					<Button
						type='button'
						label={intl.formatMessage(messages['randomQuotes.containers.background.cancel'])}
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
						label={intl.formatMessage(messages['randomQuotes.containers.background.create'])}
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
	reset: PropTypes.func.isRequired,
	progress: PropTypes.number.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	intl: intlShape
}

export const Add = reduxForm({
	form: 'AddBackground',
	validate,
	enableReinitialize: true
})(injectIntl(renderAdd))
