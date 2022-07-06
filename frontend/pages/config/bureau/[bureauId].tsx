import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import BureauDouanierDisplay from '../../../components/App/Bureau/BureauDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function AssurancePage() {
  const router = useRouter();
  const [bureau, setBureau] = useState<BoureauDouanier>();
  const [loading, setLoading] = useState(false);
  const bureauId = router.query.bureauId || undefined;

  const fetchBureau = async () => {
    setLoading(true);

    if (bureauId) {
      const response: CustomHttpResponse = await getRequest(
        +bureauId,
        URLS.BUREAU_DOUANIER
      );

      if (response.success) {
        setBureau(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchBureau();
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
            <RetourButton url={`/config/bureau`} />
          </div>
          <BureauDouanierDisplay bureau={bureau!} />
        </div>
      )}
    </>
  );
}

export default AssurancePage;
