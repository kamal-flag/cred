import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  pv: Pv;
}

function PvDisplay({ pv }: Props) {
  return (
    <Card title="Informations du PV">
      <DisplayRow label={'Activité du PV'} value={pv?.activitePV} />
      <DisplayRow
        label={'Bureau douanier'}
        value={pv?.bureauDouanier.libelle}
      />
      <DisplayRow label={'Date du PV'} value={pv?.datePV} />
      <DisplayRow label={"Date de l'activite"} value={pv?.dateActivite} />
      <DisplayRow label={'Matériel neuf'} value={pv?.materielNeuf} />
      <DisplayRow label={'Matériel usager'} value={pv?.materielUsager} />
      <DisplayRow label={'Nombre employés'} value={pv?.nombreEmployes} />
      <DisplayRow
        label={'Chaines de production'}
        value={pv?.chainesProduction}
      />
      <DisplayRow
        label={'Matériel importé'}
        value={pv?.materielImporte ? 'OUI' : 'NON'}
      />
      <DisplayRow
        label={'Matériel acquis'}
        value={pv?.materielAcquis ? 'OUI' : 'NON'}
      />
      <DisplayRow label={'Observations'} value={pv?.observations} />
    </Card>
  );
}

export default PvDisplay;
