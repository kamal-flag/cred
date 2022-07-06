import React, { useState } from 'react';

import { URLS } from '../../../config/urls';
import { paysColumns } from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import PaysForm from '../../../components/App/Pays/PaysForm';
import RecherchePaysForm from '../../../components/App/Pays/RecherchePaysForm';

function ListPaysPage() {
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
      <PaysForm
        action={action}
        url={URLS.PAYS}
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
          Ajouter pays
        </button>
      </div>
      <RecherchePaysForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des pays">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.PAYS}
          urlDisplay={`/config/pays`}
          extraParams={extraParams}
          columns={paysColumns}
          actions={{ edit: true, delete: true, display: false }}
        />
      </Card>
    </>
  );
}

export default ListPaysPage;
