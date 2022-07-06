import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import EntrepriseDisplay from '../../../components/App/Entreprise/EntrepriseDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function EntreprisePage() {
  const router = useRouter();
  const [entreprise, setEntreprise] = useState<Entreprise>();
  const [loading, setLoading] = useState(false);
  const entrepriseId = router.query.id || undefined;

  const fetchEntreprise = async () => {
    setLoading(true);

    if (entrepriseId) {
      const response: CustomHttpResponse = await getRequest(
        +entrepriseId,
        URLS.ENTREPRISE
      );

      if (response.success) {
        setEntreprise(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchEntreprise();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader color={'#000'} size={150} />
        </div>
      ) : (
        <div>
          <div className="flex items-center">
            <RetourButton url={`/entreprise/`} />
            <div className="flex items-center justify-end mb-3 space-x-3 flex-1">
              <Link href={`/entreprise/${entrepriseId}/pv`}>
                <button className="buttonAction">PVs</button>
              </Link>

              <Link href={`/entreprise/${entrepriseId}/caution`}>
                <button className="buttonAction">Cautions</button>
              </Link>

              <Link href={`/entreprise/${entrepriseId}/comptable`}>
                <button className="buttonAction">Données comptables</button>
              </Link>

              <Link href={`/entreprise/${entrepriseId}/entrepriseAssocie`}>
                <button className="buttonAction">Associé / Gérant</button>
              </Link>
            </div>
          </div>
          <EntrepriseDisplay entreprise={entreprise!} />
        </div>
      )}
    </>
  );
}

export default EntreprisePage;
