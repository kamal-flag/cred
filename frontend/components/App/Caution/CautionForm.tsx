import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { typeCaution } from '../../../config/referentiel';
import { URLS } from '../../../config/urls';
import { schemaCautionValidation } from '../../../config/yupSchemaValidation';
import { getAllRequest, postRequest, putRequest } from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
  entrepriseId: any;
}

function CautionForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
  entrepriseId,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [donneurs, setDonneurs] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [defaultDonneurs, setDefaultDonneurs] = useState([]);
  const [defaultDocuments, setDefaultDocuments] = useState([]);
  const [showDonneursOrdre, setShowDonneursOrdre] = useState(false);

  const initFetchDonneurOrdre = async () => {
    const responseDonneurOrdre: CustomHttpResponse = await getAllRequest(
      URLS.DONNEUR_ORDRE
    );

    if (responseDonneurOrdre.success) {
      const newArray = responseDonneurOrdre.data.value.map(
        (obj: DonneurOrdre) => ({ value: obj.id, label: obj.raisonSociale })
      );
      setDonneurs(newArray);
    }
  };

  const initFetchDocuments = async () => {
    const responseDocument: CustomHttpResponse = await getAllRequest(
      URLS.DOCUMENT_CAUTION
    );

    if (responseDocument.success) {
      const newArray = responseDocument.data.value.map(
        (obj: DocumentCaution) => ({ value: obj.id, label: obj.libelle })
      );
      setDocuments(newArray);
    }
  };

  const handleDocumentsChange = (input: any) => {
    setDefaultDocuments(input);
  };

  const handleDonneursChange = (input: any) => {
    setDefaultDonneurs(input);
  };

  const handleOnChangeTypeCaution = (input: any) => {
    console.log('onChange', input.target.value);
    if (input.target.value == 4) {
      setShowDonneursOrdre(true);
    } else {
      setShowDonneursOrdre(false);
      //setDefaultDonneurs([]);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaCautionValidation),
  });

  const onModalClose = () => {
    setShowModal(false);
    closeModal();
  };
  useEffect(() => {
    if (action === '') {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, [action]);

  useEffect(() => {
    reset(data);

    const newArray = data?.documents?.map((obj: DocumentCaution) => ({
      value: obj.id,
      label: obj.libelle,
    }));
    setDefaultDocuments(newArray);

    const newArray1 = data?.donneurOrdres?.map((obj: DonneurOrdre) => ({
      value: obj.id,
      label: obj.raisonSociale,
    }));
    setDefaultDonneurs(newArray1);
    if (data.typeCaution == 4) {
      setShowDonneursOrdre(true);
    }
  }, [data]);

  useEffect(() => {
    initFetchDocuments();
    initFetchDonneurOrdre();
  }, []);

  const onSubmit = async (dataSubmited: any) => {
    dataSubmited.dateArrivee.setHours(12);

    let array1: any = [];
    if (dataSubmited.typeCaution == 4) {
      array1 = defaultDonneurs.map((option: any) => ({
        id: option.value,
      }));
    }

    const array2 = defaultDocuments.map((option: any) => ({
      id: option.value,
    }));

    dataSubmited = {
      ...dataSubmited,
      donneurOrdres: array1,
      documents: array2,
    };
    if (action === 'edit') {
      dataSubmited = { id: data.id, ...dataSubmited };
      const response: CustomHttpResponse = await putRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(response.data.value);
      }
    } else {
      dataSubmited = { entreprise: { id: entrepriseId }, ...dataSubmited };
      const response: CustomHttpResponse = await postRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(response.data.value);
      }
    }

    setShowModal(false);
    closeModal();

    console.log('informations', dataSubmited, defaultDonneurs);
  };
  return (
    <Modal
      titleModal="Formulaire des cautions"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap">
          <div className="w-full">
            <label className="labelForm">Documents</label>
            <Select
              options={documents}
              defaultValue={defaultDocuments}
              isMulti
              onChange={handleDocumentsChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Numéro arrivée</label>
            <input
              {...register('numeroArrivee')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.numeroArrivee?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Date d'arrivée</label>
            <input
              className="inputForm"
              type="date"
              {...register('dateArrivee')}
            />
            <p className="formError">{errors.dateArrivee?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Numéro dossier</label>
            <input
              {...register('numeroDossier')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.numeroDossier?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Type caution</label>
            <select
              {...register('typeCaution')}
              onChange={handleOnChangeTypeCaution}
              className="inputForm"
            >
              {typeCaution.map((key, index) => (
                <option key={index} value={index + 1}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showDonneursOrdre && (
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="labelForm">Donneurs Ordres</label>
              <Select
                options={donneurs}
                defaultValue={defaultDonneurs}
                isMulti
                onChange={handleDonneursChange}
              />
            </div>
          </div>
        )}

        <div className="flex flex-wrap w-full">
          <label className="labelForm">Observations</label>
          <textarea
            {...register('observations')}
            className="h-16 inputForm"
          ></textarea>
          <p className="formError">{errors.observations?.message}</p>
        </div>

        <div className="flex flex-wrap w-full space-x-2 place-content-end">
          <button
            onClick={(e) => {
              setShowModal(false);
              closeModal();
            }}
            type="button"
            className="mr-3 buttonCancelForm"
          >
            Annuler
          </button>
          <button type="submit" className="buttonSaveForm">
            Enregistrer
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default CautionForm;
