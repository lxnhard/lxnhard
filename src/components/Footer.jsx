
import { Link } from 'react-router-dom';

export const Footer = () => {

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 text-gray-900 dark:text-gray-300 ">
      <div className=" flex justify-between max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-4">
        <div className="inline-block">© 2023, Leonhard Link</div>
        <div className="inline-block ">
          <Link to="/impressum" title="Impressum – legal notice">
            Impressum
          </Link>
        </div>
      </div>
    </div>
  )
}