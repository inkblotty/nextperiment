import { CircularProgress, GridTile, RaisedButton, Subheader } from 'material-ui'

import UserDetails from 'components/user-details'
import ErrorDisplay from 'components/error-display'
import MaterialLayout from 'components/material-layout'
import Pagination from './pagination'
import { capitalize } from 'util/format-helpers'

const gridStyles = {
  list: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: 'Verdana, Arial, sans-serif',
    maxHeight: '80vh',
    maxWidth: '1000px',
    justifyContent: 'center',
    margin: '0 auto',
    overflowY: 'scroll',
    padding: '0',
    width: '95%'
  },
  listItem: {
    listStyleType: 'none',
    padding: 0
  },
  tile: {
    fontFamily: 'Verdana, Arial, sans-serif',
    height: '200px',
    width: '200px'
  }
}

const subheaderStyles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Verdana, Arial, sans-serif',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '1000px',
    padding: 0
  },
  button: {
    display: 'flex',
    fontSize: '24px',
    height: '36px'
  }
}

const UserList = ({ activeUser, allUsers, closeUser, error, getNewUsers, loading, offset, openUser, paginateUsers }) => {
  const viewingUsers = allUsers.slice(offset, offset + 20)
  return (
    <MaterialLayout>
      <Subheader style={subheaderStyles.root}>
        <h1>Current Users</h1>
        <RaisedButton
          label='Generate New User Set'
          onClick={getNewUsers}
          primary
          style={subheaderStyles.button}
        />
      </Subheader>
      { error
        ? <ErrorDisplay message={error.toString()} />
        : (<div style={{height: '80vh'}}>
            <ul style={gridStyles.list}>
              {loading
                ? <CircularProgress />
                : (viewingUsers.map(user => {
                    const { email, name, picture } = user
                    return (
                      <a href='#' onClick={(e) => openUser(e, email)} key={email}>
                        <li style={gridStyles.listItem}>
                          <GridTile
                            style={gridStyles.tile}
                            title={`${name && capitalize(name.first || '')} ${ name && capitalize(name.last || '' )}`}
                          >
                              <img src={picture.large} alt={`${name.first} ${name.last} profile image`} />
                          </GridTile>
                        </li>
                      </a>
                    )
                  })
                )
              }
            </ul>
          </div>)
      }
      <Pagination
        offset={offset}
        paginateUsers={paginateUsers}
        userLength={allUsers.length}
      />
      <UserDetails
        details={activeUser}
        handleClose={closeUser}
      />
    </MaterialLayout>
  )
}

export default UserList
