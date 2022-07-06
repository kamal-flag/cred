import React, { useState } from 'react';
import { etatEntreprise } from '../../../config/referentiel';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  entreprise: Entreprise;
}
function EntrepriseDisplay({ entreprise }: Props) {
  return (
    <Card title="Informations de l'entreprise">
      <DisplayRow label={'Centre RC'} value={entreprise?.centreRC} />
      <DisplayRow label={'Numéro RC'} value={entreprise?.numeroRC} />
      <DisplayRow label={'Raison Sociale'} value={entreprise?.raisonSociale} />
      <DisplayRow label={'Date de création'} value={entreprise?.dateCreation} />
      <DisplayRow label={'Capital Social'} value={entreprise?.capitalSocial} />
      <DisplayRow label={'Activité'} value={entreprise?.activite} />
      <DisplayRow
        label={'Nombre employés'}
        value={entreprise?.nombreEmployes}
      />
      <DisplayRow
        label={'Chaines de production'}
        value={entreprise?.chainesProduction}
      />
      <DisplayRow label={'Adresse'} value={entreprise?.adresse} />
      <DisplayRow label={'Téléphone1'} value={entreprise?.telephone1} />
      <DisplayRow label={'Téléphone2'} value={entreprise?.telephone2} />
      <DisplayRow label={'Téléphone3'} value={entreprise?.telephone3} />
      <DisplayRow label={'Fax'} value={entreprise?.fax} />
      <DisplayRow label={'Email'} value={entreprise?.email} />
      <DisplayRow
        label={'Etat entreprise'}
        value={etatEntreprise[entreprise?.etatEntreprise - 1]}
      />
      <DisplayRow label={'Observations'} value={entreprise?.observations} />
    </Card>
  );
}

export default EntrepriseDisplay;
