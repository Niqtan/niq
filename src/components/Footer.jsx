export default function Footer() {
    return (
        <footer className="relative text-[#39FF14] font-vt323 min-h-screen flex flex-col items-center justify-center">
            <div>
                <h1 className="text-5xl mb-2">What else do you want to know about me?</h1>
                <div>
                    <p>I would love to hear from you! Feel free to reach out to my</p>
                    <div className="mt-5 flex  items-center justify-center">
                    <span>
                    <a href="mailto:niqban123@gmail.com?subject=Hello&body=I%20want%20to%20connect%20with%20you" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-red-600 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            width="48" height="48" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                        </svg>
                    </a>
                    Gmail
                    </span>

                        <span className="ml-5 mr-5">
                        <a href="https://www.instagram.com/niqtan.mp4/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 flex flex-col items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0-2A7.5 7.5 0 0 0 0 7.5v9A7.5 7.5 0 0 0 7.5 24h9A7.5 7.5 0 0 0 24 16.5v-9A7.5 7.5 0 0 0 16.5 0h-9z"/>
                            <path d="M12 6.8A5.2 5.2 0 1 0 17.2 12 5.2 5.2 0 0 0 12 6.8zm0 8.6A3.4 3.4 0 1 1 15.4 12 3.4 3.4 0 0 1 12 15.4zM18.5 5.5a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1z"/>
                            </svg>
                        </a>
                        Instagram (Casual chats!)
                        </span>

                        <span> 
                        <a href="https://www.linkedin.com/in/niqsuguitan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 flex flex-col items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.1c.5-1 1.9-2.2 3.9-2.2 4.2 0 5 2.8 5 6.5V24h-4v-7.8c0-1.9 0-4.4-2.7-4.4s-3.1 2.1-3.1 4.2V24h-4V8z"/>
                            </svg>
                        </a>
                        Linkedin
                        </span>
                </div>
                </div>
        </div>
        </footer>
    )
}