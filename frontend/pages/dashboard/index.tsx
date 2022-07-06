import React, { useState } from 'react';
import CustomDatatable from '../../components/shared/CustomDatatable';
import Formulaire from '../../components/shared/form/formulaire';
import Modal from '../../components/UI/Modal';
import { assuranceColumns } from '../../config/datatableColumns';
import { assuranceSchema } from '../../config/forms';
import { URLS } from '../../config/urls';
import { schemaAssuranceValidation } from '../../config/yupSchemaValidation';
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from '../../utils/http';
function DashboardPage() {
  const [data, setData] = useState({});
  const [action, setAction] = useState('add');
  const [openModal, setOpenModal] = useState(false);
  const [rowEdited, setRowEdited] = useState();

  /*const handleLogout = async () => {
    await logout();
  };*/

  const payload = {
    libelle: 'nouvelle entite modifier',
  };
  const handleAddAssurance = async () => {
    /*const response: CustomHttpResponse = await putRequest(
      payload,
      URLS.ASSURANCE
    );*/

    const response: CustomHttpResponse = await getRequest(2, URLS.ASSURANCE);
    if (response.success) {
      console.log('afficher la reponse : ', response);
    }
  };

  const handleDataReturnedToDatatable = (dataReturned: any) => {
    //setData(dataReturned);
    setRowEdited(dataReturned);
    console.log('les informations ont été modifiés', dataReturned);
    setOpenModal(false);
  };

  const handleDataReturnedToEditFormulaire = (dataReturned: any) => {
    setData(dataReturned);
    setOpenModal(true);
    setAction('edit');
    console.log('open modal to edit', dataReturned);
  };

  const handleOnAdd = () => {
    setOpenModal(true);
    setAction('add');
    console.log('open modal to add');
  };
  const modalHandle = (openModal: boolean) => {
    setOpenModal(false);
  };
  const handleDataReturnedToDisplayFormulaire = (dataReturned: any) => {
    //setData(dataReturned);
    console.log('open modal to display', dataReturned);
  };
  /*const data = {
    firstName: 'kira',
    age: 23,
    color: {
      options: [
        {
          id: 30,
          libelle: 'nothinh here',
        },
        {
          id: 29,
          libelle: 'assurance22',
        },
        {
          id: 28,
          libelle: 'assurance21',
        },
      ],
      defaultValue: 29,
    },
  };*/
  //const data = {};

  return (
    <div>
      <Modal openModal={openModal} titleModal={'Formulaire assurance'}>
        <Formulaire
          dataReturned={handleDataReturnedToDatatable}
          action={action}
          url={URLS.ASSURANCE}
          schemaValidation={schemaAssuranceValidation}
          schemaFormulaire={assuranceSchema}
          data={data}
        />
      </Modal>
      <div>
        <button
          onClick={handleOnAdd}
          className="flex float-right px-3 py-2 mb-3 font-semibold text-white bg-blue-500 rounded"
        >
          Ajouter assurance
        </button>
      </div>
      <div className="shadow-md">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          dataReturnedToDisplay={handleDataReturnedToDisplayFormulaire}
          rowEdited={rowEdited}
          title={'La liste des assurances'}
          url={URLS.ASSURANCE}
          columns={assuranceColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </div>
    </div>
  );
}

export default DashboardPage;
