import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import EntrepriseAssocieGerantForm from '../../../../components/App/EntrepriseAssocie/EntrepriseAssocieForm';
import RechercheEntrepriseAssocieForm from '../../../../components/App/EntrepriseAssocie/RechercheEntrepriseAssocieForm';
import CustomDatatable from '../../../../components/shared/CustomDatatable';
import Card from '../../../../components/UI/Card';
import RetourButton from '../../../../components/UI/RetourButton';
import { entrepriseAssocieGerantColumns } from '../../../../config/datatableColumns';
import { URLS } from '../../../../config/urls';

function ListCautionPage() {
  const [data, setData] = useState({});
  const [extraParams, setExtraParams] = useState('');
  const [action, setAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rowEdited, setRowEdited] = useState();
  const router = useRouter();
  const entrepriseId = router.query.id || 1;

  const handleDataReturnedToDatatable = (dataReturned: any) => {
    setRowEdited(dataReturned);
    setShowModal(false);
  };

  const handleDataReturnedToEditFormulaire = (dataReturned: any) => {
    setData(dataReturned);
    setShowModal(true);
    setAction('edit');
  };

  const handleModalClose = () => {
    setAction('');
  };

  const handleSearchData = (searchData: any) => {
    let params = `&entrepriseId=${entrepriseId}`;

    for (let key of Object.keys(searchData)) {
      if (searchData[key]) {
        params = params + `&${key}=${searchData[key]}`;
      }
    }
    setExtraParams(params);
  };

  useEffect(() => {
    setExtraParams(`&entrepriseId=${entrepriseId}`);
  }, []);
  return (
    <>
      <EntrepriseAssocieGerantForm
        entrepriseId={entrepriseId}
        action={action}
        url={URLS.ENTREPRISE_ASSOCIE}
        data={data}
        closeModal={handleModalClose}
        dataReturned={handleDataReturnedToDatatable}
      />
      <div className="flex items-center">
        <RetourButton url={`/entreprise/${entrepriseId}`} />
        <div className="flex justify-end flex-1">
          <button
            onClick={() => {
              setAction('add');
              setShowModal(true);
              setData({});
            }}
            className="addButton"
          >
            Ajouter Associé / Gérant
          </button>
        </div>
      </div>
      <RechercheEntrepriseAssocieForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des associés gérants">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.ENTREPRISE_ASSOCIE}
          extraParams={extraParams}
          urlDisplay={`${URLS.ENTREPRISE}/${entrepriseId}${URLS.ENTREPRISE_ASSOCIE}`}
          columns={entrepriseAssocieGerantColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListCautionPage;
