import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { GridList } from 'material-ui/GridList'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Button from 'components/Button'
import { GridItem, Title } from './HeaderStyles'
import messages from './messages'

const Header = ({ showQuotes }) => {
	const currentlyShowing =
		<FormattedMessage{...messages[`randomQuotes.containers.preferences.${showQuotes ? 'quotes' : 'photos'}`]} />
	return (
		<GridList cols={2} cellHeight='auto'>
			<GridItem>
				<Title>{currentlyShowing}</Title>
			</GridItem>
			<GridItem>
				<Button
					label={currentlyShowing}
					icon={<ContentAdd />}
					onClick={this.handleOpenDialog}
					sm
				/>
			</GridItem>
		</GridList>
	)
}

Header.propTypes = {
	showQuotes: PropTypes.bool.isRequired
}

export default Header
