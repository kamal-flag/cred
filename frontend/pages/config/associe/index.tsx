import React, { useState } from 'react';
import { URLS } from '../../../config/urls';
import { associeColumns } from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import AssocieGerantForm from '../../../components/App/Associe/AssocieForm';
import RechercheAssocieForm from '../../../components/App/Associe/RechercheAssocieForm';

function ListAssocieGerantPage() {
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
      <AssocieGerantForm
        action={action}
        url={URLS.ASSOCIE}
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
          Ajouter associé / gérant
        </button>
      </div>
      <RechercheAssocieForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des associés / gérants">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.ASSOCIE}
          urlDisplay={`/config/associe`}
          extraParams={extraParams}
          columns={associeColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListAssocieGerantPage;
