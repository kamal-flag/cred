import React, { useState } from 'react';

import AssuranceForm from '../../../components/App/Assurance/AssuranceForm';
import { URLS } from '../../../config/urls';
import {
  assuranceColumns,
  documentCautionColumns,
} from '../../../config/datatableColumns';
import Card from '../../../components/UI/Card';
import CustomDatatable from '../../../components/shared/CustomDatatable';
import DocumentCautionForm from '../../../components/App/DocumentCaution/DocumentForm';

function ListDocumentCautionPage() {
  const [data, setData] = useState({});
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
  return (
    <>
      <DocumentCautionForm
        action={action}
        url={URLS.DOCUMENT_CAUTION}
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
          Ajouter document caution
        </button>
      </div>
      <Card title="La liste des documents caution">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.DOCUMENT_CAUTION}
          urlDisplay={`/config/document`}
          extraParams=""
          columns={documentCautionColumns}
          actions={{ edit: true, delete: true, display: false }}
        />
      </Card>
    </>
  );
}

export default ListDocumentCautionPage;
