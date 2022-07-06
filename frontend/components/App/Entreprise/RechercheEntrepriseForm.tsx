import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { schemaRechercheEntrepriseValidation } from '../../../config/yupSchemaValidation';
import Card from '../../UI/Card';

interface Props {
  searchData: any;
}

function RechercheEntrepriseForm({ searchData }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaRechercheEntrepriseValidation),
  });

  const onSubmit = async (dataSubmited: any) => {
    searchData(dataSubmited);
  };
  return (
    <Card title="Filtre de recherche">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start">
          <div className="flex flex-col w-full md:w-1/4">
            <div className="labelForm m1-2">Centre RC</div>
            <input
              {...register('centreRC')}
              type="text"
              className="inputForm"
            />
            <p className="formError">{errors.centreRC?.message}</p>
          </div>
          <div className="flex flex-col px-2 w-full md:w-1/4">
            <div className="labelForm">Numéro RC</div>
            <input
              {...register('numeroRC')}
              type="text"
              className="inputForm"
            />
            <p className="formError">{errors.numeroRC?.message}</p>
          </div>
          <div className="flex flex-col px-2 w-full md:w-1/4">
            <div className="labelForm">Raison sociale</div>
            <input
              {...register('raisonSociale')}
              type="text"
              className="inputForm"
            />
            <p className="formError">{errors.raisonSociale?.message}</p>
          </div>
          <div className="flex flex-col px-2 w-full md:w-1/4">
            <div className="labelForm">Etat entreprise</div>
            <select {...register('etatEntreprise')} className="inputForm">
              <option key={0} value="">
                Toutes
              </option>
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
        <div className="flex mt-3">
          <button type="submit" className="rechercheButton">
            Recherche
          </button>
        </div>
      </form>
    </Card>
  );
}

export default RechercheEntrepriseForm;
