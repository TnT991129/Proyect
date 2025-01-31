export function Login() {
  return (
    <>
      <div className="flex flex-col flex-1 justify-center bg-secondary lg:px-12 py-12 min-h-screen">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="font-serif text-4xl text-center">Welcome</h1>          
        </div>

        <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block font-medium text-gray-900 text-sm/6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary outline outline-1 outline-gray-300"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block font-medium text-gray-900 text-sm/6">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-primary hover:text-gray-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 outline outline-1 outline-gray-300"
                />
              </div>
            </div>
            <div className="flex text-sm">
                <p>Lorem ipsum dolor sit amet.</p>
                <a href="/sigin" className="ml-2 font-semibold text-primary hover:text-gray-700">
                  Sign in
                </a>
                </div>
            <div>
              <button
                type="submit"
                className="flex justify-center bg-primary hover:bg-gray-700 drop-shadow-xl shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm/6 text-white duration-100 ease-in-out hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}










export default function LogIn(){
    return(
        <>
        <Login/>
        </>
    )
}