import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
// import component
import Layout from "../core/Layout"

const UserDashboard = ({ auth: { user, loading } }) => {
  const userLink = (
    <div className="card">
      <h4 className="card-header">User Links</h4>
      <ul className="list-group">
        <li className="list-group-item">
          <Link className="nav-link" to="/cart">
            My cart
          </Link>
        </li>
        <li className="list-group-item">
          <Link className="nav-link" to="/proile/update">
            Update Profile
          </Link>
        </li>
      </ul>
    </div>
  )

  const userInfo = () => {
    return (
      <div className="card mb-2">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{user.name}</li>
          <li className="list-group-item">{user.email}</li>
          <li className="list-group-item">
            {user.role === 0 ? "User" : "Admin"}
          </li>
        </ul>
      </div>
    )
  }
  const purchaseHistory = (
    <div className="card ">
      <h3 className="card-header">Purchase History</h3>
      <ul className="list-group">
        <li className="list-group-item">History</li>
      </ul>
    </div>
  )

  return (
    !loading && (
      <Fragment>
        <Layout
          title="Dashboard"
          description={`Good day ${user.name}`}
          className="container"
        ></Layout>
        <div className="row">
          <div className="col-3">{userLink}</div>
          <div className="col-9">
            {userInfo()}, {purchaseHistory}
          </div>
        </div>
      </Fragment>
    )
  )
}

UserDashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToPorps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToPorps)(UserDashboard)
