import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AssuranceDisplay from '../../../components/App/Assurance/AssuranceDisplay';
import UserDisplay from '../../../components/App/User/UserDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function UserPage() {
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);
  const userId = router.query.userId || undefined;

  const fetchUser = async () => {
    setLoading(true);

    if (userId) {
      const response: CustomHttpResponse = await getRequest(+userId, URLS.USER);

      if (response.success) {
        setUser(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader color={'#000'} size={150} />
        </div>
      ) : (
        <div>
          <div className="flex">
            <RetourButton url={`/admin/user`} />
          </div>
          <UserDisplay user={user!} />
        </div>
      )}
    </>
  );
}

export default UserPage;
