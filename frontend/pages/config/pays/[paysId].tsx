import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import BureauDouanierDisplay from '../../../components/App/Bureau/BureauDisplay';
import PaysDisplay from '../../../components/App/Pays/PaysDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function PaysPage() {
  const router = useRouter();
  const [pays, setPays] = useState<Pays>();
  const [loading, setLoading] = useState(false);
  const paysId = router.query.paysId || undefined;

  const fetchPays = async () => {
    setLoading(true);

    if (paysId) {
      const response: CustomHttpResponse = await getRequest(+paysId, URLS.PAYS);

      if (response.success) {
        setPays(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPays();
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
            <RetourButton url={`/config/pays`} />
          </div>
          <PaysDisplay pays={pays!} />
        </div>
      )}
    </>
  );
}

export default PaysPage;
