import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AssuranceDisplay from '../../../components/App/Assurance/AssuranceDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function AssurancePage() {
  const router = useRouter();
  const [assurance, setAssurance] = useState<Assurance>();
  const [loading, setLoading] = useState(false);
  const assuranceId = router.query.assuranceId || undefined;

  const fetchAssurance = async () => {
    setLoading(true);

    if (assuranceId) {
      const response: CustomHttpResponse = await getRequest(
        +assuranceId,
        URLS.ASSURANCE
      );

      if (response.success) {
        setAssurance(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchAssurance();
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
            <RetourButton url={`/config/assurance`} />
          </div>
          <AssuranceDisplay assurance={assurance!} />
        </div>
      )}
    </>
  );
}

export default AssurancePage;
