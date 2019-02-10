// External Dependancies
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Import Components
import ListContainer from '../components/ListContainer'

storiesOf('List Container', module)
  .add('500 000 Records', () => (
  <ListContainer itemheight={70} onScroll={action('scrolled')} />
));
