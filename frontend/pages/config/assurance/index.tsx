import React, { useState } from 'react';

import AssuranceForm from '../../../components/App/Assurance/AssuranceForm';
import { URLS } from '../../../config/urls';
import { assuranceColumns } from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import RechercheAssuranceForm from '../../../components/App/Assurance/RechercheAssuranceForm';

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
      <AssuranceForm
        action={action}
        url={URLS.ASSURANCE}
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
          Ajouter assurance
        </button>
      </div>
      <RechercheAssuranceForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des assurances">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.ASSURANCE}
          urlDisplay={`/config/${URLS.ASSURANCE}`}
          extraParams={extraParams}
          columns={assuranceColumns}
          actions={{ edit: true, delete: true, display: false }}
        />
      </Card>
    </>
  );
}

export default ListEntreprisePage;
