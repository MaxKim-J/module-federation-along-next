window.remoteTodoEntryUrl =
  PROCESS.env.NODE_ENV === 'development' ? 'http://localhost:3002' : 'prodUrl';

import('./bootstrap');
