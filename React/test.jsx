// Recommended approach using callback refs over findDOMNode().
class MyComponent extends Component {
    componentDidMount() {
      this.node.scrollIntoView()
    }
  
    render() {
      return <div ref={node => (this.node = node)} />
    }
  }