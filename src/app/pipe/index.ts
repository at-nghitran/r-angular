import { checkPhonePipe } from './checkPhone/checkPhone.pipe';
import { CheckPositionPipe } from './checkPosition/check-position.pipe';
import { CheckEmployeeTypePipe } from './checkType/check-employee-type.pipe';
import { GetlistsamepositionPipe } from './getlistsameposition/getlistsameposition.pipe';

export const Pipes = [
  checkPhonePipe,
  CheckPositionPipe,
  CheckEmployeeTypePipe,
  GetlistsamepositionPipe
]
