export default interface SchemaFormulaire {
  name: string;
  label: string;
  type: string;
  css: string;
  key: string;
  value: string;
  options: any;
}

/*
export const assuranceSchema = [
  { name: 'firstName', type: 'input', css: 'border bg-yellow-100' },
  { name: 'age', type: 'input', css: 'border bg-orange-500' },
  {
    name: 'color',
    label: 'Color',
    type: 'select',
    css: 'border bg-green-300',
    key: 'id',
    value: 'libelle',
  },
];
*/

export const assuranceSchema = [ 
  { name: 'libelle', label: 'Libellé', type: 'input', css: 'w-full lg:w-6/12 px-4' },
];

export const pvSchema = [ 
  { name: 'datePV', label: 'Date PV', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'activitePV', label: 'Activité PV', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'dateActivite', label: 'Date activité', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'materielNeuf', label: 'Matériel neuf', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'materielUsager', label: 'Matériel usager', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'materielImporte', label: 'Matériel importé', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'materielAcquis', label: 'Matériel Acquis', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'nombreEmployes', label: 'Nombre employés', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'chainesProduction', label: 'Chaines de production', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'observations', label: 'Observations', type: 'input', css: 'w-full lg:w-6/12 px-4' },
  { name: 'entreprise', label: 'Entreprise', type: 'select', css: 'w-full lg:w-6/12 px-4', key: 'id',
  value: 'raisonSociale', } ,
  { name: 'bureauDouanier', label: 'Bureau douanier', type: 'select', css: 'w-full lg:w-6/12 px-4', key: 'id',
  value: 'libelle', },
];