// @os-block UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper
import { useLayoutEffect, useRef } from 'react';
import { OSBlock } from '@/components/ui/os/OSBlock';
import { CacheControl_UserInfo } from '../../UBTConnect_Utils/CacheControl_UserInfo';
import { getUserInformation_Wrapper_Assign } from '../lib/actions';
import type { CacheControl_UserInformation, Directory_UserCurrent } from './types';

export interface CacheControl_UserInfo_WrapperProps {
  /** OutSystems instance id of the block. */
  id?: string;
  /** Event Result(UserInformation): the Directory_UserCurrent of the cached user information. */
  onResult?: (userInformation: Directory_UserCurrent) => void;
}

/** CacheControl_UserInfo whose Result runs GetUserInformation_Wrapper_Assign (App_Policies_HasPolicyToAccept) and
    raises Result with Directory_UserCurrent (p:UBTConnect.App_Cache.CacheControl_UserInfo_Wrapper.mvc.js:185-230). */
export function CacheControl_UserInfo_Wrapper({ id, onResult }: CacheControl_UserInfo_WrapperProps) {
  const latest = useRef(onResult);
  useLayoutEffect(() => {
    latest.current = onResult;
  });
  const onUserInfoResult = (response: CacheControl_UserInformation) => {
    getUserInformation_Wrapper_Assign(response);
    latest.current?.(response.Directory_UserCurrent);
  };
  return (
    <OSBlock name="App_Cache.CacheControl_UserInfo_Wrapper" id={id}>
      <CacheControl_UserInfo onResult={onUserInfoResult} />
    </OSBlock>
  );
}
