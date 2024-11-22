import {ContextType, useContext} from 'react';
import {GetPublicContext} from '../store/context';

export function useGetDndContext() {
  return useContext(GetPublicContext);
}

export type UseGetDndContextReturnValue = ContextType<typeof GetPublicContext>;
