import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import { Loading } from './components/Loading.jsx';
import { NavBar } from './components/NavBar.jsx'


export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  return (
    < div className="min-h-screen bg-gray-100 dark:bg-gray-950" >
      <BrowserRouter>
        <Suspense
          fallback={
            <PageWithHeader>
              <Loading name="suspense" />
            </PageWithHeader>
          }
        >
          <NavBar className="" />
          <div className="h-full max-w-7xl mx-auto p-4 lg:p-16">
            <Router />
          </div>
          {/* Footer */}
        </Suspense>
      </BrowserRouter>
    </div >
  );
}