import { createHandler, database } from '../../app/services/apiUtils';
import { signUp } from '../../handlers/sign-up';
import { accessToken } from '../../handlers/access-token';
import { currentUser } from '../../handlers/current-user';

export const v1 = createHandler().post('/auth/sign-up', signUp).post('/auth/access-token', accessToken).get('/auth/current-user', currentUser);

export default createHandler().use(database).use('/api', v1);
