import { createHandler, database } from '../../app/services/apiUtils';
import { signUp } from '../../handlers/sign-up';
import { accessToken } from '../../handlers/access-token';
import { currentUser } from '../../handlers/current-user';
import {
  createSwarmpitStack,
  deleteSwarmpitStackByName,
  getSwarmpitStacks,
} from '../../handlers/swarmpit-api';

export const v1 = createHandler()
  .post('/auth/sign-up', signUp)
  .post('/auth/access-token', accessToken)
  .get('/auth/current-user', currentUser)
  .get('/swarmpit/stacks', getSwarmpitStacks)
  .post('/swarmpit/stacks/create', createSwarmpitStack)
  .delete('/swarmpit/stacks/delete', deleteSwarmpitStackByName);

export default createHandler().use(database).use('/api', v1);
