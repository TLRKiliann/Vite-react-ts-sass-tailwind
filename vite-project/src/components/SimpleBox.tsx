import './SimpleBox.scss'

const SimpleBox = () => {
  return(
    <div>
      <div className="title--box">
        <p className="mt-10 mb-5 text-center font-serif 
          text-3xl font-bold">
          Login
        </p>

        <div className="w-60 py-8 mx-auto bg-violet-800 rounded-xl">
          <form className="flex flex-col mx-auto w-48">

            <label htmlFor="usr">Username</label>
            <input
              className="p-1 w-48"
              type="text"
              id="usr"
              name="usr"
              placeholder="username"
              autoComplete="off"
            />
            
            <label htmlFor="email">Email</label>
            <input
              className="p-1 w-48"
              type="email"
              id="email"
              name="email"
              placeholder="email"
            />

            <label htmlFor="passwd">Password</label>
            <input
              className="p-1 w-48"
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />

          </form>
        </div>
      </div>
    </div>
  )
}

export default SimpleBox;