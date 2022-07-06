import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { URLS } from '../../../config/urls';
import { schemaComptableValidation } from '../../../config/yupSchemaValidation';
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

function ComptableForm({
  action,
  url,
  data,
  closeModal,
  dataReturned,
  entrepriseId,
}: Props) {
  const [assurance, setAssurance] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const initFetchAssurance = async () => {
    const response: CustomHttpResponse = await getAllRequest(URLS.ASSURANCE);

    if (response.success) {
      setAssurance(response.data.value);
    }
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaComptableValidation),
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
    initFetchAssurance();
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
      }
    }

    setShowModal(false);
    closeModal();
  };
  return (
    <Modal
      titleModal="Formulaire des données comptable"
      openModal={showModal}
      closeModal={onModalClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Année</label>
            <input {...register('annee')} className="inputForm" type="text" />
            <p className="formError">{errors.annee?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Matériel d'outillage</label>
            <input
              className="inputForm"
              type="text"
              {...register('materielOutillage')}
            />
            <p className="formError">{errors.materielOutillage?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Capitaux propres</label>
            <input
              className="inputForm"
              type="text"
              {...register('capitauxPropres')}
            />
            <p className="formError">{errors.capitauxPropres?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Résultat net</label>
            <input
              {...register('resultatNet')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.resultatNet?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Charge personnel</label>
            <input
              className="inputForm"
              type="text"
              {...register('chargePersonnel')}
            />
            <p className="formError">{errors.chargePersonnel?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Achat service</label>
            <input
              {...register('achatService')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.achatService?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Chiffre d'affaire total</label>
            <input
              className="inputForm"
              type="text"
              {...register('chiffreAffaireTotal')}
            />
            <p className="formError">{errors.chiffreAffaireTotal?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Chiffre d'affaire export</label>
            <input
              {...register('chiffreAffaireExport')}
              className="inputForm"
              type="text"
            />
            <p className="formError">{errors.chiffreAffaireExport?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Numéro police d'assurance 1</label>
            <input
              className="inputForm"
              type="text"
              {...register('numeroPoliceAssurance1')}
            />
            <p className="formError">
              {errors.numeroPoliceAssurance1?.message}
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nature 1</label>
            <input className="inputForm" type="text" {...register('nature1')} />
            <p className="formError">{errors.nature1?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Numéro police d'assurance 2</label>
            <input
              className="inputForm"
              type="text"
              {...register('numeropoliceAssurance2')}
            />
            <p className="formError">
              {errors.numeropoliceAssurance2?.message}
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nature 2</label>
            <input className="inputForm" type="text" {...register('nature2')} />
            <p className="formError">{errors.nature2?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Montant délégation</label>
            <input
              className="inputForm"
              type="text"
              {...register('montantDelegation')}
            />
            <p className="formError">{errors.montantDelegation?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Dettes</label>
            <input className="inputForm" type="text" {...register('dettes')} />
            <p className="formError">{errors.dettes?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Achat consommable</label>
            <input
              className="inputForm"
              type="text"
              {...register('achatConsommable')}
            />
            <p className="formError">{errors.achatConsommable?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Autres charges</label>
            <input
              className="inputForm"
              type="text"
              {...register('autresCharges')}
            />
            <p className="formError">{errors.autresCharges?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Subventions d'exploitation</label>
            <input
              className="inputForm"
              type="text"
              {...register('subventionsExploitation')}
            />
            <p className="formError">
              {errors.subventionsExploitation?.message}
            </p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Impôts tax</label>
            <input
              className="inputForm"
              type="text"
              {...register('impotsTax')}
            />
            <p className="formError">{errors.impotsTax?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Capital permanent</label>
            <input
              className="inputForm"
              type="text"
              {...register('capitalPermanent')}
            />
            <p className="formError">{errors.capitalPermanent?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Actif circulant</label>
            <input
              className="inputForm"
              type="text"
              {...register('actifCirculant')}
            />
            <p className="formError">{errors.actifCirculant?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Trésorerie passif</label>
            <input
              className="inputForm"
              type="text"
              {...register('tresoreriePassif')}
            />
            <p className="formError">{errors.tresoreriePassif?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Actif total</label>
            <input
              className="inputForm"
              type="text"
              {...register('actifTotal')}
            />
            <p className="formError">{errors.actifTotal?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Passif total</label>
            <input
              className="inputForm"
              type="text"
              {...register('passifTotal')}
            />
            <p className="formError">{errors.passifTotal?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Frais financiers</label>
            <input
              className="inputForm"
              type="text"
              {...register('fraisFinanciers')}
            />
            <p className="formError">{errors.fraisFinanciers?.message}</p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Stocks</label>
            <input className="inputForm" type="text" {...register('stocks')} />
            <p className="formError">{errors.stocks?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Assurance</label>
            <select {...register('assurance.id')} className="inputForm">
              {assurance?.map((option: any) => (
                <option key={option['id']} value={option['id']}>
                  {option['libelle']}
                </option>
              ))}
            </select>
            <p className="formError">{errors.assurance?.message}</p>
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

export default ComptableForm;
