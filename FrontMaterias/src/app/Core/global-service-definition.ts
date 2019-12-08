import * as VERBS from './support/VERBS';
export interface IGlobalServiceDefinition {
  users?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    doLogin: () => VERBS.IpostCall;
    addUser: () => VERBS.IpostCall;
    updateUser: () => VERBS.IpostCall;
    getUsersDto: () => VERBS.IGetCall;
  };
}
