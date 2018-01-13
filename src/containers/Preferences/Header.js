import React from 'react'
import { intlShape, injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { GridList } from 'material-ui/GridList'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Avatar from 'material-ui/Avatar'
import Button from 'components/Button'
import { Add as AddQuote } from 'containers/Quote/Add'
import { Add as AddBackground } from 'containers/Background/Add'
import { Account, GridItem, Title, User, Info, Action } from './HeaderStyles'
import messages from './messages'

const Header = ({
	category,
	user,
	displayName,
	showDialog,
	onSetShowDialog,
	onCloseDialog,
	onAdd,
	onLogout,
	intl
}) => (
	category === 'general' ? (
		<Account cols={6} cellHeight='auto'>
			<GridItem cols={3} align='middle' justify='left'>
				<User>
					<Avatar src={user.photoURL} />
					<Info>
						<p>{displayName}</p>
						<p>{user.email}</p>
					</Info>
				</User>
			</GridItem>
			<GridItem cols={2} align='middle' justify='center'>
				<Action onClick={onLogout} className='btn'>
					{intl.formatMessage(messages['randomQuotes.containers.preferences.editAccount'])}
				</Action>
			</GridItem>
			<GridItem cols={1} align='middle' justify='center'>
				<Action onClick={onLogout} className='btn'>
					{intl.formatMessage(messages['randomQuotes.containers.preferences.logout'])}
				</Action>
			</GridItem>
		</Account>
	) : (
		<GridList cols={2} cellHeight='auto'>
			<GridItem>
				<Title>{intl.formatMessage(messages[`randomQuotes.containers.preferences.${category}`])}</Title>
			</GridItem>
			<GridItem justify='right' align='middle'>
				<Button
					label={intl.formatMessage(messages[`randomQuotes.containers.preferences.${category}`])}
					icon={<ContentAdd />}
					onClick={onSetShowDialog}
					sm
				/>
				{category === 'quotes' ? (
					<AddQuote
						openDialog={showDialog}
						onAdd={onAdd}
						onRequestClose={onCloseDialog}
					/>
				) : (
					<AddBackground
						openDialog={showDialog}
						onAdd={onAdd}
						onRequestClose={onCloseDialog}
					/>
				)}
			</GridItem>
		</GridList>
	)
)

Header.propTypes = {
	showDialog: PropTypes.bool.isRequired,
	category: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
	displayName: PropTypes.string,
	onSetShowDialog: PropTypes.func.isRequired,
	onCloseDialog: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
	intl: intlShape
}

export default injectIntl(Header)
