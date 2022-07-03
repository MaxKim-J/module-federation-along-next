import { lazy, Suspense } from 'react';
import type { NextPage } from 'next';
import { ClientSuspense } from '@max-mf/utils';

const TodoEntry = lazy(() => import('todo/Todo'));

const Todo: NextPage = () => {
  return (
    <>
      <h1>TODO</h1>
      <ClientSuspense fallback={<div>fallback</div>}>
        <TodoEntry />
      </ClientSuspense>
    </>
  );
};

export default Todo;
