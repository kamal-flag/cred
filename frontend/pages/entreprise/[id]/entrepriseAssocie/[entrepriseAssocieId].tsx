import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import CautionDisplay from '../../../../components/App/Caution/CautionDisplay';
import EntrepriseAssocieDisplay from '../../../../components/App/EntrepriseAssocie/EntrepriseAssocieGerantDisplay';
import RetourButton from '../../../../components/UI/RetourButton';
import { URLS } from '../../../../config/urls';
import { getRequest } from '../../../../utils/http';

function EntrepriseAssociePage() {
  const router = useRouter();
  const [entrepriseAssocie, setEntrepriseAssocie] =
    useState<EntrepriseAssocie>();
  const [loading, setLoading] = useState(false);
  const entrepriseAssocieId = router.query.entrepriseAssocieId || undefined;
  const entrepriseId = router.query.id || undefined;

  const fetchEntrepriseAssocie = async () => {
    setLoading(true);

    if (entrepriseAssocieId) {
      const response: CustomHttpResponse = await getRequest(
        +entrepriseAssocieId,
        URLS.ENTREPRISE_ASSOCIE
      );

      if (response.success) {
        setEntrepriseAssocie(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchEntrepriseAssocie();
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
            <RetourButton
              url={`/entreprise/${entrepriseId}/entrepriseAssocie`}
            />
          </div>
          <EntrepriseAssocieDisplay entrepriseAssocie={entrepriseAssocie!} />
        </div>
      )}
    </>
  );
}

export default EntrepriseAssociePage;
