import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import { schemaEntrepriseValidation } from '../../../config/yupSchemaValidation';
import { postRequest, putRequest } from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
}
function EntrepriseForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
}: Props) {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaEntrepriseValidation),
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

  const onSubmit = async (dataSubmited: any) => {
    dataSubmited.dateCreation.setHours(12);

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
      titleModal="Formulaire Entreprise"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Centre RC</label>
            <input
              {...register('centreRC')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.centreRC?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Numéro RC</label>
            <input
              {...register('numeroRC')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.numeroRC?.message}</p>
          </div>
        </div>

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
            <label className="labelForm">Date de création</label>

            <input
              className="inputForm"
              type="date"
              {...register('dateCreation')}
            />
            <p className="formError">{errors.dateCreation?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Capital sociale</label>
            <input
              {...register('capitalSocial')}
              className="inputForm"
              type="number"
            />
            <p className="formError">{errors.capitalSocial?.message}</p>
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
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nombre employées</label>
            <input
              {...register('nombreEmployes')}
              className="inputForm"
              type="number"
            />
            <p className="formError">{errors.nombreEmployes?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Chaine de production</label>
            <input
              {...register('chainesProduction')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.chainesProduction?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full ">
            <label className="labelForm">Adresse</label>
            <input {...register('adresse')} className="inputForm" type="text" />
            <p className="formError">{errors.adresse?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Téléphone 1</label>
            <input
              {...register('telephone1')}
              placeholder="0570605040"
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.telephone1?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Téléphone 2</label>
            <input
              {...register('telephone2')}
              placeholder="0570605040"
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.telephone2?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Téléphone 3</label>
            <input
              {...register('telephone3')}
              placeholder="0570605040"
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.telephone3?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Fax</label>
            <input
              {...register('fax')}
              placeholder="0570605040"
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.fax?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Email</label>
            <input {...register('email')} className="inputForm" type="text" />
            <p className="formError">{errors.email?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Etat entreprise</label>
            <select {...register('etatEntreprise')} className="inputForm">
              <option key={1} value={1}>
                Normal
              </option>
              <option key={2} value={2}>
                En cessation d'activité
              </option>
              <option key={3} value={3}>
                En liquidation
              </option>
              <option key={4} value={4}>
                En redressement judiciaire
              </option>
            </select>
          </div>
        </div>
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

export default EntrepriseForm;
