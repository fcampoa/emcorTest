import { GlobalServiceMethodType } from './support/global-service-method-type.enum';

export const GLOBAL_SERVICE_DEFINITION: any = {
  users: {
    getAll: { method: GlobalServiceMethodType.GET, url: '/getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: '/' },
    doLogin: { method: GlobalServiceMethodType.POST, url: '/doLogin' },
    addUser: { method: GlobalServiceMethodType.POST, url: '/addUser' },
    updateUser: { method: GlobalServiceMethodType.POST, url: '/updateUser' },
    getUsersDto: { method: GlobalServiceMethodType.GET, url: '/getUsersDto' }
  },
};
