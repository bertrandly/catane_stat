# cataneStat

1. [Description](##Description)
1. [Compilation](#compilation)
1. [Déploiement](#Déploiement)


## Description
Ce projet permet de créer une progressive web app pour établir des statistiques lors de vos parties de Catane.

## Compilation
* **Installation des dépendances**  
  Lancer la commande: phpcomposer install
  
* **Build de la PWA**  
  Lancer la commande: yarn build  
  Les fichiers de l'app sont générés dans /public/pwa
## Déploiement

* Le webroot est le répertoire /public
* Copier le fichier .env et renommer la copie .env.local
Dans le fichier .env.local créé, renseigner les informations d'accès à votre base de données dans DATABASE_URL
