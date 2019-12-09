import { GroupDetail } from './../model/group-detail';
import * as VERBS from './support/VERBS';
export interface IGlobalServiceDefinition {
  teacher?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    addTeacher: () => VERBS.IpostCall;
    updateTeacher: () => VERBS.IpostCall;
  };
  student?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    addStudent: () => VERBS.IpostCall;
    updateStudent: () => VERBS.IpostCall;
  };
  subject?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    addSubject: () => VERBS.IpostCall;
    updateSubject: () => VERBS.IpostCall;
  };
  group?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    addGroup: () => VERBS.IpostCall;
    updateGroup: () => VERBS.IpostCall;
    getBySubject: (id: number) => VERBS.IGetCall;
  };
  groupDetail?: {
    getAll: () => VERBS.IGetCall;
    getById: () => VERBS.IGetByIdCall;
    addDetail: () => VERBS.IpostCall;
    updateDetail: () => VERBS.IpostCall;
    getByGroup: (id: number) => VERBS.IGetCall;
    addRange: () => VERBS.IpostCall;
    deleteDetail: () => VERBS.IPutCall;
  };
}
