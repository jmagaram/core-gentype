/* TypeScript file generated from Experiment.res by genType. */
/* eslint-disable import/first */


import {useAuthState as useAuthStateNotChecked} from 'react-firebase-hooks/auth';

// In case of type error, check the type of 'useAuthState' in 'Experiment.re' and 'react-firebase-hooks/auth'.
export const useAuthStateTypeChecked: (_1:string) => [Core__Null_t<string>, boolean, (undefined | Core__Error_t)] = useAuthStateNotChecked;

// Export 'useAuthState' early to allow circular import from the '.bs.js' file.
export const useAuthState: unknown = useAuthStateTypeChecked as (_1:string) => [Core__Null_t<string>, boolean, (undefined | Core__Error_t)];

import type {t as Core__Error_t} from '@rescript/core/src/Core__Error.gen';

import type {t as Core__Null_t} from '@rescript/core/src/Core__Null.gen';
