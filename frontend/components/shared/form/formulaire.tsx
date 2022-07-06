import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from './formComponents/input';
import Select from './formComponents/select';
import SchemaFormulaire from '../../../config/forms';
import { postRequest, putRequest } from '../../../utils/http';
interface Props {
  action: string;
  schemaFormulaire: any;
  schemaValidation: any;
  data: any;
  url: string;
  dataReturned: any;
}
function Formulaire({
  action,
  schemaValidation,
  schemaFormulaire,
  data,
  url,
  dataReturned,
}: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const [dataReceived, setDataReceived] = useState(data);

  useEffect(() => {
    setDataReceived(data);
  }, [data]);

  const onSubmit = async (dataSubmited: any) => {
    if (action === 'edit') {
      dataSubmited = { id: data.id, ...dataSubmited };
      const response: CustomHttpResponse = await putRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(dataSubmited);
      }
    } else {
      const response: CustomHttpResponse = await postRequest(dataSubmited, url);
      if (response.success) {
        dataReturned(response.data.value);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap">
        {schemaFormulaire.map((component: SchemaFormulaire) => {
          switch (component.type) {
            case 'input': {
              return (
                <Input
                  key={component.name}
                  name={component.name}
                  label={component.label}
                  css={`
                    ${component.css}
                  `}
                  errors={errors}
                  register={register}
                  defaultValueInput={dataReceived[component.name] || ''}
                />
              );
            }

            case 'select': {
              return (
                <Select
                  key={component.name}
                  name={component.name}
                  label={component.label}
                  css={component.css}
                  register={register}
                  errors={errors}
                  defaultValueOption={
                    dataReceived[component.name]?.defaultValue || null
                  }
                  keyOption={component.key}
                  valueOption={component.value}
                  options={dataReceived[component.name]?.options || []}
                />
              );
            }
          }
        })}
      </div>
      <button className="flex px-3 py-2 mt-3 bg-blue-500 text-white font-semibold rounded float-right">
        Enregistrer
      </button>
      <button
        type="button"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </form>
  );
}

export default Formulaire;
