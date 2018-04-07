import { Card, CardHeader, CardText, CardTitle, Dialog, FlatButton } from 'material-ui'
import { capitalize, humanFormatDateTime } from 'util/format-helpers'

const detailStyles = {
  card: {
    margin: '0 auto',
    maxWidth: '580px'
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '1.2em'
  },
  definition: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 0 5px 0',
    padding: 0
  },
  text: {
  }
}

const locationStyles = {
  textAlign: 'right'
}

const UserDetail = ({ details={}, handleClose }) => {
  const { id, location, login, name, picture, ...fields } = details || {}

  return (
    <Dialog
      actions={[
        <FlatButton
          label='Close'
          onClick={handleClose}
          primary
        />
      ]}
      onRequestClose={handleClose}
      open={!!details}
      title='User Details:'>
      <Card style={detailStyles.card}>
        <CardHeader
          avatar={details && details.picture && details.picture.medium}
          style={detailStyles.header}
          title={`${name && capitalize(name.first || '')} ${ name && capitalize(name.last || '' )}`}
        />
        <CardText style={detailStyles.text}>
          <dl style={detailStyles.definition}>
            <dt>ID:</dt>
            <dd>{id && id.value || '-'}</dd>
          </dl>
          <dl style={detailStyles.definition}>
            <dt>Location:</dt>
            <dd style={locationStyles}>{ location && capitalize(Object.values(location || {}).join(' ')) || '' }</dd>
          </dl>
          {fields && Object.keys(fields).map(key => {
            const value = fields[key] && !isNaN(Date.parse(fields[key]))
              ? humanFormatDateTime(fields[key])
              : fields[key]
            return (
              <dl key={`${details.email}-${key}`} style={detailStyles.definition}>
                <dt>{ capitalize(key) }:</dt>
                <dd>{ value || '-'}</dd>
              </dl>
            )
          })}
        </CardText>
      </Card>
    </Dialog>
  )
}

export default UserDetail
