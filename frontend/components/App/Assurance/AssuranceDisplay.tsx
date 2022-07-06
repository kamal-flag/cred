import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  assurance: Assurance;
}

function AssuranceDisplay({ assurance }: Props) {
  return (
    <Card title="Informations de l'assurance">
      <DisplayRow label={'Libellé'} value={assurance?.libelle} />
    </Card>
  );
}

export default AssuranceDisplay;
