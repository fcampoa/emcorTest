import { GlobalServiceMethodType } from './support/global-service-method-type.enum';

export const GLOBAL_SERVICE_DEFINITION: any = {
  teacher: {
    getAll: { method: GlobalServiceMethodType.GET, url: 'getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: 'getById' },
    addTeacher: { method: GlobalServiceMethodType.POST, url: 'addTeacher' },
    updateTeacher: { method: GlobalServiceMethodType.PUT, url: 'updateTeacher' }
  },
  student: {
    getAll: { method: GlobalServiceMethodType.GET, url: 'getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: 'getById' },
    addStudent: { method: GlobalServiceMethodType.POST, url: 'addStudent' },
    updateStudent: { method: GlobalServiceMethodType.PUT, url: 'updateStudent' }
  },
  subject: {
    getAll: { method: GlobalServiceMethodType.GET, url: 'getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: 'getById' },
    addSubject: { method: GlobalServiceMethodType.POST, url: 'addSubject' },
    updateSubject: { method: GlobalServiceMethodType.PUT, url: 'updateSubject' }
  },
  group: {
    getAll: { method: GlobalServiceMethodType.GET, url: 'getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: 'getById' },
    addGroup: { method: GlobalServiceMethodType.POST, url: 'addGroup' },
    updateGroup: { method: GlobalServiceMethodType.POST, url: 'updateGroup' },
    getBySubject: { method: GlobalServiceMethodType.GET, url: 'getBySubject/$id'}
  },
  groupDetail: {
    getAll: { method: GlobalServiceMethodType.GET, url: 'getAll' },
    getById: { method: GlobalServiceMethodType.GET_BY_ID, url: 'getById' },
    addDetail: { method: GlobalServiceMethodType.POST, url: 'addDetail' },
    updateDetail: { method: GlobalServiceMethodType.POST, url: 'updateDetail' },
    getByGroup: { method: GlobalServiceMethodType.GET, url: 'getByGroup/$id' },
    addRange: { method: GlobalServiceMethodType.POST, url: 'addRange' },
    deleteDetail: { method: GlobalServiceMethodType.PUT, url: 'deleteDetail' }
  }
};
