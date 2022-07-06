import React from 'react';
import { roles } from '../../../config/referentiel';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  user: User;
}

function UserDisplay({ user }: Props) {
  return (
    <Card title="Information de l'utilisateur">
      <DisplayRow label={'Nom'} value={user?.nom} />
      <DisplayRow label={'Prénom'} value={user?.prenom} />
      <DisplayRow label={'Email'} value={user?.email} />
      <DisplayRow label={'Fonction'} value={user?.fonction} />
      <DisplayRow label={'Rôle'} value={roles[user?.role - 1]} />
    </Card>
  );
}

export default UserDisplay;
