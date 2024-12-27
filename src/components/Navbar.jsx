import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        const scrollToTop = () => {
            window.scrollTo(0, 0);
        };

        return (
            <div>
                <nav className="bg-gray-200 shadow shadow-gray-300 w-full z-50 px-8 md:px-auto">
                    <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                        <div className="text-indigo-500 md:order-1 w-40">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sky-news-logo.png/1200px-Sky-news-logo.png" alt="" />
                        </div>
                        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                            <ul className="flex font-semibold justify-between">
                                <li className="md:px-4 md:py-2 text-sm text-indigo-500"><Link to="/general">General</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/entertainment">Entertainment</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/business">Business</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/health">Health</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/science">Science</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/sports">Sports</Link></li>
                                <li className="md:px-4 md:py-2 text-sm hover:text-indigo-400"><Link to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                        <div className="order-2 md:order-3">
                            <button className="px-4 py-2 bg-red-600 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>Login</span>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="gotoTop">
                    <span onClick={scrollToTop} className="cursor-pointer z-50 rounded-full w-10 h-10 flex justify-center items-center text-white bg-red-700 fixed bottom-2 right-5">↑</span>
                </div>
            </div>
        )
    }
}
export default Navbar;