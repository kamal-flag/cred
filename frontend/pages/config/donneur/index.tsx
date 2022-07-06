import React, { useState } from 'react';

import AssuranceForm from '../../../components/App/Assurance/AssuranceForm';
import { URLS } from '../../../config/urls';
import {
  assuranceColumns,
  donneurOrdreColumns,
} from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import DonneurOrdreForm from '../../../components/App/DonneurOrdre/DonneurForm';
import RechercheDonneurForm from '../../../components/App/DonneurOrdre/RechercheDonneurForm';

function ListDonneurOrdrePage() {
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
      <DonneurOrdreForm
        action={action}
        url={URLS.DONNEUR_ORDRE}
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
          Ajouter donneur d'ordre
        </button>
      </div>
      <RechercheDonneurForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des donneurs d'ordres">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.DONNEUR_ORDRE}
          urlDisplay={`/config/donneur`}
          extraParams={extraParams}
          columns={donneurOrdreColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListDonneurOrdrePage;
