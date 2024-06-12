import React from 'react'

const Login = () => {
    return (
        <>
            <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/14db4679-e946-46ab-a96a-9285864a1422/LK-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg')] md:h-[95vh] h-[70vh] bg-cover bg-center relative">
                <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign In</h5>
                        <div>
                            <input type="email" autoComplete="" name="email" id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="E-mail" required/>
                        </div>
                        <div>
                            <input type="password" autoComplete="" name="password" id="password" placeholder="Password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>

                        <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Log In </button>

                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input autoComplete="" id="remember" type="checkbox" value=""
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                </div>
                                <label htmlFor="remember"
                                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <button className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
                                Need help
                            </button>
                        </div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            New to Netflix
                            <button className="text-blue-700 hover:underline dark:text-blue-500">
                                Sign up Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login