import * as fromDepartment from './department.actions';

describe('departmentDepartments', () => {
  it('should return an action', () => {
    expect(fromDepartment.departmentDepartments().type).toBe('[Department] Department Departments');
  });
});
