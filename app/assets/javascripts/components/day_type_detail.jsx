class DayTypeDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: this.props.isActive
    }
  }

  render() {
    var pictureStyle = {
      background: 'url(' + this.props.image + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    };

    var componentClasses = classNames({
      'day-type-detail hidden-xs': true,
      'is-active': this.props.isActive
    })

    if (this.props.isActive) {
      return(
      <div className={componentClasses} style={pictureStyle} />
    )
    } else {
      return <div/>
    }
  }
}
