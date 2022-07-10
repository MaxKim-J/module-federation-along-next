import { lazy } from 'react';
import type { NextPage } from 'next';
import { ClientSuspense } from '@max-mf/utils';
import { useRouter } from 'next/router';
import Link from 'next/link';

const TodoEntry = lazy(() => import('todo/Todo'));

const Todo: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <h1>TODO</h1>
      <ClientSuspense fallback={<div>fallback</div>}>
        <TodoEntry router={router} Link={Link} />
      </ClientSuspense>
    </>
  );
};

export default Todo;
