import React from 'react'

const Signup = () => {
  return (
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form>
          <h2 className="text-center mb-4">Register</h2>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              className="form-control rounded-0"
              name="role"
            >
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="supplier">Supplier</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              placeholder="Enter Name"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100 mb-2">Register</button>
         
        </form>
      </div>
    </div>
  )
}

export default Signup
