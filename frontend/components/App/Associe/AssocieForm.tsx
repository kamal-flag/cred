import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { typeIdentifiant, typePersonne } from '../../../config/referentiel';
import { URLS } from '../../../config/urls';
import { schemaAssocieGerantValidation } from '../../../config/yupSchemaValidation';
import { getAllRequest, postRequest, putRequest } from '../../../utils/http';
import Modal from '../../UI/Modal';

interface Props {
  action: string;
  url: string;
  closeModal: any;
  data: any;
  dataReturned: any;
}

function AssocieGerantForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const [pays, setPays] = useState([]);
  const [showPersonnePhysique, setShowPersonnePysique] = useState<boolean>();
  const [showPersonneMoral, setShowPersonneMoral] = useState<boolean>();

  const initFetchPays = async () => {
    const response: CustomHttpResponse = await getAllRequest(URLS.PAYS);

    if (response.success) {
      setPays(response.data.value);
    }
  };

  const handleOnChangeTypePersonne = (input: any) => {
    if (input.target.value == 1) {
      setShowPersonnePysique(true);
      setShowPersonneMoral(false);
    } else {
      setShowPersonnePysique(false);
      setShowPersonneMoral(true);
    }
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaAssocieGerantValidation),
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
    if (data.typePersonne == 1 || data.typePersonne == undefined) {
      setShowPersonnePysique(true);
      setShowPersonneMoral(false);
    } else {
      setShowPersonnePysique(false);
      setShowPersonneMoral(true);
    }
  }, [data]);

  useEffect(() => {
    initFetchPays();
  }, []);

  const onSubmit = async (dataSubmited: any) => {
    console.log('dataSubmitted xxx', dataSubmited);

    if (dataSubmited.dateNaissance) {
      new Date(dataSubmited.dateNaissance).setHours(12);
      //dataSubmited.dateNaissance.setHours(12);
      //dataSubmited?.dateNaissance.toDate().setHours(12);
    }

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
      titleModal="Formulaire des associé / gérant"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Type personne</label>
            <select
              {...register('typePersonne')}
              onChange={handleOnChangeTypePersonne}
              className="inputForm"
            >
              {typePersonne.map((key, index) => (
                <option key={index} value={index + 1}>
                  {key}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Type identifiant</label>
            <select {...register('typeIdentifiant')} className="inputForm">
              {typeIdentifiant.map((key, index) => (
                <option key={index} value={index + 1}>
                  {key}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Identifiant</label>
            <input
              {...register('identifiant')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.identifiant?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Pays</label>
            <select {...register('pays.id')} className="inputForm">
              {pays?.map((option: any) => (
                <option key={option['id']} value={option['id']}>
                  {option['libelle']}
                </option>
              ))}
            </select>
          </div>
        </div>

        {showPersonnePhysique && (
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2 md:w-1/3">
              <label className="labelForm">Nom</label>
              <input {...register('nom')} className="inputForm" type="text" />
              <p className="formError">{errors.nom?.message}</p>
            </div>
            <div className="w-full px-2 md:w-1/3">
              <label className="labelForm">Prénom</label>
              <input
                {...register('prenom')}
                className="inputForm"
                type="text"
              />
              <p className="formError">{errors.prenom?.message}</p>
            </div>
            <div className="w-full px-2 md:w-1/3">
              <label className="labelForm">Date Naissance</label>
              <input
                {...register('dateNaissance')}
                className="inputForm"
                type="date"
              />
              <p className="formError">{errors.dateNaissance?.message}</p>
            </div>
          </div>
        )}

        {showPersonneMoral && (
          <div className="flex flex-wrap ">
            <div className="w-full">
              <label className="labelForm">Raison sociale</label>
              <input
                {...register('raisonSociale')}
                className="inputForm"
                type="text"
              />
              <p className="formError">{errors.raisonSociale?.message}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap ">
          <div className="w-full">
            <label className="labelForm">Addresse</label>
            <input {...register('adresse')} className="inputForm" type="text" />
            <p className="formError">{errors.adresse?.message}</p>
          </div>
        </div>

        {showPersonnePhysique && (
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3">
              <label>
                <input
                  type="checkbox"
                  {...register('mineur')}
                  className="inputCheckBox"
                />
                <span className="labelCheckBox">Mineur</span>
              </label>
            </div>
            <div className="w-full  md:w-1/3">
              <label>
                <input
                  type="checkbox"
                  {...register('residence')}
                  className="inputCheckBox"
                />
                <span className="labelCheckBox">Résidence</span>
              </label>
            </div>

            <div className="w-full  md:w-1/3">
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
        )}

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

export default AssocieGerantForm;
