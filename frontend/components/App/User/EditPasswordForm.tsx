import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { schemaUserEditPasswordValidation } from '../../../config/yupSchemaValidation';
import AuthContext from '../../../context/AuthContext';
import { putRequest } from '../../../utils/http';
import Card from '../../UI/Card';

function EditPasswordForm() {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaUserEditPasswordValidation),
  });

  const onSubmit = async (dataSubmited: any) => {
    dataSubmited = { id: user.id, ...dataSubmited };
    const response: CustomHttpResponse = await putRequest(
      dataSubmited,
      '/users/editPassword'
    );
    if (response.success) {
      router.push('/entreprise');
    }
  };

  return (
    <Card title="Modifier mot de passe">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Ancien mot de passe</label>
            <input
              {...register('oldPassword')}
              className="inputForm"
              type="password"
            />
            <p className="formError">{errors.oldPassword?.message}</p>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <label className="labelForm">Nouveau mot de passe</label>
            <input
              {...register('newPassword')}
              className="inputForm"
              type="password"
            />
            <p className="formError">{errors.newPassword?.message}</p>
          </div>
        </div>
        <div className="flex flex-wrap w-full space-x-2 place-content-end">
          <button type="submit" className="buttonSaveForm">
            Enregistrer
          </button>
        </div>
      </form>
    </Card>
  );
}

export default EditPasswordForm;
