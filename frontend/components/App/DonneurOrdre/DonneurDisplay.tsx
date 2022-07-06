import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  donneur: DonneurOrdre;
}

function DonneurOrdreDisplay({ donneur }: Props) {
  return (
    <Card title="Informations du donneur d'ordre">
      <DisplayRow label={'Raison sociale'} value={donneur?.raisonSociale} />
      <DisplayRow label={'Activité'} value={donneur?.activite} />
      <DisplayRow label={'Pays'} value={donneur?.pays.libelle} />
      <DisplayRow label={'Agrée'} value={donneur?.agree ? 'OUI' : 'NON'} />
      <DisplayRow label={'Observations'} value={donneur?.observations} />
    </Card>
  );
}

export default DonneurOrdreDisplay;
