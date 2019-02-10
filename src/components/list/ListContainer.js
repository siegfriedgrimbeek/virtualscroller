// External Dependancies
import React, {Component} from 'react'

// Internal Dependancies
import fakeData from '../../helpers/seedData'

// Import Components
import ListItem from './ListItem'
import './list.css'

// Generate Fake Data
const data = fakeData(500000)

class ListContainer extends Component {
  constructor(props) {
    super(props)

    // Set initial state
    this.state = {
      start: 0,
      end: 0,
      numVisibleItems: 0
    }

    this.containerStyle = {
      height: data.length * this.props.itemheight
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    const height = document.getElementById('list-container').clientHeight
    const itemCount = Math.trunc(height / this.props.itemheight)

    this.setState({
      height,
      end: itemCount,
      numVisibleItems: itemCount
    })
    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    const height = document.getElementById('list-container').clientHeight
    const scrollTop = document.getElementById('list-container').scrollTop
    const itemCount = Math.trunc(height / this.props.itemheight)
    let index = Math.trunc(scrollTop / this.props.itemheight)
    index = index - this.state.numVisibleItems >= data.length ? index - this.state.numVisibleItems : index

    this.setState({
      height,
      end: index + this.state.numVisibleItems >= data.length ? data.length - 1 : index + this.state.numVisibleItems,
      numVisibleItems: itemCount
    })
  }

  handleScroll() {
    const scrollTop = document.getElementById('list-container').scrollTop;
    let index = Math.trunc(scrollTop / this.props.itemheight)

    index = index - this.state.numVisibleItems >= data.length ? index - this.state.numVisibleItems : index

    if (index !== this.state.start) {
      this.setState({
        start: index,
        end: index + this.state.numVisibleItems >= data.length ? data.length - 1 : index + this.state.numVisibleItems
      })
    }
  }

  renderRows() {
    let result = []
    for (let i = this.state.start; i <= this.state.end; i++) {
      let listItem = data[i]
      result.push(
        <ListItem
          key={i}
          id={i + 1}
          name={listItem.name}
          email={listItem.email}
          top={i * this.props.itemheight}
          itemheight={this.props.itemheight}
        />
      )
    }
    return result
  }

  render() {
    return (<div className="list-container" id="list-container" onScroll={this.handleScroll}>
      <div className="itemContainer" style={this.containerStyle}>
        {this.renderRows()}
      </div>
    </div>)
  }
}

export default ListContainer
