import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import CautionDisplay from '../../../../components/App/Caution/CautionDisplay';
import ComptableDisplay from '../../../../components/App/Comptable/ComptableDisplay';
import RetourButton from '../../../../components/UI/RetourButton';
import { URLS } from '../../../../config/urls';
import { getRequest } from '../../../../utils/http';

function ComptablePage() {
  const router = useRouter();
  const [comptable, setComptable] = useState<Comptable>();
  const [loading, setLoading] = useState(false);
  const comptableId = router.query.comptableId || undefined;
  const entrepriseId = router.query.id || undefined;

  const fetchComptable = async () => {
    setLoading(true);

    if (comptableId) {
      const response: CustomHttpResponse = await getRequest(
        +comptableId,
        URLS.DONNEE_COMPTABLE
      );

      if (response.success) {
        console.log('comptable', response.data.value);

        setComptable(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchComptable();
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
            <RetourButton url={`/entreprise/${entrepriseId}/comptable`} />
          </div>
          <ComptableDisplay comptable={comptable!} />
        </div>
      )}
    </>
  );
}

export default ComptablePage;
