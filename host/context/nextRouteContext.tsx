import { ReactNode, createContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface RouteContextState {
  Link: any;
  route: any;
}

export const routeContext = createContext<RouteContextState>({
  Link: null,
  router: null,
});

function RouteContextProvider({
  children,
}: {
  children: ReactNode[] | ReactNode;
}) {
  const router = useRouter();

  return (
    <routeContext.Provider
      value={{
        Link: Link,
        router: router,
      }}
    >
      {children}
    </routeContext.Provider>
  );
}

export default RouteContextProvider;
