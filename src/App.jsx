import { useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './general/Router.jsx';
import { Loading } from './components/Loading.jsx';
import { NavBar } from './components/NavBar.jsx'
import { Footer } from './components/Footer.jsx';

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => {
  const [scrollId, setScrollId] = useState("top");

  const updateScrollId = (id) => {
    setScrollId(id);
    console.log(id)
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950" >
      <BrowserRouter>
        <Suspense
          fallback={
            <PageWithHeader>
              <Loading name="suspense" />
            </PageWithHeader>
          }
        >
          <NavBar updateScrollId={updateScrollId} />
          <div className="h-full max-w-7xl mx-auto p-4 sm:p-8 lg:p-16 pt-0 sm:pt-0 lg:pt-0">
            <Router scrollId={scrollId} />
          </div>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div >
  );
}