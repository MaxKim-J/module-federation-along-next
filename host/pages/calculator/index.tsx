import { lazy, Suspense } from 'react';
import type { NextPage } from 'next';
import { ClientSuspense } from '@max-mf/utils';

const CalculatorEntry = lazy(() => import('calculator/Calculator'));

const Todo: NextPage = () => {
  return (
    <>
      <h1>Calculator</h1>
      <ClientSuspense fallback={<div>fallback</div>}>
        <CalculatorEntry />
      </ClientSuspense>
    </>
  );
};

export default Todo;
