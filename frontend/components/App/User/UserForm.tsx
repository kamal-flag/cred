import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { roles } from '../../../config/referentiel';
import { schemaUserValidation } from '../../../config/yupSchemaValidation';
import { postRequest, putRequest } from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
}

function UserForm({ action, url, data, closeModal, dataReturned }: Props) {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUserValidation),
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
      titleModal="Formulaire des utilisateurs"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nom</label>
            <input {...register('nom')} className="inputForm" type="text" />
            <p className="formError">{errors.nom?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Prénom</label>
            <input {...register('prenom')} className="inputForm" type="text" />
            <p className="formError">{errors.prenom?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Email</label>
            <input {...register('email')} className="inputForm" type="text" />
            <p className="formError">{errors.email?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Fonction</label>
            <input
              {...register('fonction')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.fonction?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Mot de passe</label>
            <input
              {...register('password')}
              className="inputForm"
              type="password"
            />
            <p className="formError">{errors.password?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Rôle</label>
            <select {...register('role')} className="inputForm">
              {roles.map((key, index) => (
                <option key={index} value={index + 1}>
                  {key}
                </option>
              ))}
            </select>
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

export default UserForm;
