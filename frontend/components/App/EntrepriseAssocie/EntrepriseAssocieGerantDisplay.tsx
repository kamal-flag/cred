import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  entrepriseAssocie: EntrepriseAssocie;
}

function EntrepriseAssocieDisplay({ entrepriseAssocie }: Props) {
  return (
    <Card title="Informations associé / gérant">
      <DisplayRow
        label={'Associé'}
        value={
          entrepriseAssocie?.associeGerant.typePersonne == 1
            ? entrepriseAssocie?.associeGerant?.nom +
              ' ' +
              entrepriseAssocie?.associeGerant?.prenom
            : entrepriseAssocie?.associeGerant?.raisonSociale
        }
      />
      <DisplayRow
        label={'Associé'}
        value={entrepriseAssocie?.associe ? 'OUI' : 'NON'}
      />
      <DisplayRow
        label={'Gérant'}
        value={entrepriseAssocie?.gerant ? 'OUI' : 'NON'}
      />
      <DisplayRow
        label={'Habilité'}
        value={entrepriseAssocie?.habilite ? 'OUI' : 'NON'}
      />
      <DisplayRow
        label={'Observations'}
        value={entrepriseAssocie?.observations}
      />
    </Card>
  );
}

export default EntrepriseAssocieDisplay;
