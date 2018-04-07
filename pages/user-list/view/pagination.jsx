import { FlatButton } from 'material-ui'

const paginateStyles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Verdana, Arial, sans-serif',
    justifyContent: 'center',
    margin: '0 auto'
  },
  button: {},
  status: {
    display: 'inline-block',
    textAlign: 'center',
    width: '150px'
  }
}

const Pagination = ({ userLength, offset, paginateUsers }) => (
  <div style={paginateStyles.root}>
    <FlatButton
      disabled={offset === 0}
      label='< Prev'
      onClick={(e) => { e.preventDefault(); paginateUsers(offset >= 20 ? offset - 20 : 0) }}
      primary
      style={paginateStyles.button}
    />
    <span style={paginateStyles.status}>
      { offset + 1 }&nbsp;-&nbsp;
      { offset + 20 > userLength ? userLength : offset + 20 }
      { ' ' } of { userLength }
    </span>
    <FlatButton
      disabled={offset + 20 >= userLength}
      label='Next >'
      onClick={(e) => { e.preventDefault(); paginateUsers(offset + 20) }}
      primary
      style={paginateStyles.button}
    />
  </div>
)

export default Pagination
