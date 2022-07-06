import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { URLS } from '../../../config/urls';
import { schemaDonneurOrdreValidation } from '../../../config/yupSchemaValidation';
import { getAllRequest, postRequest, putRequest } from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
}

function DonneurOrdreForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [pays, setPays] = useState([]);

  const initFetchPays = async () => {
    const response: CustomHttpResponse = await getAllRequest(URLS.PAYS);

    if (response.success) {
      setPays(response.data.value);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaDonneurOrdreValidation),
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
  }, [data]);

  useEffect(() => {
    initFetchPays();
  }, []);

  const onSubmit = async (dataSubmited: any) => {
    if (action === 'edit') {
      dataSubmited = { id: data.id, ...dataSubmited };
      const response: CustomHttpResponse = await putRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(response.data.value);
      }
    } else {
      const response: CustomHttpResponse = await postRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(response.data.value);
      }
    }

    setShowModal(false);
    closeModal();
  };
  return (
    <Modal
      titleModal="Formulaire du donneur d'ordre"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Raison sociale</label>
            <input
              {...register('raisonSociale')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.raisonSociale?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Activité</label>
            <input
              {...register('activite')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.activite?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full md:w-1/2">
            <label className="labelForm">Pays</label>
            <select {...register('pays.id')} className="inputForm">
              {pays?.map((option: any) => (
                <option key={option['id']} value={option['id']}>
                  {option['libelle']}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full md:w-1/2 pt-10 pl-20">
            <label>
              <input
                type="checkbox"
                {...register('agree')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Agrée</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap "></div>

        <div className="flex flex-wrap ">
          <div className="w-full">
            <label className="labelForm">Observations</label>
            <textarea
              {...register('observations')}
              className="h-16 inputForm"
            ></textarea>
            <p className="formError">{errors.observations?.message}</p>
          </div>
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

export default DonneurOrdreForm;
