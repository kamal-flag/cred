-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 06 juil. 2022 à 15:01
-- Version du serveur :  10.4.17-MariaDB
-- Version de PHP : 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `cred`
--

-- --------------------------------------------------------

--
-- Structure de la table `associe_gerant`
--

CREATE TABLE `associe_gerant` (
  `id` bigint(20) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `habilite` bit(1) DEFAULT NULL,
  `identifiant` varchar(255) DEFAULT NULL,
  `mineur` bit(1) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `raison_sociale` varchar(255) DEFAULT NULL,
  `residence` bit(1) DEFAULT NULL,
  `type_identifiant` int(11) DEFAULT NULL,
  `type_personne` int(11) DEFAULT NULL,
  `pays_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `associe_gerant`
--

INSERT INTO `associe_gerant` (`id`, `adresse`, `date_naissance`, `habilite`, `identifiant`, `mineur`, `nom`, `observations`, `prenom`, `raison_sociale`, `residence`, `type_identifiant`, `type_personne`, `pays_id`) VALUES
(5, 'zaza', '2022-06-11', b'1', 'FORA', b'1', 'Obaidi', 'za', 'Hassan', 'FORACOM', b'1', 7, 2, 1),
(6, 'adresse 1', '2022-06-02', b'1', 'id 123', b'0', 'nom 1', 'observations 1111', 'prenom 1', 'raison 1', b'1', 5, 1, 3),
(19, 'za', '2022-06-29', b'0', 'azaza', b'0', 'zaz', 'za', 'za', NULL, b'0', 1, 1, 1),
(20, 'zz', '2022-07-01', b'1', 'zzz', b'1', 'zz', 'oooo1234', 'zz', NULL, b'1', 1, 1, 1),
(21, 'tt', '2022-07-01', b'0', 'ttt', b'0', 'ttt', 'tt', 'ttt', NULL, b'0', 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `assurance`
--

CREATE TABLE `assurance` (
  `id` bigint(20) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `assurance`
--

INSERT INTO `assurance` (`id`, `libelle`) VALUES
(6, 'Wafa assurancex'),
(7, 'nouvelle entite'),
(11, 'assurance4 44'),
(13, 'assurance6'),
(14, 'assurance7'),
(15, 'assurance8'),
(16, 'assurance9'),
(17, 'assurance10'),
(18, 'assurance11'),
(19, 'assurance12'),
(20, 'assurance13'),
(21, 'assurance14'),
(22, 'assurance15'),
(23, 'assurance16'),
(24, 'assurance17'),
(25, 'assurance18'),
(26, 'assurance19'),
(27, 'assurance20'),
(32, 'nouvelle assurance ajouter'),
(38, 'new assurance'),
(39, 'aaaa'),
(40, 'aaaaa1'),
(42, 'testing'),
(43, 'zazaza'),
(44, 'assurance111');

-- --------------------------------------------------------

--
-- Structure de la table `bureau_douanier`
--

CREATE TABLE `bureau_douanier` (
  `id` bigint(20) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `bureau_douanier`
--

INSERT INTO `bureau_douanier` (`id`, `libelle`) VALUES
(1, 'bureau 1'),
(2, 'bureau 2');

-- --------------------------------------------------------

--
-- Structure de la table `caution`
--

CREATE TABLE `caution` (
  `id` bigint(20) NOT NULL,
  `date_arrivee` date DEFAULT NULL,
  `numero_arrivee` varchar(255) DEFAULT NULL,
  `numero_dossier` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `type_caution` int(11) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `caution`
--

INSERT INTO `caution` (`id`, `date_arrivee`, `numero_arrivee`, `numero_dossier`, `observations`, `type_caution`, `entreprise_id`) VALUES
(4, '2022-06-02', '123', 'dossier 123', 'observations', 4, 3),
(5, '2022-06-05', 'nouvel arrivé', 'dossier n123', 'azaza', 2, 4),
(6, '2022-07-01', 'bn', 'bn', 'bn', 4, 3);

-- --------------------------------------------------------

--
-- Structure de la table `caution_documents`
--

CREATE TABLE `caution_documents` (
  `caution_id` bigint(20) NOT NULL,
  `document_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `caution_documents`
--

INSERT INTO `caution_documents` (`caution_id`, `document_id`) VALUES
(4, 1),
(4, 3),
(4, 4),
(4, 5),
(4, 7),
(4, 8),
(4, 9),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 6),
(5, 7),
(6, 4),
(6, 5);

