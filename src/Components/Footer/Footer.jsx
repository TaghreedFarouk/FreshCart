import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
<footer className="bg-gray-100 font-sans dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-wrap sm:flex-nowrap flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="google-play-badge-logo" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="download-on-the-app-store-apple-logo" />
            </div>
               
            <div className="flex flex-wrap sm:flex-nowrap gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
            </div>
        </div>
        <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 dark:text-white">© 2024 by Taghreed KHarboush. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}
