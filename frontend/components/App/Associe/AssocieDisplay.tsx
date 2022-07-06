import React from 'react';
import { typeIdentifiant, typePersonne } from '../../../config/referentiel';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  associe: AssocieGerant;
}

function AssocieDisplay({ associe }: Props) {
  return (
    <Card title="Informations associé / gérant">
      <DisplayRow
        label={'Type personne'}
        value={typePersonne[associe?.typePersonne - 1]}
      />
      <DisplayRow
        label={'Type identifiant'}
        value={typeIdentifiant[associe?.typeIdentifiant - 1]}
      />
      <DisplayRow label={'Identifiant'} value={associe?.identifiant} />
      <DisplayRow label={'Addresse'} value={associe?.adresse} />
      <DisplayRow label={'Nom'} value={associe?.nom} />
      <DisplayRow label={'Prénom'} value={associe?.prenom} />
      <DisplayRow label={'Date naissance'} value={associe?.dateNaissance} />
      <DisplayRow label={'Raison sociale'} value={associe?.raisonSociale} />
      <DisplayRow label={'Observations'} value={associe?.observations} />
      <DisplayRow label={'Mineur'} value={associe?.mineur ? 'OUI' : 'NON'} />
      <DisplayRow
        label={'Résidence'}
        value={associe?.residence ? 'OUI' : 'NON'}
      />
      <DisplayRow
        label={'Habilité'}
        value={associe?.habilite ? 'OUI' : 'NON'}
      />
    </Card>
  );
}

export default AssocieDisplay;
