import React, { useState } from 'react';

import AssuranceForm from '../../../components/App/Assurance/AssuranceForm';
import { URLS } from '../../../config/urls';
import { assuranceColumns } from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import BureauDouanierForm from '../../../components/App/Bureau/BureauForm';
import RechercheBureauForm from '../../../components/App/Bureau/RechercheBureauForm';

function ListBureauDouanierPage() {
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
      <BureauDouanierForm
        action={action}
        url={URLS.BUREAU_DOUANIER}
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
          Ajouter bureau douanier
        </button>
      </div>
      <RechercheBureauForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des bureaux douaniers">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.BUREAU_DOUANIER}
          urlDisplay={`/config/bureau`}
          extraParams={extraParams}
          columns={assuranceColumns}
          actions={{ edit: true, delete: true, display: false }}
        />
      </Card>
    </>
  );
}

export default ListBureauDouanierPage;
