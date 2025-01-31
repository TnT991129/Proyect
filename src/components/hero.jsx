import mujer from '../assets/Mujer.svg'
export default function Hero() {

  return <div className="bg-secondary">
      <div className="relative">
        <div className="mx-auto max-w-7xl min-h-screen">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" className="lg:block right-8 absolute inset-y-0 hidden bg-gradient-to-r from-secondary to-transparent w-82 h-screen transform translate-x-1/2 fill-secondary">
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 lg:px-8 py-32 sm:py-40 lg:py-56 lg:pr-0">
              <div className="mx-auto lg:mx-0 max-w-2xl lg:max-w-2xl">
                <div className="sm:flex hidden sm:mb-10" />
                <h1 className="opacity-0 drop-shadow-xl font-semibold text-5xl text-pretty text-primary sm:text-7xl tracking-tight animate-bounceXl">
                  Quantum Marketing
                </h1>
                <p className="opacity-0 drop-shadow-2xl mt-8 font-medium text-lg text-pretty text-white sm:text-xl/8 animate-bounceXls">
                  Drive your company with cutting-edge digital marketing
                  strategies and next-generation technology
                </p>
                <div className="flex items-center gap-x-6 opacity-0 mt-10 animate-bounceXlss">
                  <a href="#" className="bg-primary hover:bg-white shadow-sm hover:drop-shadow-xl px-3.5 py-2.5 rounded-md font-bold text-secondary text-sm duration-100 ease-in-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:right-0 lg:absolute lg:inset-y-0 bg-primary lg:w-1/2 animate-bounceXr duration-100">
          <div className="z-0 bg-red-300 rounded-full w-56 lg:w-1/2" />
          <img src={mujer} alt="" className="max-lg:top-60 z-10 absolute mt-60 ml-20 w-2/3 transition-colors animate-bounceXs" />
        </div>
      </div>
    </div>;
}
