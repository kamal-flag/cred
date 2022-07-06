type CustomHttpResponse = {
  status: number;
  message: string;
  success: boolean;
  data: any;
  dataErrors: any;
};
type User = {
  id: number;
  email: string;
  nom: string;
  prenom: string;
  fonction: string;
  role: number;
};

type Entreprise = {
  id: number;
  centreRC: string;
  numeroRC: string;
  raisonSociale: string;
  dateCreation: date;
  capitalSocial: number;
  activite: string;
  nombreEmployes: number;
  chainesProduction: string;
  adresse: string;
  telephone1: string;
  telephone2: string;
  telephone3: string;
  fax: string;
  email: string;
  observations: string;
  etatEntreprise: number;
};

type Pv = {
  id: number;
  datePV: date;
  activitePV: string;
  dateActivite: date;
  materielNeuf: string;
  materielUsager: string;
  materielImporte: boolean;
  materielAcquis: boolean;
  nombreEmployes: number;
  chainesProduction: string;
  observations: string;
  bureauDouanier: BoureauDouanier;
  entreprise: Entreprise;
};

type BoureauDouanier = {
  id: number;
  libelle: string;
};

type Caution = {
  id: number;
  numeroArrivee: string;
  dateArrivee: date;
  typeCaution: number;
  numeroDossier: string;
  observations: string;
  entreprise: Entreprise;
  donneurOrdres: DonneurOrdre[];
  documents: DocumentCaution[];
};

type Comptable = {
  id: number;
  annee: number;
  materielOutillage: string;
  capitauxPropres: string;
  resultatNet: string;
  chargePersonnel: string;
  achatService: string;
  chiffreAffaireTotal: string;
  chiffreAffaireExport: string;
  numeroPoliceAssurance1: string;
  nature1: string;
  numeropoliceAssurance2: string;
  nature2: string;
  montantDelegation: string;
  dettes: string;
  achatConsommable: string;
  autresCharges: string;
  subventionsExploitation: string;
  impotsTax: string;
  capitalPermanent: string;
  actifCirculant: string;
  tresoreriePassif: string;
  actifTotal: string;
  passifTotal: string;
  fraisFinanciers: string;
  stocks: string;
  entreprise: Entreprise;
  assurance: Assurance;
};

type Assurance = {
  id: number;
  libelle: string;
};

type Pays = {
  id: number;
  libelle: string;
};

type DonneurOrdre = {
  id: number;
  raisonSociale: string;
  activite: string;
  observations: string;
  pays: Pays;
  agree: boolean;
  cautions: Caution[];
};

type DocumentCaution = {
  id: number;
  libelle: string;
};

type AssocieGerant = {
  id: number;
  typePersonne: number;
  mineur: boolean;
  typeIdentifiant: number;
  identifiant: string;
  adresse: string;
  observations: string;
  nom: string;
  prenom: string;
  dateNaissance: date;
  residence: boolean;
  habilite: boolean;
  raisonSociale: string;
  pays: Pays;
};

type EntrepriseAssocie = {
  id: number;
  entreprise: Entreprise;
  associeGerant: AssocieGerant;
  associe: boolean;
  gerant: boolean;
  habilite: boolean;
  observations: string;
};
