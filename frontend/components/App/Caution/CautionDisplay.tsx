import React, { useEffect, useState } from 'react';
import { typeCaution } from '../../../config/referentiel';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  caution: Caution;
}

function CautionDisplay({ caution }: Props) {
  const [documents, setDocuments] = useState('');
  const [donneurs, setDonneurs] = useState('');
  console.log(caution?.documents);

  useEffect(() => {
    let tmp = caution?.documents
      .map((item) => {
        return item.libelle;
      })
      .join(' , ');
    setDocuments(tmp);

    tmp = caution?.donneurOrdres
      .map((item) => {
        return item.raisonSociale;
      })
      .join(' , ');
    setDonneurs(tmp);
  }, []);
  return (
    <Card title="Informations du caution">
      <DisplayRow label={'Numéro arrivée'} value={caution?.numeroArrivee} />
      <DisplayRow label={'Date arrivée'} value={caution?.dateArrivee} />
      <DisplayRow
        label={'Type caution'}
        value={typeCaution[caution?.typeCaution - 1]}
      />
      <DisplayRow label={'Numéro dossier'} value={caution?.numeroDossier} />
      <DisplayRow label={'Documents'} value={documents} />
      {caution?.typeCaution == 4 && (
        <DisplayRow label={'Donneurs Ordres'} value={donneurs} />
      )}
      <DisplayRow label={'Observations'} value={caution?.observations} />
    </Card>
  );
}

export default CautionDisplay;
