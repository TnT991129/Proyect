export function SignIn() {
  return (
    <>
      <div className="flex flex-col flex-1 justify-center bg-secondary px-6 lg:px-8 py-12 min-h-screen">
        <div className="sm:mx-auto mt-10 sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div className="min-w-full text-center">
              <h1 className="font-serif text-4xl">Register</h1>
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-900 text-sm/6">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Correo electronico"
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
                  <a href="#" className="font-semibold text-primary hover:text-primary">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Escriba su contraseña"
                  required
                  autoComplete="current-password"
                  className="block bg-white px-3 py-1.5 rounded-md w-full text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 -outline-offset-1 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 outline outline-1 outline-gray-300"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex justify-center bg-primary hover:bg-gray-700 shadow-sm px-3 py-1.5 rounded-md w-full font-semibold text-sm/6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}










export default function Sign(){
    return(
        <>
        <SignIn/>
        </>
    )
}