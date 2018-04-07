import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { indigoA400 } from 'material-ui/styles/colors'

if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const muiTheme = {
  palette: {
    accent1Color: indigoA400
  }
}

class MaterialLayout extends React.Component {
  static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

    return { userAgent }
  }

  render() {
    const { userAgent } = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>
        { this.props.children }
      </MuiThemeProvider>
    )
  }
}

export default MaterialLayout
