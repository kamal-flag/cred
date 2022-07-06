import React, { useState } from 'react';
import EntrepriseForm from '../../components/App/Entreprise/EntrepriseForm';
import CustomDatatable from '../../components/shared/CustomDatatable';
import { URLS } from '../../config/urls';
import { entrepriseColumns } from '../../config/datatableColumns';
import Card from '../../components/UI/Card';
import RechercheEntrepriseForm from '../../components/App/Entreprise/RechercheEntrepriseForm';

function ListEntreprisePage() {
  const [data, setData] = useState({});
  const [extraParams, setExtraParams] = useState('');
  const [action, setAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rowEdited, setRowEdited] = useState();

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
    let params = '';

    for (let key of Object.keys(searchData)) {
      if (searchData[key]) {
        params = params + `&${key}=${searchData[key]}`;
      }
    }
    setExtraParams(params);
  };
  return (
    <>
      <EntrepriseForm
        action={action}
        url={URLS.ENTREPRISE}
        data={data}
        closeModal={handleModalClose}
        dataReturned={handleDataReturnedToDatatable}
      />
      <div className="flex justify-end">
        <button
          onClick={() => {
            setAction('add');
            setShowModal(true);
            setData({});
          }}
          className="addButton"
        >
          Ajouter entreprise
        </button>
      </div>
      <RechercheEntrepriseForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des entreprises">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.ENTREPRISE}
          urlDisplay={URLS.ENTREPRISE}
          extraParams={extraParams}
          columns={entrepriseColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListEntreprisePage;
