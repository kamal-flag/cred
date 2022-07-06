import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AssuranceDisplay from '../../../components/App/Assurance/AssuranceDisplay';
import DonneurOrdreDisplay from '../../../components/App/DonneurOrdre/DonneurDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function DonneurOrdrePage() {
  const router = useRouter();
  const [donneur, setDonneur] = useState<DonneurOrdre>();
  const [loading, setLoading] = useState(false);
  const donneurId = router.query.donneurId || undefined;

  const fetchDonneur = async () => {
    setLoading(true);

    if (donneurId) {
      const response: CustomHttpResponse = await getRequest(
        +donneurId,
        URLS.DONNEUR_ORDRE
      );

      if (response.success) {
        setDonneur(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDonneur();
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
            <RetourButton url={`/config/donneur`} />
          </div>
          <DonneurOrdreDisplay donneur={donneur!} />
        </div>
      )}
    </>
  );
}

export default DonneurOrdrePage;
