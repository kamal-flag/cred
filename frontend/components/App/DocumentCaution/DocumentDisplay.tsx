import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  document: DocumentCaution;
}

function DocumentCautionDisplay({ document }: Props) {
  return (
    <Card title="Informations du document de caution">
      <DisplayRow label={'Libellé'} value={document?.libelle} />
    </Card>
  );
}

export default DocumentCautionDisplay;
