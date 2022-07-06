import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CautionForm from '../../../../components/App/Caution/CautionForm';
import RechercheCautionForm from '../../../../components/App/Caution/RechercheCautionForm';
import PvForm from '../../../../components/App/Pv/PvForm';
import CustomDatatable from '../../../../components/shared/CustomDatatable';
import Card from '../../../../components/UI/Card';
import RetourButton from '../../../../components/UI/RetourButton';
import { cautionColumns, pvColumns } from '../../../../config/datatableColumns';
import { URLS } from '../../../../config/urls';

function ListCautionPage() {
  const [data, setData] = useState({});
  const [extraParams, setExtraParams] = useState('');
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

  const handleSearchData = (searchData: any) => {
    let params = `&entrepriseId=${entrepriseId}`;

    for (let key of Object.keys(searchData)) {
      if (searchData[key]) {
        params = params + `&${key}=${searchData[key]}`;
      }
    }
    setExtraParams(params);
  };

  useEffect(() => {
    setExtraParams(`&entrepriseId=${entrepriseId}`);
  }, []);
  return (
    <>
      <CautionForm
        entrepriseId={entrepriseId}
        action={action}
        url={URLS.CAUTION}
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
            Ajouter Cuation
          </button>
        </div>
      </div>
      <RechercheCautionForm searchData={handleSearchData} />
      <div className="mt-3"></div>
      <Card title="La liste des cautions">
        <CustomDatatable
          dataReturnedToEdit={handleDataReturnedToEditFormulaire}
          rowEdited={rowEdited}
          title={''}
          url={URLS.CAUTION}
          extraParams={extraParams}
          urlDisplay={`${URLS.ENTREPRISE}/${entrepriseId}${URLS.CAUTION}`}
          columns={cautionColumns}
          actions={{ edit: true, delete: true, display: true }}
        />
      </Card>
    </>
  );
}

export default ListCautionPage;
