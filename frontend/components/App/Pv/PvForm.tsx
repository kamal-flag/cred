import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { URLS } from '../../../config/urls';
import { schemaPvValidation } from '../../../config/yupSchemaValidation';
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

function PvForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
  entrepriseId,
}: Props) {
  const [bureauxDouanier, setBureauxDouanier] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const initFetchBureauDouanier = async () => {
    const responseBureauDouanier: CustomHttpResponse = await getAllRequest(
      URLS.BUREAU_DOUANIER
    );

    if (responseBureauDouanier.success) {
      setBureauxDouanier(responseBureauDouanier.data.value);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaPvValidation),
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
    initFetchBureauDouanier();
  }, []);
  const onSubmit = async (dataSubmited: any) => {
    console.log('data submitted PV', dataSubmited);

    dataSubmited.datePV.setHours(12);
    dataSubmited.dateActivite.setHours(12);

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
  };
  return (
    <Modal
      titleModal="Formulaire des Pvs"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Activité du PV</label>
            <input
              {...register('activitePV')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.activitePV?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Bureau douanier</label>
            <select {...register('bureauDouanier.id')} className="inputForm">
              {bureauxDouanier?.map((option: any) => (
                <option key={option['id']} value={option['id']}>
                  {option['libelle']}
                </option>
              ))}
            </select>
            <p className="formError">{errors.bureauDouanier?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Date du PV</label>
            <input className="inputForm" type="date" {...register('datePV')} />
            <p className="formError">{errors.datePV?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Date d'activité</label>
            <input
              className="inputForm"
              type="date"
              {...register('dateActivite')}
            />
            <p className="formError">{errors.dateActivite?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Matériel neuf</label>
            <input
              {...register('materielNeuf')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.materielNeuf?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Matériel usager</label>
            <input
              {...register('materielUsager')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.materielUsager?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nombres d'employés</label>
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
          <div className="w-full">
            <label>
              <input
                type="checkbox"
                {...register('materielImporte')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Matériel importé</span>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <label>
              <input
                type="checkbox"
                {...register('materielAcquis')}
                className="inputCheckBox"
              />
              <span className="labelCheckBox">Matériel acquis</span>
            </label>
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

export default PvForm;
