import React from 'react';
import DisplayRow from '../../shared/display/DisplayRow';
import Card from '../../UI/Card';

interface Props {
  comptable: Comptable;
}

function ComptableDisplay({ comptable }: Props) {
  return (
    <Card title="Informations des données comptable">
      <DisplayRow label={'Année'} value={comptable?.annee} />
      <DisplayRow
        label={"Matériel d'outillage"}
        value={comptable?.materielOutillage}
      />
      <DisplayRow
        label={'Capitaux propres'}
        value={comptable?.capitauxPropres}
      />
      <DisplayRow label={'Résultat net'} value={comptable?.resultatNet} />
      <DisplayRow
        label={'Charge personnel'}
        value={comptable?.chargePersonnel}
      />
      <DisplayRow label={'Achat service'} value={comptable?.achatService} />
      <DisplayRow
        label={"Chiffre d'affaire total"}
        value={comptable?.chiffreAffaireTotal}
      />
      <DisplayRow
        label={"Chiffre d'affaire export"}
        value={comptable?.chiffreAffaireExport}
      />
      <DisplayRow
        label={'Numéro police assurance 1'}
        value={comptable?.numeroPoliceAssurance1}
      />
      <DisplayRow label={'Nature 1'} value={comptable?.nature1} />
      <DisplayRow
        label={'Numéro police assurance 2'}
        value={comptable?.numeropoliceAssurance2}
      />
      <DisplayRow label={'Nature 2'} value={comptable?.nature2} />
      <DisplayRow
        label={'Montant délégation'}
        value={comptable?.montantDelegation}
      />
      <DisplayRow label={'Dettes'} value={comptable?.dettes} />
      <DisplayRow
        label={'Achat consommable'}
        value={comptable?.achatConsommable}
      />
      <DisplayRow label={'Autres charges'} value={comptable?.autresCharges} />
      <DisplayRow
        label={"Subventions d'exploitation"}
        value={comptable?.subventionsExploitation}
      />
      <DisplayRow label={'Impôts tax'} value={comptable?.impotsTax} />
      <DisplayRow
        label={'Capital permanent'}
        value={comptable?.capitalPermanent}
      />
      <DisplayRow label={'Actif circulant'} value={comptable?.actifCirculant} />
      <DisplayRow
        label={'Trésorie passif'}
        value={comptable?.tresoreriePassif}
      />
      <DisplayRow label={'Actif total'} value={comptable?.actifTotal} />
      <DisplayRow label={'Passif total'} value={comptable?.passifTotal} />
      <DisplayRow
        label={'Frais financieres '}
        value={comptable?.fraisFinanciers}
      />
      <DisplayRow label={'Stocks'} value={comptable?.stocks} />
      <DisplayRow label={'Assurance'} value={comptable?.assurance?.libelle} />
    </Card>
  );
}

export default ComptableDisplay;
