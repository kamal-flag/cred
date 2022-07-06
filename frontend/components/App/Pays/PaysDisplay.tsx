import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  pays: Pays;
}

function PaysDisplay({ pays }: Props) {
  return (
    <Card title="Informations du pays">
      <DisplayRow label={'Pays'} value={pays?.libelle} />
    </Card>
  );
}

export default PaysDisplay;
