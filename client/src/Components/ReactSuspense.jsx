// import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';

// Lazy load the component
const Cars = lazy(() => import('./Cars'));

export function ReactSuspense() {
  return (
    <div>
      <h1>React Suspense Example</h1>
      <Suspense fallback={<div>Loading Cars...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

