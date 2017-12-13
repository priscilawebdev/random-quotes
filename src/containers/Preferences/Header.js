import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { GridList } from 'material-ui/GridList'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Avatar from 'material-ui/Avatar'
import Button from 'components/Button'
import { Add as AddQuote } from 'containers/Quote/Add'
import { Add as AddBackground } from 'containers/Background/Add'
import { Account, GridItem, Title, User, Info, Action } from './HeaderStyles'
import messages from './messages'

const Header = ({ show, user, onLogout, onOpenDialog, openDialog, onAdd }) => (
	show === 'general' ? (
		<Account cols={6} cellHeight='auto'>
			<GridItem cols={5} align='middle' justify='left'>
				<User>
					<Avatar src={user.photoURL} />
					<Info>
						<p>{user.displayName}</p>
						<p>{user.email}</p>
					</Info>
				</User>
			</GridItem>
			<GridItem cols={1} align='middle' justify='center'>
				<Action onClick={onLogout}>
					<FormattedMessage{...messages['randomQuotes.containers.preferences.logout']} />
				</Action>
			</GridItem>
		</Account>
	) : (
		<GridList cols={2} cellHeight='auto'>
			<GridItem>
				<Title><FormattedMessage{...messages[`randomQuotes.containers.preferences.${show}`]} /></Title>
			</GridItem>
			<GridItem>
				<Button
					label={<FormattedMessage{...messages[`randomQuotes.containers.preferences.${show}`]} />}
					icon={<ContentAdd />}
					onClick={onOpenDialog}
					sm
				/>
				{show === 'quotes' ? (
					<AddQuote
						openDialog={openDialog}
						onRequestClose={onOpenDialog}
						onAdd={onAdd}
					/>
				) : (
					<AddBackground
						openDialog={openDialog}
						onRequestClose={onOpenDialog}
						onAdd={onAdd}
					/>
				)}
			</GridItem>
		</GridList>
	)
)

Header.propTypes = {
	show: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired,
	onLogout: PropTypes.func.isRequired,
	onOpenDialog: PropTypes.func.isRequired,
	onAdd: PropTypes.func.isRequired,
	openDialog: PropTypes.bool.isRequired
}

export default Header
