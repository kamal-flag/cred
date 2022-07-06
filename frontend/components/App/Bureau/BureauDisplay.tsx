import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  bureau: BoureauDouanier;
}

function BureauDouanierDisplay({ bureau }: Props) {
  return (
    <Card title="Informations du bureau douanier">
      <DisplayRow label={'Libellé'} value={bureau?.libelle} />
    </Card>
  );
}

export default BureauDouanierDisplay;
