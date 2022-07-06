import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ComptableForm from '../../../../components/App/Comptable/ComptableForm';
import CustomDatatable from '../../../../components/shared/CustomDatatable';
import Card from '../../../../components/UI/Card';
import RetourButton from '../../../../components/UI/RetourButton';
import { comptableColumns } from '../../../../config/datatableColumns';
import { URLS } from '../../../../config/urls';

function ListComptablePage() {
  const [data, setData] = useState({});
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
  return (
    <>
      <ComptableForm
        entrepriseId={entrepriseId}
        action={action}
        url={URLS.DONNEE_COMPTABLE}
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
            Ajouter donnée comptable
          </button>
        </div>
      </div>
      <Card title="La liste des données comptables">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.DONNEE_COMPTABLE}
          extraParams={`&entrepriseId=${entrepriseId}`}
          urlDisplay={`${URLS.ENTREPRISE}/${entrepriseId}${URLS.DONNEE_COMPTABLE}`}
          columns={comptableColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListComptablePage;
