import './SimpleBox.scss'

interface Props {
  name: string;
  passwd: string;
  handleChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangePasswd: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SimpleBox = (props: Props) => {
  return(
    <div>
      <div className="title--box">
        <p className="mt-10 mb-5 text-center font-serif 
          text-3xl font-bold">
          Login
        </p>

        <div className="w-60 mx-auto bg-violet-800
          rounded-lg p-4 shadow-[0px_0px_60px_4px_rgba(255,0,255,0.56)]">
          <form
            className="flex flex-col mx-auto w-48"
            onSubmit={props.handleSubmit}
          >

            <label htmlFor="usr">Username</label>
            <input
              className="p-1 w-48 text-cyan-900"
              type="text"
              data-testid="usrname-input"
              id="usr"
              name="usr"
              value={props.name}
              onChange={props.handleChangeName}
              placeholder="username"
              autoComplete="off"
            />

            <label htmlFor="passwd">Password</label>
            <input
              className="p-1 w-48 text-cyan-900"
              type="password"
              data-testid="inputid"
              id="password"
              name="password"
              value={props.passwd}
              onChange={props.handleChangePasswd}
              placeholder="password"
            />
            <button data-testid='Button' type="submit" className="inline-block px-6 py-2.5
              mt-6 bg-blue-600 text-white font-medium text-xs leading-tight
              uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg
              focus:bg-blue-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-blue-800 active:shadow-lg transition 
              duration-150 ease-in-out">
              Enter
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default SimpleBox;