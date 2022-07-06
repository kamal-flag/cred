import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AssocieDisplay from '../../../components/App/Associe/AssocieDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function AssurancePage() {
  const router = useRouter();
  const [associe, setAssocie] = useState<AssocieGerant>();
  const [loading, setLoading] = useState(false);
  const associeId = router.query.associeId || undefined;

  const fetchAssocie = async () => {
    setLoading(true);

    if (associeId) {
      const response: CustomHttpResponse = await getRequest(
        +associeId,
        URLS.ASSOCIE
      );

      if (response.success) {
        setAssocie(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAssocie();
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
            <RetourButton url={`/config/associe`} />
          </div>
          <AssocieDisplay associe={associe!} />
        </div>
      )}
    </>
  );
}

export default AssurancePage;
