import * as yup from 'yup';

const yupMessages = {
  CHAMP_OBLIGATOIRE: 'ce champ est obligatoire',
  CHAMP_NUMERIQUE: 'ce champ est numérique',
  CHAMP_DATE: 'ce champ doit être une date',
  CHAMP_STRING: 'ce champ doit être rempli',
  CHAMP_POSITIVE: 'ce champ doit être positive',
  CHAMP_EMAIL: 'vous devez saisir un email valide',
  CHAMP_ANNEE: 'vous devez saisir une année valide comme 2004',
  CHAMP_TELEPHONE: 'vous devez saisir un numéro de téléphone valide',
  CHAMP_DATE_MAX_TODAY:
    "la date doit être égal ou inférieur à la date d'aujourdui",
  CHAMP_SELECT_OBLIGATOIRE: 'Vous devez séléctionner une valeur',
};
/*
export const schemaAssuranceValidation = yup.object({
    firstName: yup.string().required("first name est obligatoire"),
    age: yup.number().typeError('Amount must be a number').positive("l'âge doit être positive").integer("l'âge doit être integer").required("l'âge est obligatoire"),
  }).required();

  */

export const schemaEntrepriseValidation = yup
  .object({
    centreRC: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    numeroRC: yup
      .number()
      .typeError(yupMessages.CHAMP_NUMERIQUE)
      .positive(yupMessages.CHAMP_POSITIVE)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    raisonSociale: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    dateCreation: yup
      .date()
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_DATE),
    capitalSocial: yup
      .number()
      .typeError(yupMessages.CHAMP_NUMERIQUE)
      .positive(yupMessages.CHAMP_POSITIVE)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    activite: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    nombreEmployes: yup
      .number()
      .typeError(yupMessages.CHAMP_NUMERIQUE)
      .positive(yupMessages.CHAMP_POSITIVE)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    chainesProduction: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    adresse: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    telephone1: yup
      .string()
      .matches(
        ///^\0?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/,
        /^0[0-9]{9}$/,
        yupMessages.CHAMP_TELEPHONE
      )
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    telephone2: yup
      .string()
      .matches(
        ///^\0?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/,
        /^0[0-9]{9}$/,
        yupMessages.CHAMP_TELEPHONE
      )
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    telephone3: yup
      .string()
      .matches(
        ///^\0?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/,
        /^0[0-9]{9}$/,
        yupMessages.CHAMP_TELEPHONE
      )
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    fax: yup
      .string()
      .matches(
        ///^\0?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$/,
        /^0[0-9]{9}$/,
        yupMessages.CHAMP_TELEPHONE
      )
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    email: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .email(yupMessages.CHAMP_EMAIL)
      .typeError(yupMessages.CHAMP_STRING),
    observations: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaPvValidation = yup
  .object({
    activitePV: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    datePV: yup
      .date()
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_DATE),
    dateActivite: yup
      .date()
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_DATE),
    materielNeuf: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    //bureauDouanier: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE),
    materielUsager: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    //materielImporte: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE),
    //materielAcquis: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE),
    nombreEmployes: yup
      .number()
      .typeError(yupMessages.CHAMP_NUMERIQUE)
      .positive(yupMessages.CHAMP_POSITIVE)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    chainesProduction: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    observations: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaCautionValidation = yup
  .object({
    numeroArrivee: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    dateArrivee: yup
      .date()
      .typeError(yupMessages.CHAMP_DATE)
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    //typeCaution: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE),
    numeroDossier: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    observations: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaComptableValidation = yup
  .object({
    annee: yup
      .string()
      .matches(/^\d{4}$/, yupMessages.CHAMP_ANNEE)
      .typeError(yupMessages.CHAMP_STRING)
      .required(yupMessages.CHAMP_OBLIGATOIRE),
    materielOutillage: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    capitauxPropres: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    resultatNet: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    chargePersonnel: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    achatService: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    chiffreAffaireTotal: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    chiffreAffaireExport: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    numeroPoliceAssurance1: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    nature1: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    numeropoliceAssurance2: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    nature2: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    montantDelegation: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    dettes: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    achatConsommable: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    autresCharges: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    subventionsExploitation: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    impotsTax: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    capitalPermanent: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    actifCirculant: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    tresoreriePassif: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    actifTotal: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    passifTotal: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    fraisFinanciers: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    stocks: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaAssuranceValidation = yup
  .object({
    libelle: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaBureauDouanierValidation = yup
  .object({
    libelle: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaPaysValidation = yup
  .object({
    libelle: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaDocumentCautionValidation = yup
  .object({
    libelle: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaAssocieGerantValidation = yup
  .object({
    identifiant: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    adresse: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    observations: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    /*dateNaissance: yup
      .date()
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      //.required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_DATE),*/
    /*nom: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    prenom: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    dateNaissance: yup
      .date()
      .max(new Date(), yupMessages.CHAMP_DATE_MAX_TODAY)
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_DATE),
    raisonSociale: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),*/
  })
  .required();

export const schemaDonneurOrdreValidation = yup
  .object({
    raisonSociale: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    activite: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    observations: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaUserValidation = yup
  .object({
    nom: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    prenom: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    fonction: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    email: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .email(yupMessages.CHAMP_EMAIL)
      .typeError(yupMessages.CHAMP_STRING),
    password: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaUserEditPasswordValidation = yup
  .object({
    oldPassword: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
    newPassword: yup
      .string()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_STRING),
  })
  .required();

export const schemaRechercheEntrepriseValidation = yup
  .object({
    /*centreRC: yup
      .string()
      .when('numeroRC', {
        is: true,
        then: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE).typeError(yupMessages.CHAMP_STRING)
      }),
      numeroRC: yup
      .string()
      .when('centreRC', {
        is: false,
        then: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE).typeError(yupMessages.CHAMP_STRING)
      }),*/
    /*raisonSociale: yup
      .string()
      .when(['centreRC', 'numeroRC'], {
        is: false,
        then: yup.string().required(yupMessages.CHAMP_OBLIGATOIRE)
        .typeError(yupMessages.CHAMP_STRING),
      }), */
  })
  .required();

export const schemaEntrepriseAssocieGerant = yup.object().shape({
  associeGerant: yup.object().shape({
    id: yup
      .number()
      .required(yupMessages.CHAMP_OBLIGATOIRE)
      .typeError(yupMessages.CHAMP_SELECT_OBLIGATOIRE),
  }),
});
