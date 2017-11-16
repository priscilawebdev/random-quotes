import React from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui/GridList'
import Divider from 'material-ui/Divider'
import { List, ListItem } from 'material-ui/List'
import { white, grey400 } from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

import Icon from 'components/Icon'
import { Img } from './styles'
import messages from './messages'

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
		<MenuItem onClick={func}><FormattedMessage {...messages.delete} /></MenuItem>
	</IconMenu>
)

const Content = ({ showQuotes, quotes, backgrounds, deleteData }) => (
	showQuotes ? (
		<GridList
			style={{ maxHeight: 355, minHeight: 355, margin: 0 }}
			padding={0}
			cols={1}
			cellHeight='auto'
		>
			<GridTile cols={1}>
				<List style={{ paddingRight: 11, paddingLeft: 11, height: '100%', overflowY: 'auto' }}>
					{	quotes.map(quote => (
						<div key={quote.key}>
							<Divider />
							<ListItem
								primaryText={
									<div>
										<span>{quote.description}</span>
										<b style={{ color: grey400, textTransform: 'capitalize' }}>
											{` .“${quote.author.toLowerCase()}”`}
										</b>
									</div>
								}
								rightIconButton={rightIconMenu(() => deleteData('quotes', quote))}
								style={{ color: white, fontSize: 13 }}
							/>
							<Divider />
						</div>
					))}
				</List>
			</GridTile>
		</GridList>
	) : (
		<GridList
			style={{ maxHeight: 355, height: 'auto', marginRight: 10, marginLeft: 10, overflowY: 'auto' }}
			cols={3}
			cellHeight={130}
		>
			{backgrounds.map(background => (
				<GridTile
					key={background.key}
					title={background.name}
					actionIcon={
						<Icon
							name='garbage'
							customSize={20}
							cursor='pointer'
							onClick={() => deleteData('backgrounds', background)}
						/>
					}
				>
					<Img url={background.url} borderRadius={2} />
				</GridTile>
			))}
		</GridList>
	)
)

Content.propTypes = {
	showQuotes: PropTypes.bool.isRequired,
	backgrounds: PropTypes.array.isRequired,
	deleteData: PropTypes.func.isRequired,
	quotes: PropTypes.array.isRequired
}

export default Content
