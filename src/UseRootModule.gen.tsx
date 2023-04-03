/* TypeScript file generated from UseRootModule.res by genType. */
/* eslint-disable import/first */


import {useAuthState as useAuthStateNotChecked} from 'react-firebase-hooks/auth';

// In case of type error, check the type of 'useAuthState' in 'UseRootModule.re' and 'react-firebase-hooks/auth'.
export const useAuthStateTypeChecked: (_1:string) => [Null_t<string>, boolean, (undefined | Error_t)] = useAuthStateNotChecked;

// Export 'useAuthState' early to allow circular import from the '.bs.js' file.
export const useAuthState: unknown = useAuthStateTypeChecked as (_1:string) => [Null_t<string>, boolean, (undefined | Error_t)];

import type {t as Error_t} from './Error.gen';

import type {t as Null_t} from './Null.gen';
