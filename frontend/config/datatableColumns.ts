export const entrepriseColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Raison sociale',
    selector: (row: any) => row.raisonSociale,
    sortable: true,
    sortField: 'raisonSociale',
  },
  {
    name: 'Date de création',
    selector: (row: any) => row.dateCreation,
    sortable: true,
    sortField: 'dateCreation',
  },
];

export const pvColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Date PV',
    selector: (row: any) => row.datePV,
    sortable: true,
    sortField: 'datePV',
  },
  {
    name: 'Activité PV',
    selector: (row: any) => row.activitePV,
    sortable: true,
    sortField: 'activitePV',
  },
];

export const cautionColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Numéro arrivée',
    selector: (row: any) => row.numeroArrivee,
    sortable: true,
    sortField: 'numeroArrivee',
  },
  {
    name: "Date d'arrivée",
    selector: (row: any) => row.dateArrivee,
    sortable: true,
    sortField: 'dateArrivee',
  },
];

export const comptableColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Résultat net',
    selector: (row: any) => row.resultatNet,
    sortable: true,
    sortField: 'resultatNet',
  },
  {
    name: "Chiffre d'affaire",
    selector: (row: any) => row.chiffreAffaireTotal,
    sortable: true,
    sortField: 'chiffreAffaireTotal',
  },
];

export const assuranceColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Libelle',
    selector: (row: any) => row.libelle,
    sortable: true,
    sortField: 'libelle',
  },
];

export const bureauColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Libelle',
    selector: (row: any) => row.libelle,
    sortable: true,
    sortField: 'libelle',
  },
];

export const paysColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Libelle',
    selector: (row: any) => row.libelle,
    sortable: true,
    sortField: 'libelle',
  },
];

export const documentCautionColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Libelle',
    selector: (row: any) => row.libelle,
    sortable: true,
    sortField: 'libelle',
  },
];

export const associeColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Identifiant',
    selector: (row: any) => row.identifiant,
    sortable: true,
    sortField: 'identifiant',
  },
];

export const donneurOrdreColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Raison sociale',
    selector: (row: any) => row.raisonSociale,
    sortable: true,
    sortField: 'raisonSociale',
  },
];

export const userColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Nom',
    selector: (row: any) => row.nom,
    sortable: true,
    sortField: 'nom',
  },
  {
    name: 'Prénom',
    selector: (row: any) => row.prenom,
    sortable: true,
    sortField: 'prenom',
  },
];

export const entrepriseAssocieGerantColumns = [
  {
    name: 'ID',
    selector: (row: any) => row.id,
    sortable: true,
    sortField: 'id',
  },
  {
    name: 'Identifiant',
    selector: (row: any) => row.associeGerant.identifiant,
    sortable: true,
    sortField: 'identifiant',
  },
];
