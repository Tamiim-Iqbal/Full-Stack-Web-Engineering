import { use } from 'react';
import { UserContext } from '../Contexts/UserContext';

const useUser = () => {
    const user = use(UserContext);
    return user;
}

export default useUser;