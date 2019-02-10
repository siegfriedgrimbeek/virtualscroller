// External Dependancies
import React from 'react'
import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <div className="item" style={{top: props.top, height: props.itemheight}} title={`id: ${props.id}`}>
      <img src="https://via.placeholder.com/50" alt="avatar"/>
      <div className="name-field">
        <span className="list-header">{`${props.name}`}</span>
        <span>Extrodinary Gentleman</span>
      </div>
      <div className="contact-field">
        <span><a href={`mailto:${props.email}`}>{`${props.email}`}</a></span>
      </div>
    </div>
  )
}

ListItem.displayName = 'List Item'

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  itemheight: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

export default ListItem
