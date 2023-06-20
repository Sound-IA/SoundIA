import React from 'react'

function MainJoin() {
  return (
   
  <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <div className="lg:text-left">
        <h1 className="text-5xl font-bold">Join the fun.</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name:</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" />
          <label className="label">
          </label>
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input type="text" placeholder="" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="" className="input input-bordered" />
            <label className="label">
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn button-hover">Join Now</button>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default MainJoin