-- --------------------------------------------------------

--
-- Structure de la table `caution_document_deprecated`
--

CREATE TABLE `caution_document_deprecated` (
  `id` bigint(20) NOT NULL,
  `caution_id` bigint(20) DEFAULT NULL,
  `document_caution_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `caution_donneur_ordre`
--

CREATE TABLE `caution_donneur_ordre` (
  `caution_id` bigint(20) NOT NULL,
  `donneur_ordre_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `caution_donneur_ordre`
--

INSERT INTO `caution_donneur_ordre` (`caution_id`, `donneur_ordre_id`) VALUES
(4, 9),
(6, 7),
(6, 8),
(6, 9);

-- --------------------------------------------------------

--
-- Structure de la table `document_caution`
--

CREATE TABLE `document_caution` (
  `id` bigint(20) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `document_caution`
--

INSERT INTO `document_caution` (`id`, `libelle`) VALUES
(1, 'Statut de la société'),
(2, 'Extrait du registre de commerce'),
(3, 'Déclaration pour matériel'),
(4, 'PV de l\'assemblé de l\'entreprise'),
(5, 'Liasse fiscale'),
(6, 'Police d\'assurance'),
(7, 'Copies CIN/Passeport'),
(8, 'Copie du spécimen'),
(9, 'Lettre de confort');

-- --------------------------------------------------------

--
-- Structure de la table `donnee_comptable`
--

CREATE TABLE `donnee_comptable` (
  `id` bigint(20) NOT NULL,
  `achat_consommable` varchar(255) DEFAULT NULL,
  `achat_service` varchar(255) DEFAULT NULL,
  `actif_circulant` varchar(255) DEFAULT NULL,
  `actif_total` varchar(255) DEFAULT NULL,
  `annee` int(11) DEFAULT NULL,
  `autres_charges` varchar(255) DEFAULT NULL,
  `capital_permanent` varchar(255) DEFAULT NULL,
  `capitaux_propres` varchar(255) DEFAULT NULL,
  `charge_personnel` varchar(255) DEFAULT NULL,
  `chiffre_affaire_export` varchar(255) DEFAULT NULL,
  `chiffre_affaire_total` varchar(255) DEFAULT NULL,
  `dettes` varchar(255) DEFAULT NULL,
  `frais_financiers` varchar(255) DEFAULT NULL,
  `impots_tax` varchar(255) DEFAULT NULL,
  `materiel_outillage` varchar(255) DEFAULT NULL,
  `montant_delegation` varchar(255) DEFAULT NULL,
  `nature1` varchar(255) DEFAULT NULL,
  `nature2` varchar(255) DEFAULT NULL,
  `numero_police_assurance1` varchar(255) DEFAULT NULL,
  `numero_police_assurance2` varchar(255) DEFAULT NULL,
  `passif_total` varchar(255) DEFAULT NULL,
  `resultat_net` varchar(255) DEFAULT NULL,
  `stocks` varchar(255) DEFAULT NULL,
  `subventions_exploitation` varchar(255) DEFAULT NULL,
  `tresorerie_passif` varchar(255) DEFAULT NULL,
  `assurance_id` bigint(20) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `donneur_ordre`
--

CREATE TABLE `donneur_ordre` (
  `id` bigint(20) NOT NULL,
  `activite` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `raison_sociale` varchar(255) DEFAULT NULL,
  `pays_id` bigint(20) DEFAULT NULL,
  `agree` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `donneur_ordre`
--

INSERT INTO `donneur_ordre` (`id`, `activite`, `observations`, `raison_sociale`, `pays_id`, `agree`) VALUES
(7, 'clothing', 'aaa', 'ABBA clothing group', 3, b'1'),
(8, 'sursum', 'bbbb', 'ABL SURSUM', 4, b'1'),
(9, 'aaaa', 'tttt', 'ABURNET LIMITED', 1, b'1');

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

CREATE TABLE `entreprise` (
  `id` bigint(20) NOT NULL,
  `activite` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `capital_social` int(11) DEFAULT NULL,
  `centre_rc` varchar(255) DEFAULT NULL,
  `chaines_production` varchar(255) DEFAULT NULL,
  `date_creation` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `etat_entreprise` int(11) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `nombre_employes` int(11) DEFAULT NULL,
  `numero_rc` varchar(255) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `raison_sociale` varchar(255) DEFAULT NULL,
  `telephone1` varchar(255) DEFAULT NULL,
  `telephone2` varchar(255) DEFAULT NULL,
  `telephone3` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id`, `activite`, `adresse`, `capital_social`, `centre_rc`, `chaines_production`, `date_creation`, `email`, `etat_entreprise`, `fax`, `nombre_employes`, `numero_rc`, `observations`, `raison_sociale`, `telephone1`, `telephone2`, `telephone3`) VALUES
(3, '6456', '654', 4645, '45354', '6456', '2022-05-01', 'kamal.flag@gmail.com', 3, '0611223399', 5464, '6456', '45645', '99999999999999999', '0611223399', '0611223399', '0611223399'),
(4, '645645', '645645', 4645, '634516345', '645645', '2022-06-16', 'kamal.flag@gmail.com', 1, '0611223399', 645645, '645645', '654645', 'entr 1', '0611223399', '0611223399', '0611223399'),
(5, '6445', '645645', 64456, '645645', '6456', '2022-06-02', 'daniel.torro71@gmail.com', NULL, '0611223399', 6456, '645645', '6456464645', 'azerty', '0611223399', '0611223399', '0611223399'),
(6, '6445', '645645', 64456, '645645', '6456', '2022-06-02', 'daniel.torro71@gmail.com', NULL, '0611223399', 6456, '645645', '6456464645', '645645', '0611223399', '0611223399', '0611223399'),
(7, '6456', '645645', 645645, '5464', '645645', '2022-06-12', 'elmorabet.dev@gmail.com', NULL, '0611223399', 456456, '46456', '645645645', 'azerty', '0611223399', '0611223399', '0611223399'),
(8, '45645', '645645', 101, 'dsqdqs', '645645', '2022-06-12', 'kamal.flag@gmail.com', NULL, '0611223399', 4645, '123441', '6456455445', 'oooooo', '0611223399', '0611223399', '0611223399'),
(9, '65464', '4645', 65645, '45634', '64564', '2022-06-03', 'elmorabet.dev@gmail.com', NULL, '0611223399', 64564, '64564', '64564645', '4645654', '0611223399', '0611223399', '0611223399'),
(10, '645645', '6445', 645645, '645654', '6445', '2022-06-04', 'elmorabet.dev@gmail.com', NULL, '0611223399', 645, '64564', '645645', 'yyyyyyy11x', '0611223399', '0611223399', '0611223399'),
(11, '6445', '645645', 64456, '645645', '6456', '2022-06-02', 'daniel.torro71@gmail.com', NULL, '0611223399', 6456, '645645', '6456464645', '645645', '0611223399', '0611223399', '0611223399');

-- --------------------------------------------------------

--
-- Structure de la table `entreprise_associe_gerant`
--

CREATE TABLE `entreprise_associe_gerant` (
  `id` bigint(20) NOT NULL,
  `associe_gerant_id` bigint(20) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL,
  `associe` bit(1) DEFAULT NULL,
  `gerant` bit(1) DEFAULT NULL,
  `habilite` bit(1) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `entreprise_associe_gerant`
--

INSERT INTO `entreprise_associe_gerant` (`id`, `associe_gerant_id`, `entreprise_id`, `associe`, `gerant`, `habilite`, `observations`) VALUES
(7, 5, 5, NULL, NULL, NULL, NULL),
(8, 5, 5, NULL, NULL, NULL, NULL),
(9, 6, 3, b'1', b'1', b'1', 'aaaa'),
(13, 20, 3, b'1', b'1', b'0', 'aaa'),
(16, 19, 3, b'1', b'1', b'0', ''),
(22, 21, 3, b'0', b'1', b'1', '');

-- --------------------------------------------------------

--
-- Structure de la table `fiche_synoptique`
--

CREATE TABLE `fiche_synoptique` (
  `id` bigint(20) NOT NULL,
  `date_generation` date DEFAULT NULL,
  `libelle` varchar(255) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `gerant_entreprise`
--

CREATE TABLE `gerant_entreprise` (
  `id` bigint(20) NOT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `associe_gerant_id` bigint(20) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(22);

-- --------------------------------------------------------

--
-- Structure de la table `pays`
--

CREATE TABLE `pays` (
  `id` bigint(20) NOT NULL,
  `libelle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pays`
--

INSERT INTO `pays` (`id`, `libelle`) VALUES
(1, 'Maroc'),
(3, 'France'),
(4, 'Italie');

-- --------------------------------------------------------

--
-- Structure de la table `pv`
--

CREATE TABLE `pv` (
  `id` bigint(20) NOT NULL,
  `activite_pv` varchar(255) DEFAULT NULL,
  `chaines_production` varchar(255) DEFAULT NULL,
  `date_activite` date DEFAULT NULL,
  `materiel_acquis` bit(1) DEFAULT NULL,
  `materiel_importe` bit(1) DEFAULT NULL,
  `materiel_neuf` varchar(255) DEFAULT NULL,
  `materiel_usager` varchar(255) DEFAULT NULL,
  `nombre_employes` int(11) DEFAULT NULL,
  `observations` varchar(255) DEFAULT NULL,
  `bureau_douanier_id` bigint(20) DEFAULT NULL,
  `entreprise_id` bigint(20) DEFAULT NULL,
  `date_pv` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `pv`
--

INSERT INTO `pv` (`id`, `activite_pv`, `chaines_production`, `date_activite`, `materiel_acquis`, `materiel_importe`, `materiel_neuf`, `materiel_usager`, `nombre_employes`, `observations`, `bureau_douanier_id`, `entreprise_id`, `date_pv`) VALUES
(2, 'ggfdgfdfdg', 'gffgdfdgfgd', '2022-06-09', b'1', b'1', 'ghjgjgh 32', 'jgjghjg', 101, 'hkhjkh', 2, 3, '2022-06-04'),
(3, 'activité new edité x', 'mode prod edité x', '2022-02-18', b'1', b'1', 'neuf neuf edité x', 'usager usager edité x', 1009988, 'fsdf edité x', 2, 10, '2022-01-12'),
(4, 'gdfgfd', 'gdfg', '2022-06-09', b'1', b'1', 'gdf', 'gdf', 222, 'gdf', 2, 4, '2022-06-02'),
(5, 'yrty', 'ytyt', '2022-07-03', b'0', b'0', 'yrt', 'yrt', 5555, 'gh', 1, 3, '2022-07-01');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `encrypted_password` varchar(255) NOT NULL,
  `fonction` varchar(255) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `encrypted_password`, `fonction`, `nom`, `prenom`, `user_id`, `role`) VALUES
(1, 'ayoub@email.com', '$2a$10$Lrth1beOMVJ.TblRNt1bf.SBA4C62sLjE403U5YFVaeeBqphQPD82', 'docteur', 'otmani', 'ayoub', 'Z836VSvwrjfNhn9TrxwZxVN8tkD3S28O1654251804603', 1),
(10, 'kira@email.com', '$2a$10$vejADYF4fqdJMEsPeV.2IeSzMKrewvAEKVFjFBx6B6ligplwF6zHy', 'normal user', 'El Morabet', 'Kamal', 'Hml9RjJZgDTGJ5yDqajZp9gbe90MoLiJ1656860065238', 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `associe_gerant`
--
ALTER TABLE `associe_gerant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrhdnmuyfceg5kkd9yyriryksp` (`pays_id`);

--
-- Index pour la table `assurance`
--
ALTER TABLE `assurance`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `bureau_douanier`
--
ALTER TABLE `bureau_douanier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `caution`
--
ALTER TABLE `caution`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKpxkts3csouidxq7kom5lsa2o4` (`entreprise_id`);

--
-- Index pour la table `caution_documents`
--
ALTER TABLE `caution_documents`
  ADD PRIMARY KEY (`caution_id`,`document_id`),
  ADD KEY `FK9kp7km0lr8smvdksyf1bn0m38` (`document_id`);

--
-- Index pour la table `caution_document_deprecated`
--
ALTER TABLE `caution_document_deprecated`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgy3fxvtkq7jcapu5sly594t53` (`caution_id`),
  ADD KEY `FKf3dfssrhqmvikoal89iea58as` (`document_caution_id`);

--
-- Index pour la table `caution_donneur_ordre`
--
ALTER TABLE `caution_donneur_ordre`
  ADD PRIMARY KEY (`caution_id`,`donneur_ordre_id`),
  ADD KEY `FKm8l6jwhvs542kk9nu94uwcwg2` (`donneur_ordre_id`);

--
-- Index pour la table `document_caution`
--
ALTER TABLE `document_caution`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `donnee_comptable`
--
ALTER TABLE `donnee_comptable`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5o57dpgclh8pkk6515y5jxic9` (`assurance_id`),
  ADD KEY `FKbly4weiq72v2aq6g4p6jpw613` (`entreprise_id`);

--
-- Index pour la table `donneur_ordre`
--
ALTER TABLE `donneur_ordre`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKouwdnlms32gdr2bhwa6b8wyoc` (`pays_id`);

--
-- Index pour la table `entreprise`
--
ALTER TABLE `entreprise`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `entreprise_associe_gerant`
--
ALTER TABLE `entreprise_associe_gerant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKm6l77lbaluh2e476dmnhhn1fi` (`associe_gerant_id`),
  ADD KEY `FKny5jj51rk0ss7fhtsch3n9yv1` (`entreprise_id`);

--
-- Index pour la table `fiche_synoptique`
--
ALTER TABLE `fiche_synoptique`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKag9q8xqp15c7uo8xc5gce2ydd` (`entreprise_id`);

--
-- Index pour la table `gerant_entreprise`
--
ALTER TABLE `gerant_entreprise`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK8hm4b0a3th4bl8s3oi9n5jivk` (`associe_gerant_id`),
  ADD KEY `FKnou9iefitowhjfo9ruyb40pdc` (`entreprise_id`);

--
-- Index pour la table `pays`
--
ALTER TABLE `pays`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `pv`
--
ALTER TABLE `pv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKlmpce1hfqx8c1pt9ip144gg1f` (`bureau_douanier_id`),
  ADD KEY `FK1bia3aan85bj27r71c3anekem` (`entreprise_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `assurance`
--
ALTER TABLE `assurance`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT pour la table `bureau_douanier`
--
ALTER TABLE `bureau_douanier`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `caution`
--
ALTER TABLE `caution`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `caution_document_deprecated`
--
ALTER TABLE `caution_document_deprecated`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `document_caution`
--
ALTER TABLE `document_caution`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT pour la table `entreprise`
--
ALTER TABLE `entreprise`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `entreprise_associe_gerant`
--
ALTER TABLE `entreprise_associe_gerant`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pour la table `fiche_synoptique`
--
ALTER TABLE `fiche_synoptique`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pays`
--
ALTER TABLE `pays`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `pv`
--
ALTER TABLE `pv`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `associe_gerant`
--
ALTER TABLE `associe_gerant`
  ADD CONSTRAINT `FKrhdnmuyfceg5kkd9yyriryksp` FOREIGN KEY (`pays_id`) REFERENCES `pays` (`id`);

--
-- Contraintes pour la table `caution`
--
ALTER TABLE `caution`
  ADD CONSTRAINT `FKpxkts3csouidxq7kom5lsa2o4` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `caution_documents`
--
ALTER TABLE `caution_documents`
  ADD CONSTRAINT `FK712rs4lydu7v9uni8aaj0jyc7` FOREIGN KEY (`caution_id`) REFERENCES `caution` (`id`),
  ADD CONSTRAINT `FK9kp7km0lr8smvdksyf1bn0m38` FOREIGN KEY (`document_id`) REFERENCES `document_caution` (`id`);

--
-- Contraintes pour la table `caution_document_deprecated`
--
ALTER TABLE `caution_document_deprecated`
  ADD CONSTRAINT `FKf3dfssrhqmvikoal89iea58as` FOREIGN KEY (`document_caution_id`) REFERENCES `document_caution` (`id`),
  ADD CONSTRAINT `FKgy3fxvtkq7jcapu5sly594t53` FOREIGN KEY (`caution_id`) REFERENCES `caution` (`id`);

--
-- Contraintes pour la table `caution_donneur_ordre`
--
ALTER TABLE `caution_donneur_ordre`
  ADD CONSTRAINT `FK9cabmidvva931njc5goji7y2l` FOREIGN KEY (`caution_id`) REFERENCES `caution` (`id`),
  ADD CONSTRAINT `FKm8l6jwhvs542kk9nu94uwcwg2` FOREIGN KEY (`donneur_ordre_id`) REFERENCES `donneur_ordre` (`id`);

--
-- Contraintes pour la table `donnee_comptable`
--
ALTER TABLE `donnee_comptable`
  ADD CONSTRAINT `FK5o57dpgclh8pkk6515y5jxic9` FOREIGN KEY (`assurance_id`) REFERENCES `assurance` (`id`),
  ADD CONSTRAINT `FKbly4weiq72v2aq6g4p6jpw613` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `donneur_ordre`
--
ALTER TABLE `donneur_ordre`
  ADD CONSTRAINT `FKouwdnlms32gdr2bhwa6b8wyoc` FOREIGN KEY (`pays_id`) REFERENCES `pays` (`id`);

--
-- Contraintes pour la table `entreprise_associe_gerant`
--
ALTER TABLE `entreprise_associe_gerant`
  ADD CONSTRAINT `FKm6l77lbaluh2e476dmnhhn1fi` FOREIGN KEY (`associe_gerant_id`) REFERENCES `associe_gerant` (`id`),
  ADD CONSTRAINT `FKny5jj51rk0ss7fhtsch3n9yv1` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `fiche_synoptique`
--
ALTER TABLE `fiche_synoptique`
  ADD CONSTRAINT `FKag9q8xqp15c7uo8xc5gce2ydd` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `gerant_entreprise`
--
ALTER TABLE `gerant_entreprise`
  ADD CONSTRAINT `FK8hm4b0a3th4bl8s3oi9n5jivk` FOREIGN KEY (`associe_gerant_id`) REFERENCES `associe_gerant` (`id`),
  ADD CONSTRAINT `FKnou9iefitowhjfo9ruyb40pdc` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `pv`
--
ALTER TABLE `pv`
  ADD CONSTRAINT `FK1bia3aan85bj27r71c3anekem` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`),
  ADD CONSTRAINT `FKlmpce1hfqx8c1pt9ip144gg1f` FOREIGN KEY (`bureau_douanier_id`) REFERENCES `bureau_douanier` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
