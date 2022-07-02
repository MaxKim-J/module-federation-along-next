import { useState, useEffect, Suspense } from 'react';

function ClientSuspense({
  fallback,
  children,
}: ComponentProps<typeof Suspense>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <Suspense fallback={fallback}>{children}</Suspense>;
  }

  return <>{fallback}</>;
}

export default ClientSuspense;
