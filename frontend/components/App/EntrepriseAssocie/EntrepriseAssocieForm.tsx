import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { URLS } from '../../../config/urls';
import { schemaEntrepriseAssocieGerant } from '../../../config/yupSchemaValidation';
import getWithParams from '../../../pages/api/http/getWithParams';
import {
  getAllRequest,
  getRequest,
  getRequestWithParams,
  postRequest,
  putRequest,
} from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
  entrepriseId: any;
}

function EntrepriseAssocieGerantForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
  entrepriseId,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [associes, setAssocies] = useState([]);

  const initFetchAssocies = async () => {
    const response: CustomHttpResponse = await getRequest(
      entrepriseId,
      URLS.ASSOCIE + '/allNotInEntreprise'
    );

    if (response.success) {
      setAssocies(response.data.value);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEntrepriseAssocieGerant),
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
    initFetchAssocies();
  }, []);
  const onSubmit = async (dataSubmited: any) => {
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
        await initFetchAssocies();
      }
    }

    setShowModal(false);
    closeModal();
    //console.log('submitted values', dataSubmited);
  };
  return (
    <Modal
      titleModal="Formulaire des associés gérants"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {action == 'add' && (
          <div className="flex flex-wrap">
            <div className="w-full">
              <label className="labelForm">Associé / Gérant</label>
              <select {...register('associeGerant.id')} className="inputForm">
                {associes?.map((option: any) => (
                  <option key={option['id']} value={option['id']}>
                    {option['typePersonne'] == 2
                      ? option['raisonSociale']
                      : option['nom'] + ' ' + option['prenom']}
                  </option>
                ))}
              </select>
              <p className="formError">{errors.associeGerant?.id?.message}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3">
            <label>
              <input
                type="checkbox"
                {...register('associe')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Associé</span>
            </label>
          </div>

          <div className="w-full md:w-1/3">
            <label>
              <input
                type="checkbox"
                {...register('gerant')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Gérant</span>
            </label>
          </div>

          <div className="w-full md:w-1/3">
            <label>
              <input
                type="checkbox"
                {...register('habilite')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Habilité</span>
            </label>
          </div>
        </div>

        <div className="flex flex-wrap ">
          <div className="w-full">
            <label className="labelForm">Observations</label>
            <textarea
              {...register('observations')}
              className="h-16 inputForm"
            ></textarea>
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

export default EntrepriseAssocieGerantForm;
