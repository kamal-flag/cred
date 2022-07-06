import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import PvDisplay from '../../../../components/App/Pv/PvDisplay';
import RetourButton from '../../../../components/UI/RetourButton';
import { URLS } from '../../../../config/urls';
import { getRequest } from '../../../../utils/http';

function PvPage() {
  const router = useRouter();
  const [pv, setPv] = useState<Pv>();
  const [loading, setLoading] = useState(false);
  const pvId = router.query.pvId || undefined;
  const entrepriseId = router.query.id || undefined;

  const fetchPv = async () => {
    setLoading(true);

    if (pvId) {
      const response: CustomHttpResponse = await getRequest(+pvId, URLS.PV);

      if (response.success) {
        setPv(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchPv();
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
            <RetourButton url={`/entreprise/${entrepriseId}/pv`} />
          </div>
          <PvDisplay pv={pv!} />
        </div>
      )}
    </>
  );
}

export default PvPage;
