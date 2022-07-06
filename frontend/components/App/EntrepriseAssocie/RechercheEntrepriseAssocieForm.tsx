import React from 'react';
import { useForm } from 'react-hook-form';
import Card from '../../UI/Card';

interface Props {
  searchData: any;
}
function RechercheEntrepriseAssocieForm({ searchData }: Props) {
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
            <div className="labelForm m1-2">Identifiant</div>
            <input
              {...register('identifiant')}
              type="text"
              className="inputForm"
            />
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

export default RechercheEntrepriseAssocieForm;
