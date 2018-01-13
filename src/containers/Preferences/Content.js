import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import Divider from 'material-ui/Divider'
import { List } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import Icon from 'components/Icon'
import Img from 'components/Img'
import EmptyState from 'components/EmptyState'
import { grey400 } from 'material-ui/styles/colors'
import messages from './messages'
import { LItem, PrimaryText } from './ContentStyles'

const iconButtonElement = (
	<IconButton
		touch
		tooltip='more'
		tooltipPosition='bottom-left'
	>
		<MoreVertIcon color={grey400} />
	</IconButton>
)

const rightIconMenu = func => (
	<IconMenu iconButtonElement={iconButtonElement}>
		<MenuItem onClick={func}>
			<FormattedMessage {...messages['randomQuotes.containers.preferences.delete']} />
		</MenuItem>
	</IconMenu>
)

const getExtractQuoteContent = (onRemove, content) => (
	content.length > 0 ? (
		<GridList cols={1} cellHeight='auto'>
			<GridTile>
				<List>
					{content.map(quote => (
						<div key={quote.id}>
							<Divider />
							<LItem
								primaryText={
									<PrimaryText>
										<span>{`${quote.description}.`}</span>
										<FormattedMessage
											{...messages['randomQuotes.containers.preferences.author']}
											values={{ author: quote.author.toLowerCase() }}
										/>
									</PrimaryText>
								}
								rightIconButton={rightIconMenu(() => onRemove(quote.id))}
							/>
							<Divider />
						</div>
					))}
				</List>
			</GridTile>
		</GridList>
	) : (
		<EmptyState
			heading={(
				<FormattedMessage {...messages['randomQuotes.containers.preferences.createFirstQuote']} />
			)}
		/>
	)
)

const getExtractBackgroundContent = (onRemove, content) => (
	content.length > 0 ? (
		<GridList cols={2} cellHeight={130}>
			{content.map(background => (
				<GridTile
					key={background.id}
					title={background.name}
					subtitle={
						<FormattedMessage
							{...messages['randomQuotes.containers.preferences.by']}
							values={{ who: background.by }}
						/>
					}
					actionIcon={
						<IconButton onClick={() => onRemove(background.id)} className='btn'>
							<span className='btn'>
								<Icon
									name='garbage'
									cursor='pointer'
									sm
								/>
							</span>
						</IconButton>
					}
				>
					<Img url={background.url} />
				</GridTile>
			))}
		</GridList>
	) : (
		<EmptyState
			heading={(
				<FormattedMessage {...messages['randomQuotes.containers.preferences.addFirstBackgrounds']} />
			)}
		/>
	)
)

const Content = ({ category, content, onRemove }) => (
	category === 'quotes' ? (
		getExtractQuoteContent(onRemove, content)
	) : (
		getExtractBackgroundContent(onRemove, content)
	)
)

Content.propTypes = {
	category: PropTypes.string.isRequired,
	content: PropTypes.array.isRequired,
	onRemove: PropTypes.func.isRequired
}

export default Content
