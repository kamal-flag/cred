import React, { useState } from 'react';
import { URLS } from '../../../config/urls';
import { userColumns } from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import UserForm from '../../../components/App/User/UserForm';
import RechercheUserForm from '../../../components/App/User/RechercheUserForm';

function ListUserPage() {
  const [data, setData] = useState({});
  const [extraParams, setExtraParams] = useState('');
  const [action, setAction] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [rowEdited, setRowEdited] = useState();

  const handleDataReturnedToDatatable = (dataReturned: any) => {
    console.log('data returnd', dataReturned);

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
      <UserForm
        action={action}
        url={URLS.USER}
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
          Ajouter utilisateur
        </button>
      </div>
      <RechercheUserForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des utilisateurs">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.USER}
          urlDisplay={`/admin/user`}
          extraParams={extraParams}
          columns={userColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListUserPage;
