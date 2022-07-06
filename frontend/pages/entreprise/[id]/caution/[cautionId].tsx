import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import CautionDisplay from '../../../../components/App/Caution/CautionDisplay';
import RetourButton from '../../../../components/UI/RetourButton';
import { URLS } from '../../../../config/urls';
import { getRequest } from '../../../../utils/http';

function CautionPage() {
  const router = useRouter();
  const [caution, setCaution] = useState<Caution>();
  const [loading, setLoading] = useState(false);
  const cautionId = router.query.cautionId || undefined;
  const entrepriseId = router.query.id || undefined;

  const fetchCaution = async () => {
    setLoading(true);

    if (cautionId) {
      const response: CustomHttpResponse = await getRequest(
        +cautionId,
        URLS.CAUTION
      );

      if (response.success) {
        setCaution(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchCaution();
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
            <RetourButton url={`/entreprise/${entrepriseId}/caution`} />
          </div>
          <CautionDisplay caution={caution!} />
        </div>
      )}
    </>
  );
}

export default CautionPage;
