// External Dependancies
import React from 'react'
import { storiesOf } from '@storybook/react'

// Import Components
import ListContainer from '../components/list/ListContainer'

storiesOf('List Container', module)
  .add('100 000 Records', () => (
  <ListContainer itemheight={70} />
))
