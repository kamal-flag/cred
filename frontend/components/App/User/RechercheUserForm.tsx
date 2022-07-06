import React from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../UI/Card';

interface Props {
  searchData: any;
}

function RechercheUserForm({ searchData }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    //resolver: yupResolver(schemaRechercheEntrepriseValidation),
  });

  const onSubmit = async (dataSubmited: any) => {
    searchData(dataSubmited);
  };
  return (
    <Card title="Filtre de recherche">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-start">
          <div className="flex flex-col w-full md:w-1/2">
            <div className="labelForm m1-2">Nom</div>
            <input {...register('nom')} type="text" className="inputForm" />
          </div>
          <div className="flex flex-col w-full px-2 md:w-1/2">
            <div className="labelForm m1-2">Prenom</div>
            <input {...register('prenom')} type="text" className="inputForm" />
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

export default RechercheUserForm;
