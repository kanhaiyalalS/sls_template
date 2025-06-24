/*
* sample for test case
*/

import { } from '../commons';


jest.mock('uuid');

const UUID = '1234-abcd-5678-abcd';

describe('SharedCartHandler - Integration Tests', (): void => {
  beforeEach((): void => {
    jest.spyOn(uuid, 'v4').mockReturnValue(UUID);
  });

  afterEach((): void => {
    jest.resetAllMocks();
  });

  describe('SharedCartHandler - my test case', (): void => {
    it('Should create shared cart', async (): Promise<void> => {
      
      expect(result).toEqual(UUID);
    });

  });

});
