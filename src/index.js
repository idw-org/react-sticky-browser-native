import { Component } from 'react'

function featureTest( property, value, noPrefixes ) {
  var prop = property + ':',
      el = document.createElement( 'test' ),
      mStyle = el.style;
  
  if( !noPrefixes ) {
      mStyle.cssText = prop + [ '-webkit-', '-moz-', '-ms-', '-o-', '' ].join( value + ';' + prop ) + value + ';';
  } else {
      mStyle.cssText = prop + value;
  }    
  return mStyle[ property ];
}

class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: !!featureTest('position', 'sticky') ? 'sticky' : 'fixed'
    }
  }

  render() {
    style = {
      top: this.props.top
      , position: 'sticky'
    }

    return (
      <div style={ 
        position: this.state.position
        , top: this.props.top 
        }>
        { this.props.children }
        </div>
    )
  }
}

Sticky.defaultProps = {
  top: 1
}

export default Sticky