import React from 'react'
import PropTypes from 'prop-types'

const Screen = ({ children }) => (
	<div className='Screen'>
		{children}
	</div>
)

Screen.propTypes = {
	children: PropTypes.node.isRequired
}


export default Screen
